// ============================================================
// 학습 플래너 — 상수 & 유틸
// ============================================================
const STORAGE_KEY = 'ans_c01_planner';
const EXAM_CODE = 'ANS-C01';

function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
}

function daysBetween(a, b) {
  const d1 = new Date(a + 'T00:00:00');
  const d2 = new Date(b + 'T00:00:00');
  return Math.ceil((d2 - d1) / (1000*60*60*24));
}

function loadPlanner() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || null; }
  catch(e) { return null; }
}

function savePlanner(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function initPlannerData(examDate) {
  return {
    examDate: examDate,
    totalQuestions: ALL_QUESTIONS.length,
    completedQuestions: [],
    dailyLog: {},
    review: { pending: [], history: {} },
    wrongAnswers: []
  };
}

const REVIEW_BUFFER_DAYS = 2; // 시험 전 마지막 2일은 전체 복습용으로 확보

function calcDailyQuota(data) {
  const daysLeft = daysBetween(todayStr(), data.examDate);
  const remaining = data.totalQuestions - data.completedQuestions.length;
  if (daysLeft <= 0) return remaining;
  if (remaining <= 0) return 0;
  // 마지막 2일은 전체 복습용이므로 그 전까지 1회독 완료
  const studyDays = Math.max(daysLeft - REVIEW_BUFFER_DAYS, 1);
  return Math.ceil(remaining / studyDays);
}

function isReviewPeriod(data) {
  const daysLeft = daysBetween(todayStr(), data.examDate);
  const remaining = data.totalQuestions - data.completedQuestions.length;
  return daysLeft <= REVIEW_BUFFER_DAYS && remaining <= 0;
}

function isFinalReviewDay(data) {
  const daysLeft = daysBetween(todayStr(), data.examDate);
  return daysLeft <= REVIEW_BUFFER_DAYS;
}

// ============================================================
// 모드 선택 화면 — 플래너 카드 초기화
// ============================================================
function initPlannerCard() {
  const previewEl = document.getElementById('planner-preview');
  if (!previewEl) return;
  const data = loadPlanner();
  if (data && data.examDate) {
    const daysLeft = daysBetween(todayStr(), data.examDate);
    const pct = Math.round((data.completedQuestions.length / data.totalQuestions) * 100);
    if (daysLeft > 0) {
      previewEl.textContent = 'D-' + daysLeft + ' | ' + data.completedQuestions.length + '/' + data.totalQuestions + ' 완료 (' + pct + '%)';
    } else {
      previewEl.textContent = '시험일 경과 — 날짜를 재설정하세요';
    }
  } else {
    previewEl.textContent = '';
  }
}

// ============================================================
// 플래너 열기 / 닫기
// ============================================================
function hideAllSections() {
  ['mode-section','planner-calendar','planner-dashboard','planner-review','planner-daily','planner-complete','exam-section'].forEach(function(id) {
    document.getElementById(id).classList.add('hidden');
  });
}

function openPlanner() {
  const data = loadPlanner();
  if (data && data.examDate && daysBetween(todayStr(), data.examDate) > 0) {
    showDashboard();
  } else {
    showCalendar();
  }
}

function closePlanner() {
  hideAllSections();
  document.getElementById('mode-section').classList.remove('hidden');
  initPlannerCard();
}

// ============================================================
// 달력
// ============================================================
let calYear, calMonth, selectedDate = null;

function showCalendar() {
  hideAllSections();
  document.getElementById('planner-calendar').classList.remove('hidden');
  const now = new Date();
  calYear = now.getFullYear();
  calMonth = now.getMonth();
  selectedDate = null;
  document.getElementById('start-planner-btn').style.display = 'none';
  document.getElementById('calendar-info').textContent = '';
  renderCalendar();
}

function renderCalendar() {
  const el = document.getElementById('calendar');
  const today = todayStr();
  let h = '<div class="calendar-header">';
  h += '<button class="calendar-nav" onclick="calPrev()">\u25C0</button>';
  h += '<h3>' + calYear + '년 ' + (calMonth+1) + '월</h3>';
  h += '<button class="calendar-nav" onclick="calNext()">\u25B6</button>';
  h += '</div><div class="calendar-grid">';
  ['일','월','화','수','목','금','토'].forEach(function(d) {
    h += '<div class="calendar-day-label">' + d + '</div>';
  });
  const first = new Date(calYear, calMonth, 1);
  const lastDay = new Date(calYear, calMonth+1, 0).getDate();
  for (let i = 0; i < first.getDay(); i++) h += '<div></div>';
  for (let d = 1; d <= lastDay; d++) {
    const ds = calYear + '-' + String(calMonth+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    let cls = 'calendar-day';
    if (ds === today) cls += ' today';
    if (ds === selectedDate) cls += ' selected';
    if (ds <= today) cls += ' past';
    h += '<div class="' + cls + '" onclick="selectDate(\'' + ds + '\')">' + d + '</div>';
  }
  h += '</div>';
  el.innerHTML = h;
}

function calPrev() { calMonth--; if (calMonth < 0) { calMonth = 11; calYear--; } renderCalendar(); }
function calNext() { calMonth++; if (calMonth > 11) { calMonth = 0; calYear++; } renderCalendar(); }

function selectDate(ds) {
  selectedDate = ds;
  renderCalendar();
  const daysLeft = daysBetween(todayStr(), ds);
  const studyDays = Math.max(daysLeft - REVIEW_BUFFER_DAYS, 1);
  const quota = Math.ceil(ALL_QUESTIONS.length / studyDays);
  let info = '<strong>D-' + daysLeft + '</strong> | ' + ALL_QUESTIONS.length + '문제';
  if (daysLeft > REVIEW_BUFFER_DAYS) {
    info += ' | 학습 <strong>' + (daysLeft - REVIEW_BUFFER_DAYS) + '일</strong> + 총복습 <strong>' + REVIEW_BUFFER_DAYS + '일</strong>';
    info += ' | 하루 약 <strong>' + quota + '문제</strong>';
    info += '<br><span style="color:#ff9800;font-size:.9em">📖 시험 전 마지막 ' + REVIEW_BUFFER_DAYS + '일은 전체 복습 기간으로 확보됩니다</span>';
  } else {
    info += ' | 하루 약 <strong>' + quota + '문제</strong>';
    info += '<br><span style="color:#d13212;font-size:.9em">⚠️ 복습 기간 없이 바로 학습이 시작됩니다</span>';
  }
  document.getElementById('calendar-info').innerHTML = info;
  document.getElementById('start-planner-btn').style.display = '';
}

function startPlanner() {
  if (!selectedDate) return;
  let data = loadPlanner();
  if (data) {
    data.examDate = selectedDate;
    data.totalQuestions = ALL_QUESTIONS.length;
  } else {
    data = initPlannerData(selectedDate);
  }
  savePlanner(data);
  showDashboard();
}

// ============================================================
// 대시보드
// ============================================================
function showDashboard() {
  hideAllSections();
  document.getElementById('planner-dashboard').classList.remove('hidden');
  const data = loadPlanner();
  if (!data) { showCalendar(); return; }

  const daysLeft = daysBetween(todayStr(), data.examDate);
  const completed = data.completedQuestions.length;
  const total = data.totalQuestions;
  const pct = Math.round((completed / total) * 100);
  const quota = calcDailyQuota(data);

  // 오늘 틀린 문제는 전날 복습에서 제외 (내일 복습 대상)
  const todayWrong = (data.dailyLog[todayStr()] && data.dailyLog[todayStr()].wrong) ? data.dailyLog[todayStr()].wrong : [];
  const reviewPending = data.review.pending.filter(function(num) { return todayWrong.indexOf(num) < 0; });
  const reviewCount = reviewPending.length;

  const todayLog = data.dailyLog[todayStr()];
  const todayDone = todayLog && todayLog.completed ? todayLog.completed.length : 0;
  const todayAssigned = todayLog ? todayLog.assigned.length : quota;

  let h = '<div style="text-align:center;margin-bottom:20px">';
  h += '<h2 style="color:#1a237e">\u{1F4CA} 학습 플래너</h2>';
  h += '<p style="color:#666;margin-top:5px">' + EXAM_CODE + '</p>';
  h += '</div>';

  h += '<div class="dash-card">';
  h += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:15px">';
  h += '<h3>\u{1F4C5} D-' + Math.max(daysLeft, 0) + '</h3>';
  h += '<span style="color:#666;font-size:.9em">시험일: ' + data.examDate + '</span>';
  h += '</div>';
  h += '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>';
  h += '<div class="progress-text"><span>' + completed + ' / ' + total + ' 완료</span><span>' + pct + '%</span></div>';
  h += '</div>';

  // 학습 기록 달력
  h += '<div class="dash-card">';
  h += '<h3>📆 학습 기록</h3>';
  h += buildStudyCalendar(data);
  h += '</div>';

  h += '<div class="dash-card">';
  h += '<h3>\u{1F4DD} 오늘의 학습</h3>';

  if (reviewCount > 0) {
    h += '<div class="dash-row"><span class="label">\u{1F4D6} 전날 복습</span><span class="value" style="color:#ff9800">' + reviewCount + '문제</span></div>';
  }
  h += '<div class="dash-row"><span class="label">\u{1F4DD} 오늘의 문제</span><span class="value">' + todayDone + ' / ' + todayAssigned + '문제</span></div>';

  const wrongTotal = data.wrongAnswers.length;
  if (wrongTotal > 0) {
    h += '<div class="dash-row"><span class="label">\u{1F4D5} 전체 오답 노트</span><span class="value" style="color:#d13212">' + wrongTotal + '문제</span></div>';
  }
  h += '</div>';

  h += '<div class="dash-card"><div class="dash-actions">';

  // 시험 직전 전체 복습 기간 안내
  if (isFinalReviewDay(data)) {
    h += '<div style="background:#e3f2fd;border-radius:12px;padding:15px;margin-bottom:15px;text-align:center">';
    h += '<p style="font-size:1.1em;font-weight:700;color:#1a237e">📖 전체 복습 기간입니다!</p>';
    if (completed < total) {
      h += '<p style="color:#e65100;margin-top:5px">⚠️ 아직 ' + (total - completed) + '문제가 남아있습니다. 남은 문제를 먼저 풀거나 전체 복습을 시작하세요.</p>';
    } else {
      h += '<p style="color:#666;margin-top:5px">1회독 완료! 오답 노트와 전체 문제를 복습하세요.</p>';
    }
    h += '</div>';
  }

  if (reviewCount > 0) {
    h += '<button class="btn btn-primary" onclick="startReview()" style="background:#ff9800"><span class="btn-icon">\u{1F4D6}</span> 전날 복습하기 <span class="btn-count">' + reviewCount + '문제</span></button>';
  }

  if (completed >= total) {
    h += '<button class="btn btn-success">\u{1F389} 모든 문제 완료! 오답 복습을 추천합니다</button>';
    if (isFinalReviewDay(data)) {
      h += '<button class="btn btn-primary" onclick="startFullReview()" style="background:#1a237e"><span class="btn-icon">\u{1F4D6}</span> 전체 문제 복습하기 <span class="btn-count">' + total + '문제</span></button>';
    }
  } else {
    h += '<button class="btn btn-primary" onclick="startDaily()"><span class="btn-icon">\u{1F4DD}</span> 오늘의 문제 풀기 <span class="btn-count">' + quota + '문제</span></button>';
  }

  if (wrongTotal > 0) {
    h += '<button class="btn btn-danger" onclick="startWrongReview()"><span class="btn-icon">\u{1F4D5}</span> 전체 오답 복습 <span class="btn-count">' + wrongTotal + '문제</span></button>';
  }
  h += '</div></div>';

  h += '<div style="text-align:center;margin-top:15px">';
  h += '<button class="btn btn-secondary" onclick="showCalendar()" style="margin:5px">\u2699\uFE0F 시험 날짜 변경</button>';
  h += '<button class="btn btn-secondary" onclick="closePlanner()" style="margin:5px">\u2190 모드 선택으로</button>';
  h += '<button class="btn btn-danger" onclick="resetPlanner()" style="margin:5px;font-size:.85em">플래너 초기화</button>';
  h += '</div>';

  document.getElementById('dashboard-content').innerHTML = h;
}

// ============================================================
// 학습 기록 달력
// ============================================================
function buildStudyCalendar(data) {
  var today = todayStr();
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth();

  var h = '<div style="text-align:center;margin-bottom:10px">';
  h += '<button class="calendar-nav" onclick="changeStudyCal(-1)" style="font-size:.8em;padding:4px 8px">◀</button>';
  h += '<span id="study-cal-title" style="margin:0 15px;font-weight:600;color:#1a237e">' + year + '년 ' + (month+1) + '월</span>';
  h += '<button class="calendar-nav" onclick="changeStudyCal(1)" style="font-size:.8em;padding:4px 8px">▶</button>';
  h += '</div>';
  h += '<div id="study-cal-grid">';
  h += renderStudyMonth(data, year, month);
  h += '</div>';

  // 범례
  h += '<div style="display:flex;justify-content:center;gap:15px;margin-top:12px;font-size:.8em;color:#666">';
  h += '<span>🟢 학습 완료</span>';
  h += '<span>🔴 미학습</span>';
  h += '<span>⬜ 예정</span>';
  h += '</div>';

  return h;
}

var studyCalYear, studyCalMonth;

function renderStudyMonth(data, year, month) {
  studyCalYear = year;
  studyCalMonth = month;
  var today = todayStr();
  var log = data.dailyLog || {};

  var h = '<div class="calendar-grid">';
  ['일','월','화','수','목','금','토'].forEach(function(d) {
    h += '<div class="calendar-day-label">' + d + '</div>';
  });

  var first = new Date(year, month, 1);
  var lastDay = new Date(year, month+1, 0).getDate();
  for (var i = 0; i < first.getDay(); i++) h += '<div></div>';

  for (var d = 1; d <= lastDay; d++) {
    var ds = year + '-' + String(month+1).padStart(2,'0') + '-' + String(d).padStart(2,'0');
    var cls = 'calendar-day';
    var style = 'cursor:default;';
    var badge = '';

    if (ds === today) cls += ' today';

    if (ds > today) {
      // 미래 — 예정
      style += 'color:#bbb;';
      if (ds === data.examDate) badge = '🎯';
    } else {
      // 과거 또는 오늘
      var dayLog = log[ds];
      if (dayLog && dayLog.completed && dayLog.completed.length > 0) {
        // 학습한 날
        style += 'background:#e8f5e9;color:#1b8901;font-weight:700;';
        badge = '✅';
      } else {
        // 학습 안 한 날 (주말 포함, 플래너 시작 이후만 표시)
        var plannerStarted = Object.keys(log).length > 0;
        var firstLogDate = plannerStarted ? Object.keys(log).sort()[0] : today;
        if (ds >= firstLogDate && ds <= today) {
          style += 'background:#fce4ec;color:#d13212;';
          badge = '❌';
        } else {
          style += 'color:#ccc;';
        }
      }
    }

    h += '<div class="' + cls + '" style="' + style + 'position:relative">';
    h += d;
    if (badge) h += '<span style="position:absolute;top:-2px;right:1px;font-size:.55em">' + badge + '</span>';
    h += '</div>';
  }
  h += '</div>';
  return h;
}

function changeStudyCal(dir) {
  studyCalMonth += dir;
  if (studyCalMonth < 0) { studyCalMonth = 11; studyCalYear--; }
  if (studyCalMonth > 11) { studyCalMonth = 0; studyCalYear++; }

  var data = loadPlanner();
  if (!data) return;

  document.getElementById('study-cal-title').textContent = studyCalYear + '년 ' + (studyCalMonth+1) + '월';
  document.getElementById('study-cal-grid').innerHTML = renderStudyMonth(data, studyCalYear, studyCalMonth);
}

function resetPlanner() {
  if (!confirm('플래너 데이터를 모두 초기화하시겠습니까? 진행률이 삭제됩니다.')) return;
  localStorage.removeItem(STORAGE_KEY);
  closePlanner();
}
