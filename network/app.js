// ============================================================
// 기존 시험 모드 변수 & 로직 (변경 없음)
// ============================================================
let questions = [];
let cur = 0;
let ans = {};
let mode = '';
let timer = null;
let t0 = null;
let bm = new Set();
let done = false;
let lang = 'ko';
let viewingAnswers = false;

function toggleLang() {
  lang = lang === 'en' ? 'ko' : 'en';
  const btn = document.getElementById('lang-btn');
  btn.textContent = lang === 'en' ? '🇰🇷 한국어' : '🇺🇸 English';
  if (viewingAnswers) {
    showAllAnswers();
  } else if (questions.length > 0) {
    render();
  }
}

function getQ(q) { return lang === 'ko' ? (q.question_ko || q.question) : q.question; }
function getOpts(q) { return lang === 'ko' ? (q.options_ko || q.options) : q.options; }
function getExpl(q) { return lang === 'ko' ? (q.explanation_ko || q.explanation) : q.explanation; }

function esc(s) {
  const d = document.createElement('div');
  d.textContent = s;
  return d.innerHTML.replace(/\n/g, '<br>');
}

function startExam(m) {
  mode = m;
  questions = [...ALL_QUESTIONS];
  if (mode === 'random') {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
  }
  cur = 0; ans = {}; bm = new Set(); done = false;
  document.getElementById('mode-section').classList.add('hidden');
  document.getElementById('exam-section').classList.remove('hidden');
  const modeNames = {exam: '시험 모드', practice: '학습 모드', random: '랜덤 모드'};
  document.getElementById('mode-display').textContent = modeNames[m];
  document.getElementById('submit-btn').style.display = mode === 'exam' ? '' : 'none';
  t0 = Date.now();
  timer = setInterval(() => {
    const e = Math.floor((Date.now() - t0) / 1000);
    const h = String(Math.floor(e/3600)).padStart(2,'0');
    const mi = String(Math.floor((e%3600)/60)).padStart(2,'0');
    const s = String(e%60).padStart(2,'0');
    document.getElementById('timer-display').textContent = '⏱ ' + h + ':' + mi + ':' + s;
  }, 1000);
  buildDots();
  render();
}

function buildDots() {
  const c = document.getElementById('nav-dots');
  c.innerHTML = '';
  questions.forEach((q, i) => {
    const d = document.createElement('div');
    d.className = 'nav-dot';
    d.textContent = i + 1;
    d.onclick = () => { cur = i; render(); };
    c.appendChild(d);
  });
}

function updateDots() {
  document.querySelectorAll('#nav-dots .nav-dot').forEach((d, i) => {
    d.className = 'nav-dot';
    if (i === cur) d.classList.add('current');
    const n = questions[i].num;
    if (done) {
      if (ans[n] && ans[n].length) {
        d.classList.add(arrEq([...ans[n]].sort(), [...questions[i].answers].sort()) ? 'correct-dot' : 'incorrect-dot');
      }
    } else if (ans[n] && ans[n].length) {
      d.classList.add('answered');
    }
  });
}

function render() {
  const q = questions[cur];
  const c = document.getElementById('qcontainer');
  const hasAns = ans[q.num] && ans[q.num].length > 0;
  const ansComplete = hasAns && (!q.isMulti || ans[q.num].length >= q.answers.length);
  const showRes = done || (mode !== 'exam' && ansComplete);

  let cls = 'qcard';
  if (showRes && hasAns) {
    cls += arrEq([...ans[q.num]].sort(), [...q.answers].sort()) ? ' correct' : ' incorrect';
  } else if (hasAns) {
    cls += ' answered';
  }

  let h = '<div class="' + cls + '">';
  h += '<span class="q-num">Q' + (cur+1) + ' / ' + questions.length + ' (NO.' + q.num + ')</span>';
  if (q.isMulti) h += '<span class="q-badge">복수 선택 (' + q.answers.length + '개)</span>';
  if (bm.has(q.num)) h += '<span class="q-badge" style="background:#d13212;color:#fff">★ 북마크</span>';
  h += '<div class="q-text">' + esc(getQ(q)) + '</div>';

  getOpts(q).forEach(opt => {
    const letter = opt.charAt(0);
    const sel = ans[q.num] && ans[q.num].includes(letter);
    let oc = 'opt';
    if (sel) oc += ' selected';
    if (showRes) {
      if (q.answers.includes(letter)) oc += ' correct-answer';
      else if (sel) oc += ' wrong-answer';
    }
    const dis = done ? ' style="pointer-events:none"' : '';
    h += '<div class="' + oc + '"' + dis + ' onclick="selOpt(' + q.num + ',\'' + letter + '\',' + q.isMulti + ')">' + esc(opt) + '</div>';
  });

  if (showRes) {
    h += '<div class="expl show"><strong>해설:</strong> ' + esc(getExpl(q)) + '</div>';
  }
  h += '</div>';
  c.innerHTML = h;

  const cnt = Object.keys(ans).filter(k => ans[k].length > 0).length;
  const pct = Math.round((cnt / questions.length) * 100);
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-label').textContent = '진행률: ' + pct + '%';
  document.getElementById('progress-count').textContent = cnt + ' / ' + questions.length;
  document.getElementById('answered-display').textContent = '답변: ' + cnt + '/' + questions.length;
  document.getElementById('bm-btn').textContent = bm.has(q.num) ? '★' : '☆';

  const retryBtn = document.getElementById('retry-wrong-btn');
  if (mode !== 'exam' && cnt === questions.length) {
    const hasWrong = questions.some(q => !arrEq([...ans[q.num]].sort(), [...q.answers].sort()));
    retryBtn.style.display = hasWrong ? '' : 'none';
  } else if (done) {
    retryBtn.style.display = '';
  } else {
    retryBtn.style.display = 'none';
  }
  updateDots();
}

function selOpt(n, letter, multi) {
  if (done) return;
  const q = questions.find(q => q.num === n);
  const needed = q ? q.answers.length : 1;
  if (mode !== 'exam' && ans[n] && ans[n].length >= needed) return;
  if (!ans[n]) ans[n] = [];
  if (multi) {
    const i = ans[n].indexOf(letter);
    if (i >= 0) ans[n].splice(i, 1); else ans[n].push(letter);
  } else {
    ans[n] = [letter];
  }
  render();
}

function prevQ() { if (cur > 0) { cur--; render(); } }
function nextQ() { if (cur < questions.length - 1) { cur++; render(); } }
function toggleBM() { const n = questions[cur].num; bm.has(n) ? bm.delete(n) : bm.add(n); render(); }

function submitExam() {
  const cnt = Object.keys(ans).filter(k => ans[k].length > 0).length;
  if (cnt < questions.length) {
    if (!confirm('아직 ' + (questions.length - cnt) + '문제를 풀지 않았습니다. 제출하시겠습니까?')) return;
  }
  done = true;
  clearInterval(timer);
  let ok = 0;
  questions.forEach(q => { if (ans[q.num] && arrEq([...ans[q.num]].sort(), [...q.answers].sort())) ok++; });
  const score = Math.round((ok / questions.length) * 100);
  const pass = score >= 70;
  const e = Math.floor((Date.now() - t0) / 1000);
  const ts = Math.floor(e/60) + '분 ' + (e%60) + '초';
  document.getElementById('score-circle').className = 'score-circle ' + (pass ? 'score-pass' : 'score-fail');
  document.getElementById('score-circle').textContent = score + '%';
  document.getElementById('score-details').innerHTML =
    '<p>' + (pass ? '🎉 합격!' : '😢 불합격') + '</p><p>정답: ' + ok + ' / ' + questions.length + '</p><p>소요 시간: ' + ts + '</p><p>합격 기준: 70%</p>';
  document.getElementById('score-modal').classList.add('show');
  render();
}

function closeModal() { document.getElementById('score-modal').classList.remove('show'); }

function retryWrong() {
  const wrong = questions.filter(q => {
    if (!ans[q.num] || !ans[q.num].length) return true;
    return !arrEq([...ans[q.num]].sort(), [...q.answers].sort());
  });
  if (wrong.length === 0) { alert('틀린 문제가 없습니다!'); return; }
  document.getElementById('score-modal').classList.remove('show');
  questions = wrong;
  cur = 0; ans = {}; bm = new Set(); done = false;
  mode = 'practice';
  document.getElementById('mode-display').textContent = '오답 복습 (' + questions.length + '문제)';
  document.getElementById('submit-btn').style.display = 'none';
  document.getElementById('retry-wrong-btn').style.display = 'none';
  t0 = Date.now();
  clearInterval(timer);
  timer = setInterval(() => {
    const e = Math.floor((Date.now() - t0) / 1000);
    const h = String(Math.floor(e/3600)).padStart(2,'0');
    const mi = String(Math.floor((e%3600)/60)).padStart(2,'0');
    const s = String(e%60).padStart(2,'0');
    document.getElementById('timer-display').textContent = '⏱ ' + h + ':' + mi + ':' + s;
  }, 1000);
  buildDots();
  render();
}

function resetExam() {
  clearInterval(timer);
  viewingAnswers = false;
  document.getElementById('timer-display').textContent = '⏱ 00:00:00';
  document.getElementById('exam-section').classList.add('hidden');
  document.getElementById('mode-section').classList.remove('hidden');
  document.getElementById('score-modal').classList.remove('show');
  done = false;
}

function arrEq(a, b) {
  if (!a || !b || a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') prevQ();
  else if (e.key === 'ArrowRight') nextQ();
});

function showAllAnswers() {
  viewingAnswers = true;
  document.getElementById('mode-section').classList.add('hidden');
  var container = document.getElementById('exam-section');
  container.classList.remove('hidden');
  var html = '<div style="max-width:900px;margin:0 auto;padding:20px">';
  html += '<h2 style="text-align:center;margin-bottom:20px">📋 전체 정답 보기 (' + ALL_QUESTIONS.length + '문제)</h2>';
  html += '<div id="all-answers"></div>';
  html += '<button class="btn btn-primary" onclick="location.reload()" style="display:block;margin:30px auto;padding:12px 30px;font-size:16px">돌아가기</button>';
  html += '</div>';
  container.innerHTML = html;
  var div = document.getElementById('all-answers');
  ALL_QUESTIONS.forEach(function(q, i) {
    var qText = lang === 'ko' ? (q.question_ko || q.question) : q.question;
    var expl = lang === 'ko' ? (q.explanation_ko || q.explanation) : q.explanation;
    var optsArr = lang === 'ko' ? (q.options_ko || q.options) : q.options;
    var optsHtml = '';
    optsArr.forEach(function(o) {
      var letter = o.charAt(0);
      var isAns = q.answers.includes(letter);
      if (isAns) {
        optsHtml += '<div style="padding:8px 12px;margin:4px 0;border-radius:6px;background:#e6f4ea;border:2px solid #1b8901;font-weight:bold">' + o + ' ✅</div>';
      } else {
        optsHtml += '<div style="padding:8px 12px;margin:4px 0;border-radius:6px;background:#f5f5f5;border:1px solid #ddd">' + o + '</div>';
      }
    });
    var multi = q.answers.length > 1 ? ' <span style="background:#d13212;color:#fff;padding:2px 8px;border-radius:4px;font-size:12px">복수선택 ' + q.answers.length + '개</span>' : '';
    div.innerHTML += '<div style="background:#fff;border-radius:12px;padding:20px;margin-bottom:16px;box-shadow:0 2px 8px rgba(0,0,0,0.1)">' +
      '<div style="font-weight:bold;margin-bottom:8px;color:#42a5f5">Q' + (i+1) + ' (NO.' + q.num + ')' + multi + '</div>' +
      '<div style="margin-bottom:12px;font-size:15px;line-height:1.7">' + qText + '</div>' +
      optsHtml +
      '<div style="margin-top:12px;padding:12px;background:#fff8e1;border-radius:8px;font-size:14px;line-height:1.6"><strong>해설:</strong> ' + expl + '</div></div>';
  });
}

// 플래너 기능은 planner.js, planner2.js에 있음
