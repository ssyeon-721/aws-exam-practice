// ============================================================
// 전날 복습 모드
// ============================================================
let reviewQuestions = [];
let reviewCur = 0;
let reviewAns = {};

function startReview() {
  const data = loadPlanner();
  if (!data || data.review.pending.length === 0) { showDashboard(); return; }

  // 오늘 틀린 문제는 전날 복습에서 제외 (내일 복습 대상)
  var today = todayStr();
  var todayWrong = (data.dailyLog[today] && data.dailyLog[today].wrong) ? data.dailyLog[today].wrong : [];
  var pendingFiltered = data.review.pending.filter(function(num) { return todayWrong.indexOf(num) < 0; });

  if (pendingFiltered.length === 0) { showDashboard(); return; }

  reviewQuestions = pendingFiltered.map(function(num) {
    return ALL_QUESTIONS.find(function(q) { return q.num === num; });
  }).filter(Boolean);

  if (reviewQuestions.length === 0) { showDashboard(); return; }

  reviewCur = 0;
  reviewAns = {};
  hideAllSections();
  document.getElementById('planner-review').classList.remove('hidden');
  document.getElementById('mode-display').textContent = '\u{1F4D6} 전날 복습';
  renderReview();
}

function renderReview() {
  const q = reviewQuestions[reviewCur];
  const c = document.getElementById('review-container');
  const data = loadPlanner();
  const hasAns = reviewAns[q.num] && reviewAns[q.num].length > 0;
  const ansComplete = hasAns && (!q.isMulti || reviewAns[q.num].length >= q.answers.length);
  const showRes = ansComplete;

  let cls = 'qcard';
  if (showRes && hasAns) {
    cls += arrEq([...reviewAns[q.num]].sort(), [...q.answers].sort()) ? ' correct' : ' incorrect';
  }

  let h = '<div class="' + cls + '">';
  h += '<span class="review-badge">\u{1F4D6} 전날 복습</span> ';
  h += '<span class="q-num">복습 ' + (reviewCur+1) + ' / ' + reviewQuestions.length + ' (NO.' + q.num + ')</span>';
  if (q.isMulti) h += '<span class="q-badge">복수 선택 (' + q.answers.length + '개)</span>';

  // 이전에 틀린 답 표시
  var prevWrong = null;
  if (data && data.review.history[q.num]) {
    prevWrong = data.review.history[q.num].lastWrongAnswer;
  }
  h += '<div class="q-text">' + esc(getQ(q)) + '</div>';

  getOpts(q).forEach(function(opt) {
    var letter = opt.charAt(0);
    var sel = reviewAns[q.num] && reviewAns[q.num].includes(letter);
    var oc = 'opt';
    if (sel) oc += ' selected';
    if (!showRes && prevWrong && prevWrong.includes(letter)) oc += ' prev-wrong';
    if (showRes) {
      if (q.answers.includes(letter)) oc += ' correct-answer';
      else if (sel) oc += ' wrong-answer';
    }
    var dis = showRes ? ' style="pointer-events:none"' : '';
    h += '<div class="' + oc + '"' + dis + ' onclick="reviewSelOpt(' + q.num + ',\'' + letter + '\',' + q.isMulti + ')">' + esc(opt);
    if (!showRes && prevWrong && prevWrong.includes(letter)) h += ' <span style="color:#ff9800;font-size:.8em">(이전 오답)</span>';
    h += '</div>';
  });

  if (showRes) {
    h += '<div class="expl show"><strong>해설:</strong> ' + esc(getExpl(q)) + '</div>';
  }
  h += '</div>';
  c.innerHTML = h;

  var answered = Object.keys(reviewAns).filter(function(k) { return reviewAns[k].length > 0; }).length;
  var pct = Math.round((answered / reviewQuestions.length) * 100);
  document.getElementById('review-progress-fill').style.width = pct + '%';
  document.getElementById('review-progress-label').textContent = '\u{1F4D6} 복습: ' + pct + '%';
  document.getElementById('review-progress-count').textContent = answered + ' / ' + reviewQuestions.length;

  // 모든 복습 완료 시 결과 표시
  if (answered === reviewQuestions.length) {
    showReviewComplete();
  }
}

function reviewSelOpt(num, letter, multi) {
  var q = reviewQuestions.find(function(q) { return q.num === num; });
  var needed = q ? q.answers.length : 1;
  if (reviewAns[num] && reviewAns[num].length >= needed) return;
  if (!reviewAns[num]) reviewAns[num] = [];
  if (multi) {
    var i = reviewAns[num].indexOf(letter);
    if (i >= 0) reviewAns[num].splice(i, 1); else reviewAns[num].push(letter);
  } else {
    reviewAns[num] = [letter];
  }
  renderReview();
}

function reviewPrev() { if (reviewCur > 0) { reviewCur--; renderReview(); } }
function reviewNext() { if (reviewCur < reviewQuestions.length - 1) { reviewCur++; renderReview(); } }

function showReviewComplete() {
  var data = loadPlanner();
  var correct = 0;
  var stillWrong = [];
  reviewQuestions.forEach(function(q) {
    if (reviewAns[q.num] && arrEq([...reviewAns[q.num]].sort(), [...q.answers].sort())) {
      correct++;
      // 복습 성공 — pending에서 제거
      var idx = data.review.pending.indexOf(q.num);
      if (idx >= 0) data.review.pending.splice(idx, 1);
      // 오답 노트에서도 제거
      var wIdx = data.wrongAnswers.indexOf(q.num);
      if (wIdx >= 0) data.wrongAnswers.splice(wIdx, 1);
    } else {
      stillWrong.push(q.num);
      // 복습 실패 — 내일 다시
      if (!data.review.history[q.num]) data.review.history[q.num] = { wrongCount: 0, reviewedDates: [] };
      data.review.history[q.num].wrongCount++;
      data.review.history[q.num].reviewedDates.push(todayStr());
      if (reviewAns[q.num]) data.review.history[q.num].lastWrongAnswer = reviewAns[q.num];
    }
  });

  // 아직 틀린 문제는 pending에 유지
  data.review.pending = stillWrong;
  savePlanner(data);

  // 3초 후 자동으로 대시보드 이동하지 않고 버튼 표시
  setTimeout(function() {
    var c = document.getElementById('review-container');
    c.innerHTML += '<div class="complete-card" style="margin-top:20px;text-align:center">' +
      '<h3>\u{1F4D6} 복습 완료!</h3>' +
      '<p style="margin:10px 0">' + correct + ' / ' + reviewQuestions.length + ' 정답</p>' +
      (stillWrong.length > 0 ? '<p style="color:#ff9800">\u26A0\uFE0F ' + stillWrong.length + '문제는 내일 다시 복습</p>' : '<p style="color:#1b8901">\u2705 모든 복습 문제 정답!</p>') +
      '<div style="margin-top:15px">' +
      '<button class="btn btn-primary" onclick="startDaily()" style="margin:5px">\u{1F4DD} 오늘의 문제 풀기</button>' +
      '<button class="btn btn-secondary" onclick="showDashboard()" style="margin:5px">\u2190 대시보드</button>' +
      '</div></div>';
  }, 500);
}

// ============================================================
// 오늘의 문제 풀기
// ============================================================
let dailyQuestions = [];
let dailyCur = 0;
let dailyAns = {};

function startDaily() {
  var data = loadPlanner();
  if (!data) { showDashboard(); return; }

  var today = todayStr();
  var quota = calcDailyQuota(data);

  // 오늘 이미 할당된 문제가 있으면 이어서
  if (data.dailyLog[today] && data.dailyLog[today].assigned.length > 0) {
    var assigned = data.dailyLog[today].assigned;
    console.log('[플래너] 기존 할당 이어서:', assigned);
    // 할당된 전체 문제를 보여줌 (이미 푼 문제도 포함)
    dailyQuestions = assigned.map(function(num) {
      return ALL_QUESTIONS.find(function(q) { return q.num === num; });
    }).filter(Boolean);
  } else {
    // 새로 할당
    var completed = data.completedQuestions;
    var available = ALL_QUESTIONS.filter(function(q) { return completed.indexOf(q.num) < 0; });
    if (available.length === 0) {
      showDashboard();
      return;
    }
    var toAssign = available.slice(0, quota);
    dailyQuestions = toAssign;
    if (!data.dailyLog[today]) {
      data.dailyLog[today] = { assigned: [], completed: [], correct: [], wrong: [] };
    }
    data.dailyLog[today].assigned = toAssign.map(function(q) { return q.num; });
    savePlanner(data);
    console.log('[플래너] 새로 할당:', data.dailyLog[today].assigned, 'quota:', quota);
  }

  dailyCur = 0;
  dailyAns = {};

  hideAllSections();
  document.getElementById('planner-daily').classList.remove('hidden');
  document.getElementById('mode-display').textContent = '\u{1F4DD} 오늘의 문제';
  renderDaily();
}

function renderDaily() {
  var q = dailyQuestions[dailyCur];
  var c = document.getElementById('daily-container');
  var hasAns = dailyAns[q.num] && dailyAns[q.num].length > 0;
  var ansComplete = hasAns && (!q.isMulti || dailyAns[q.num].length >= q.answers.length);
  var showRes = ansComplete;

  var cls = 'qcard';
  if (showRes && hasAns) {
    cls += arrEq([...dailyAns[q.num]].sort(), [...q.answers].sort()) ? ' correct' : ' incorrect';
  }

  var h = '<div class="' + cls + '">';
  h += '<span class="q-num">\u{1F4DD} 오늘의 문제 ' + (dailyCur+1) + ' / ' + dailyQuestions.length + ' (NO.' + q.num + ')</span>';
  if (q.isMulti) h += '<span class="q-badge">복수 선택 (' + q.answers.length + '개)</span>';
  h += '<div class="q-text">' + esc(getQ(q)) + '</div>';

  getOpts(q).forEach(function(opt) {
    var letter = opt.charAt(0);
    var sel = dailyAns[q.num] && dailyAns[q.num].includes(letter);
    var oc = 'opt';
    if (sel) oc += ' selected';
    if (showRes) {
      if (q.answers.includes(letter)) oc += ' correct-answer';
      else if (sel) oc += ' wrong-answer';
    }
    var dis = showRes ? ' style="pointer-events:none"' : '';
    h += '<div class="' + oc + '"' + dis + ' onclick="dailySelOpt(' + q.num + ',\'' + letter + '\',' + q.isMulti + ')">' + esc(opt) + '</div>';
  });

  if (showRes) {
    h += '<div class="expl show"><strong>해설:</strong> ' + esc(getExpl(q)) + '</div>';
    // 답변 기록
    recordDailyAnswer(q);
  }
  h += '</div>';
  c.innerHTML = h;

  var answered = Object.keys(dailyAns).filter(function(k) { return dailyAns[k].length > 0; }).length;
  var pct = Math.round((answered / dailyQuestions.length) * 100);
  document.getElementById('daily-progress-fill').style.width = pct + '%';
  document.getElementById('daily-progress-label').textContent = '\u{1F4DD} 오늘의 문제: ' + pct + '%';
  document.getElementById('daily-progress-count').textContent = answered + ' / ' + dailyQuestions.length;

  if (answered === dailyQuestions.length) {
    var data = loadPlanner();
    showDailyComplete(data);
  }
}

function dailySelOpt(num, letter, multi) {
  var q = dailyQuestions.find(function(q) { return q.num === num; });
  var needed = q ? q.answers.length : 1;
  if (dailyAns[num] && dailyAns[num].length >= needed) return;
  if (!dailyAns[num]) dailyAns[num] = [];
  if (multi) {
    var i = dailyAns[num].indexOf(letter);
    if (i >= 0) dailyAns[num].splice(i, 1); else dailyAns[num].push(letter);
  } else {
    dailyAns[num] = [letter];
  }
  renderDaily();
}

function dailyPrev() { if (dailyCur > 0) { dailyCur--; renderDaily(); } }
function dailyNext() { if (dailyCur < dailyQuestions.length - 1) { dailyCur++; renderDaily(); } }

function resetDaily() {
  dailyCur = 0;
  dailyAns = {};
  renderDaily();
}

function recordDailyAnswer(q) {
  var data = loadPlanner();
  if (!data) return;
  var today = todayStr();
  if (!data.dailyLog[today]) data.dailyLog[today] = { assigned: [], completed: [], correct: [], wrong: [] };
  var log = data.dailyLog[today];

  // 이미 기록된 문제는 스킵
  if (log.completed.indexOf(q.num) >= 0) return;

  log.completed.push(q.num);
  if (data.completedQuestions.indexOf(q.num) < 0) data.completedQuestions.push(q.num);

  var isCorrect = arrEq([...dailyAns[q.num]].sort(), [...q.answers].sort());
  if (isCorrect) {
    log.correct.push(q.num);
  } else {
    log.wrong.push(q.num);
    // 오답 → 내일 복습 대상
    if (data.review.pending.indexOf(q.num) < 0) data.review.pending.push(q.num);
    if (data.wrongAnswers.indexOf(q.num) < 0) data.wrongAnswers.push(q.num);
    // 오답 히스토리
    if (!data.review.history[q.num]) data.review.history[q.num] = { wrongCount: 0, reviewedDates: [] };
    data.review.history[q.num].wrongCount++;
    data.review.history[q.num].lastWrongDate = today;
    data.review.history[q.num].lastWrongAnswer = dailyAns[q.num];
  }
  savePlanner(data);
}

// ============================================================
// 오늘 학습 완료 화면
// ============================================================
function showDailyComplete(data) {
  setTimeout(function() {
    hideAllSections();
    document.getElementById('planner-complete').classList.remove('hidden');

    var today = todayStr();
    var log = data.dailyLog[today] || { completed: [], correct: [], wrong: [] };
    var correctCount = log.correct ? log.correct.length : 0;
    var wrongCount = log.wrong ? log.wrong.length : 0;
    var totalToday = log.completed ? log.completed.length : 0;
    var totalPct = Math.round((data.completedQuestions.length / data.totalQuestions) * 100);
    var tomorrowQuota = calcDailyQuota(data);
    var tomorrowReview = data.review.pending.length;

    var h = '<div class="complete-card">';
    h += '<div style="font-size:3em;margin-bottom:15px">\u{1F389}</div>';
    h += '<h2>오늘의 학습 완료!</h2>';
    h += '<div style="margin:20px 0">';
    h += '<div class="complete-stat"><span>\u{1F4DD} 오늘 푼 문제</span><span>' + totalToday + '문제</span></div>';
    h += '<div class="complete-stat"><span>\u2705 정답</span><span style="color:#1b8901">' + correctCount + '문제</span></div>';
    h += '<div class="complete-stat"><span>\u274C 오답</span><span style="color:#d13212">' + wrongCount + '문제</span></div>';
    h += '<div class="complete-stat"><span>\u{1F4CA} 전체 진행률</span><span>' + data.completedQuestions.length + ' / ' + data.totalQuestions + ' (' + totalPct + '%)</span></div>';
    h += '</div>';

    h += '<div style="background:#f5f5f5;border-radius:12px;padding:15px;margin:15px 0">';
    h += '<p style="font-weight:600;margin-bottom:5px">\u{1F4C5} 내일 예정</p>';
    h += '<p>신규 문제: ' + tomorrowQuota + '문제';
    if (tomorrowReview > 0) h += ' + 복습: ' + tomorrowReview + '문제';
    h += '</p></div>';

    if (wrongCount > 0) {
      h += '<button class="btn btn-danger" onclick="startWrongReviewToday()" style="margin:5px">\u{1F4D5} 오늘 틀린 문제 복습</button>';
    }
    h += '<button class="btn btn-secondary" onclick="closePlanner()" style="margin:5px">\u2190 모드 선택으로</button>';
    h += '</div>';

    document.getElementById('planner-complete').innerHTML = h;
  }, 500);
}

// ============================================================
// 오답 복습 (전체 / 오늘)
// ============================================================
function startWrongReview() {
  var data = loadPlanner();
  if (!data || data.wrongAnswers.length === 0) { showDashboard(); return; }
  reviewQuestions = data.wrongAnswers.map(function(num) {
    return ALL_QUESTIONS.find(function(q) { return q.num === num; });
  }).filter(Boolean);
  reviewCur = 0;
  reviewAns = {};
  hideAllSections();
  document.getElementById('planner-review').classList.remove('hidden');
  document.getElementById('mode-display').textContent = '\u{1F4D5} 전체 오답 복습';
  renderWrongReview();
}

function startWrongReviewToday() {
  var data = loadPlanner();
  var today = todayStr();
  var log = data.dailyLog[today];
  if (!log || !log.wrong || log.wrong.length === 0) { showDashboard(); return; }
  reviewQuestions = log.wrong.map(function(num) {
    return ALL_QUESTIONS.find(function(q) { return q.num === num; });
  }).filter(Boolean);
  reviewCur = 0;
  reviewAns = {};
  hideAllSections();
  document.getElementById('planner-review').classList.remove('hidden');
  document.getElementById('mode-display').textContent = '\u{1F4D5} 오늘 오답 복습';
  renderWrongReview();
}

function renderWrongReview() {
  var q = reviewQuestions[reviewCur];
  var c = document.getElementById('review-container');
  var data = loadPlanner();
  var hasAns = reviewAns[q.num] && reviewAns[q.num].length > 0;
  var ansComplete = hasAns && (!q.isMulti || reviewAns[q.num].length >= q.answers.length);
  var showRes = ansComplete;

  var cls = 'qcard';
  if (showRes && hasAns) {
    cls += arrEq([...reviewAns[q.num]].sort(), [...q.answers].sort()) ? ' correct' : ' incorrect';
  }

  var h = '<div class="' + cls + '">';
  h += '<span class="review-badge">\u{1F4D5} 오답 복습</span> ';
  h += '<span class="q-num">복습 ' + (reviewCur+1) + ' / ' + reviewQuestions.length + ' (NO.' + q.num + ')</span>';
  if (q.isMulti) h += '<span class="q-badge">복수 선택 (' + q.answers.length + '개)</span>';

  var prevWrong = null;
  if (data && data.review.history[q.num]) {
    prevWrong = data.review.history[q.num].lastWrongAnswer;
  }
  h += '<div class="q-text">' + esc(getQ(q)) + '</div>';

  getOpts(q).forEach(function(opt) {
    var letter = opt.charAt(0);
    var sel = reviewAns[q.num] && reviewAns[q.num].includes(letter);
    var oc = 'opt';
    if (sel) oc += ' selected';
    if (!showRes && prevWrong && prevWrong.includes(letter)) oc += ' prev-wrong';
    if (showRes) {
      if (q.answers.includes(letter)) oc += ' correct-answer';
      else if (sel) oc += ' wrong-answer';
    }
    var dis = showRes ? ' style="pointer-events:none"' : '';
    h += '<div class="' + oc + '"' + dis + ' onclick="wrongReviewSelOpt(' + q.num + ',\'' + letter + '\',' + q.isMulti + ')">' + esc(opt);
    if (!showRes && prevWrong && prevWrong.includes(letter)) h += ' <span style="color:#ff9800;font-size:.8em">(이전 오답)</span>';
    h += '</div>';
  });

  if (showRes) {
    h += '<div class="expl show"><strong>해설:</strong> ' + esc(getExpl(q)) + '</div>';
    // 맞추면 오답 노트에서 제거
    var isCorrect = arrEq([...reviewAns[q.num]].sort(), [...q.answers].sort());
    if (isCorrect) {
      var wIdx = data.wrongAnswers.indexOf(q.num);
      if (wIdx >= 0) { data.wrongAnswers.splice(wIdx, 1); savePlanner(data); }
    }
  }
  h += '</div>';
  c.innerHTML = h;

  var answered = Object.keys(reviewAns).filter(function(k) { return reviewAns[k].length > 0; }).length;
  var pct = Math.round((answered / reviewQuestions.length) * 100);
  document.getElementById('review-progress-fill').style.width = pct + '%';
  document.getElementById('review-progress-label').textContent = '\u{1F4D5} 오답 복습: ' + pct + '%';
  document.getElementById('review-progress-count').textContent = answered + ' / ' + reviewQuestions.length;

  if (answered === reviewQuestions.length) {
    setTimeout(function() {
      c.innerHTML += '<div class="complete-card" style="margin-top:20px;text-align:center">' +
        '<h3>\u{1F4D5} 오답 복습 완료!</h3>' +
        '<div style="margin-top:15px">' +
        '<button class="btn btn-secondary" onclick="showDashboard()" style="margin:5px">\u2190 대시보드</button>' +
        '<button class="btn btn-secondary" onclick="closePlanner()" style="margin:5px">\u2190 모드 선택으로</button>' +
        '</div></div>';
    }, 500);
  }
}

function wrongReviewSelOpt(num, letter, multi) {
  var q = reviewQuestions.find(function(q) { return q.num === num; });
  var needed = q ? q.answers.length : 1;
  if (reviewAns[num] && reviewAns[num].length >= needed) return;
  if (!reviewAns[num]) reviewAns[num] = [];
  if (multi) {
    var i = reviewAns[num].indexOf(letter);
    if (i >= 0) reviewAns[num].splice(i, 1); else reviewAns[num].push(letter);
  } else {
    reviewAns[num] = [letter];
  }
  renderWrongReview();
}

// ============================================================
// 전체 문제 복습 (시험 직전 총복습)
// ============================================================
function startFullReview() {
  reviewQuestions = ALL_QUESTIONS.slice();
  reviewCur = 0;
  reviewAns = {};
  hideAllSections();
  document.getElementById('planner-review').classList.remove('hidden');
  document.getElementById('mode-display').textContent = '\u{1F4D6} 전체 문제 총복습';
  renderFullReview();
}

function renderFullReview() {
  var q = reviewQuestions[reviewCur];
  var c = document.getElementById('review-container');
  var data = loadPlanner();
  var hasAns = reviewAns[q.num] && reviewAns[q.num].length > 0;
  var ansComplete = hasAns && (!q.isMulti || reviewAns[q.num].length >= q.answers.length);
  var showRes = ansComplete;

  var cls = 'qcard';
  if (showRes && hasAns) {
    cls += arrEq([...reviewAns[q.num]].sort(), [...q.answers].sort()) ? ' correct' : ' incorrect';
  }

  var h = '<div class="' + cls + '">';
  h += '<span class="review-badge" style="background:#1a237e">\u{1F4D6} 총복습</span> ';
  h += '<span class="q-num">' + (reviewCur+1) + ' / ' + reviewQuestions.length + ' (NO.' + q.num + ')</span>';
  if (q.isMulti) h += '<span class="q-badge">복수 선택 (' + q.answers.length + '개)</span>';

  // 이전에 틀린 적 있는 문제 표시
  var wasWrong = data && data.wrongAnswers && data.wrongAnswers.indexOf(q.num) >= 0;
  if (wasWrong) h += ' <span style="color:#d13212;font-size:.8em;font-weight:600">⚠️ 오답 이력</span>';

  h += '<div class="q-text">' + esc(getQ(q)) + '</div>';

  getOpts(q).forEach(function(opt) {
    var letter = opt.charAt(0);
    var sel = reviewAns[q.num] && reviewAns[q.num].includes(letter);
    var oc = 'opt';
    if (sel) oc += ' selected';
    if (showRes) {
      if (q.answers.includes(letter)) oc += ' correct-answer';
      else if (sel) oc += ' wrong-answer';
    }
    var dis = showRes ? ' style="pointer-events:none"' : '';
    h += '<div class="' + oc + '"' + dis + ' onclick="fullReviewSelOpt(' + q.num + ',\'' + letter + '\',' + q.isMulti + ')">' + esc(opt) + '</div>';
  });

  if (showRes) {
    h += '<div class="expl show"><strong>해설:</strong> ' + esc(getExpl(q)) + '</div>';
  }
  h += '</div>';
  c.innerHTML = h;

  var answered = Object.keys(reviewAns).filter(function(k) { return reviewAns[k].length > 0; }).length;
  var pct = Math.round((answered / reviewQuestions.length) * 100);
  document.getElementById('review-progress-fill').style.width = pct + '%';
  document.getElementById('review-progress-label').textContent = '\u{1F4D6} 총복습: ' + pct + '%';
  document.getElementById('review-progress-count').textContent = answered + ' / ' + reviewQuestions.length;

  if (answered === reviewQuestions.length) {
    var correct = 0;
    reviewQuestions.forEach(function(q) {
      if (reviewAns[q.num] && arrEq([...reviewAns[q.num]].sort(), [...q.answers].sort())) correct++;
    });
    setTimeout(function() {
      c.innerHTML += '<div class="complete-card" style="margin-top:20px;text-align:center">' +
        '<h3>\u{1F4D6} 총복습 완료!</h3>' +
        '<p style="margin:10px 0">' + correct + ' / ' + reviewQuestions.length + ' 정답 (' + Math.round(correct/reviewQuestions.length*100) + '%)</p>' +
        '<div style="margin-top:15px">' +
        '<button class="btn btn-secondary" onclick="showDashboard()" style="margin:5px">\u2190 대시보드</button>' +
        '<button class="btn btn-secondary" onclick="closePlanner()" style="margin:5px">\u2190 모드 선택으로</button>' +
        '</div></div>';
    }, 500);
  }
}

function fullReviewSelOpt(num, letter, multi) {
  var q = reviewQuestions.find(function(q) { return q.num === num; });
  var needed = q ? q.answers.length : 1;
  if (reviewAns[num] && reviewAns[num].length >= needed) return;
  if (!reviewAns[num]) reviewAns[num] = [];
  if (multi) {
    var i = reviewAns[num].indexOf(letter);
    if (i >= 0) reviewAns[num].splice(i, 1); else reviewAns[num].push(letter);
  } else {
    reviewAns[num] = [letter];
  }
  renderFullReview();
}

// ============================================================
// 초기화
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
  initPlannerCard();
});
