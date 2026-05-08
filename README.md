# ☁️ AWS ANS-C01 Practice Exam

A web-based practice exam application for the AWS Certified Advanced Networking Specialty (ANS-C01) certification.

🇰🇷 [한국어 README](README_ko.md)

---

## 🤖 Built with Kiro

> This entire project was built **100% with [Kiro](https://kiro.dev) AI IDE**.
> Not a single line of code was manually typed.

### What Kiro Did

| Phase | What Kiro Performed |
|-------|-------------------|
| 🎯 Design | Received natural language request "build a study planner" → designed full architecture |
| 💻 Implementation | Wrote all HTML/CSS/JS code (vanilla JS, no frameworks) |
| 🔄 Iteration | Instant modifications from feedback like "remove dump date", "add retry button" |
| 📝 Content | Generated detailed explanations for 100 out of 272 questions (correct answer reasoning + wrong answer analysis) |
| 🚀 Deployment | Executed S3 upload + CloudFront cache invalidation via CLI automatically |
| 🐛 Debugging | "It's still not showing" → discovered files weren't uploaded to S3 → fixed immediately |
| 📊 Git | Repository init, .gitignore setup, commit, and push — all automated |

### Real Conversation Examples

```
Me: "Remove the dump date from the study planner"
Kiro: [Removed related code from 3 files + S3 upload + CloudFront invalidation]

Me: "Shouldn't we finish the first pass 1-2 days before the exam?"
Kiro: [Added REVIEW_BUFFER_DAYS constant + modified quota calculation + updated dashboard UI]

Me: "The explanation has no line breaks, readability is bad"
Kiro: [One-line fix in esc() function: \n → <br> + deployed]

Me: "Add a retry button to today's questions"
Kiro: [Added button to HTML + implemented resetDaily() in JS + deployed]
```

### Kiro Workflow

```
┌─────────────────────────────────────────────────────────┐
│  1. Describe requirements in natural language            │
│     "Let me set exam date and solve daily assigned       │
│      questions only"                                     │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  2. Kiro designs + implements                            │
│     - Architecture (localStorage, daily quota, review)   │
│     - Full HTML/CSS/JS code                              │
│     - Integrates with existing code style                │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  3. Instant deployment + verification                    │
│     - aws s3 cp → CloudFront invalidation → confirmed   │
│     - Auto-fixes browser cache issues (?v=N querystring) │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  4. Feedback → immediate reflection                      │
│     "Still not showing" → root cause analysis → fix →    │
│     redeploy. Full cycle: 1-2 conversation turns.        │
└─────────────────────────────────────────────────────────┘
```

### Why Kiro

- **Zero coding required**: Built a complete web app without frontend development experience
- **Full-stack automation**: Not just code generation — AWS CLI execution, Git management, and deployment in one flow
- **Real-time debugging**: Say "it's not working" → Kiro checks S3 files → checks CloudFront cache → identifies root cause → fixes
- **Domain knowledge**: Generated detailed explanations for 272 AWS networking questions based on service behavior principles
- **Context continuity**: Design → implement → deploy → debug → add features — all in a single continuous conversation

---

## Features

### Exam Modes
- 📝 **Exam Mode** — Simulate real exam, submit all answers at once
- 📖 **Study Mode** — See correct answer and explanation immediately after answering
- 🎲 **Random Mode** — Shuffled question order for varied practice
- 👀 **Answer View** — Browse all questions with answers and explanations

### Study Planner
- 📅 Set exam date → automatic daily quota calculation
- 📖 Last 2 days before exam reserved for full review automatically
- 📆 Study calendar (✅ completed / ❌ missed)
- 📕 Wrong answer notebook → auto-collected, reviewed next day
- 🔄 Retry — re-solve today's questions for repetition

### Explanations
- Why the correct answer is right (based on AWS service behavior)
- Why each wrong answer is incorrect
- Formatted with line breaks for readability

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML/CSS/JavaScript |
| Storage | Browser localStorage |
| Hosting | Amazon S3 + CloudFront |
| AI IDE | Kiro |

## Project Structure

```
├── index.html                    # Exam selection page
├── network/
│   ├── index.html                # ANS-C01 main page
│   ├── app.js                    # Exam mode logic
│   ├── planner.js                # Study planner (dashboard, calendar)
│   ├── planner2.js               # Study planner (review, daily questions)
│   └── questions.js              # 272 questions + explanations
├── AWS_ANS-C01_CheatSheet.md     # Exam cheat sheet
└── AWS_ExamApp_Architecture.md   # App architecture document
```

## Deployment

```bash
# Upload to S3
aws s3 sync . s3://YOUR-BUCKET-NAME --exclude ".*" --exclude "README.md"

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR-DIST-ID --paths "/*"
```

## License

This project was created for personal study purposes.
