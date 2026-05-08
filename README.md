# ☁️ AWS ANS-C01 Practice Exam

AWS Certified Advanced Networking Specialty (ANS-C01) 자격증 대비 모의시험 웹 애플리케이션입니다.

## Built with Kiro

이 프로젝트는 [Kiro](https://kiro.dev) AI IDE를 사용하여 설계부터 구현, 배포까지 전 과정을 진행했습니다.

### Kiro 워크플로우

```
1. 요구사항 정의 → Kiro와 대화하며 기능 설계
2. 코드 구현 → Kiro가 HTML/JS 코드 작성
3. 반복 개선 → 실시간 피드백으로 기능 추가/수정
4. 배포 → S3 업로드 + CloudFront 무효화까지 Kiro가 자동 처리
5. 해설 생성 → 272문제의 상세 해설을 Kiro가 AWS 지식 기반으로 작성
```

Kiro를 통해 다음 작업들을 자연어 대화만으로 완료했습니다:
- 시험 모드 / 학습 모드 / 랜덤 모드 / 정답 보기 모드 구현
- 학습 플래너 (시험 날짜 설정, 일일 할당량 자동 계산, 복습 시스템)
- 시험 직전 총복습 기간 자동 확보 (D-2일)
- 학습 기록 달력 (학습한 날/안 한 날 시각화)
- 상세 해설 생성 (정답 이유 + 오답 분석)
- AWS 인프라 배포 (S3 + CloudFront)

## 기능

### 시험 모드
- 📝 **시험 모드** — 실제 시험처럼 모든 문제를 풀고 제출
- 📖 **학습 모드** — 문제를 풀면 바로 정답과 해설 확인
- 🎲 **랜덤 모드** — 문제 순서를 랜덤으로 섞어서 학습
- 👀 **정답 보기 모드** — 모든 문제의 정답과 해설을 한눈에 확인

### 학습 플래너
- 📅 시험 날짜 설정 → 하루 할당량 자동 계산
- 📖 시험 전 마지막 2일은 전체 복습 기간으로 자동 확보
- 📆 학습 기록 달력 (✅ 학습 완료 / ❌ 미학습)
- 📕 오답 노트 → 틀린 문제 자동 수집 + 다음 날 복습
- 🔄 다시 풀기 — 오늘의 문제를 반복 학습

### 해설
- 정답이 맞는 이유 (AWS 서비스 동작 원리 기반)
- 각 오답이 틀린 이유 분석
- 줄바꿈으로 가독성 확보

## 기술 스택

- **Frontend**: Vanilla HTML/CSS/JavaScript (프레임워크 없음)
- **Storage**: localStorage (학습 진행률 저장)
- **Hosting**: Amazon S3 + CloudFront
- **DNS**: CloudFront 배포 도메인

## 배포

```bash
# S3 업로드
aws s3 sync . s3://YOUR-BUCKET-NAME --exclude ".*" --exclude "README.md"

# CloudFront 캐시 무효화
aws cloudfront create-invalidation --distribution-id YOUR-DIST-ID --paths "/*"
```

## 프로젝트 구조

```
├── index.html                    # 시험 선택 페이지
├── network/
│   ├── index.html                # ANS-C01 메인 페이지
│   ├── app.js                    # 시험 모드 로직
│   ├── planner.js                # 학습 플래너 (대시보드, 달력)
│   ├── planner2.js               # 학습 플래너 (복습, 오늘의 문제)
│   └── questions.js              # 272문제 데이터 + 해설
├── AWS_ANS-C01_CheatSheet.md     # 시험 요약 치트시트
└── AWS_ExamApp_Architecture.md   # 앱 설계 문서
```

## 라이선스

이 프로젝트는 개인 학습 목적으로 제작되었습니다.
