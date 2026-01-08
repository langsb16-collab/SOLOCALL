# SOLOCALL (솔로콜)

**AI 음성 우선 종합 생활 지원 플랫폼**  
*AI Voice-First Comprehensive Life Support Platform*

![Platform Status](https://img.shields.io/badge/status-active-success)
![Languages](https://img.shields.io/badge/languages-11-blue)
![License](https://img.shields.io/badge/license-proprietary-red)

---

## 📋 프로젝트 개요

**SOLOCALL**은 혼자 사는 중년·시니어를 위한 전화 기반 AI 생활 지원 플랫폼입니다.  
앱 설치나 복잡한 UI 없이 전화 한 통으로 일상, 행정, 건강, 안전 문제를 해결합니다.

### 핵심 개념
- **전화가 곧 플랫폼**: 앱 설치 불필요
- **음성 우선**: 말로만 모든 기능 사용
- **실질적 문제 해결**: 위로가 아닌 실제 대행 서비스

---

## 🌐 지원 언어 (11개국)

| 언어 | 코드 | 지역 |
|------|------|------|
| 🇰🇷 한국어 | `ko` | 대한민국 |
| 🇺🇸 English | `en` | 미국 |
| 🇬🇧 English (UK) | `en-GB` | 영국 |
| 🇯🇵 日本語 | `ja` | 일본 |
| 🇩🇪 Deutsch | `de` | 독일 |
| 🇨🇳 简体中文 | `zh-CN` | 중국 |
| 🇪🇸 Español | `es` | 스페인 |
| 🇫🇷 Français | `fr` | 프랑스 |
| 🇵🇹 Português | `pt` | 포르투갈 |
| 🇧🇷 Português (Brasil) | `pt-BR` | 브라질 |
| 🇮🇹 Italiano | `it` | 이탈리아 |

---

## ✨ 주요 기능

### 1️⃣ 병원·관공서 전화 대행
- AI가 병원, 공공기관에 직접 전화
- 예약, 문의, 절차 확인 대행
- 대기 시간 없이 결과만 전달

### 2️⃣ 건강 정보 정리 (비의료)
- 증상 정리 및 기록
- 병원 방문 권장 여부 안내
- 병원 방문 전 질문 준비

### 3️⃣ 가족 소통 브리지
- 필요시에만 가족에게 상태 전달
- 자율성 존중, 감시 아님
- 이상 징후 감지 시 알림

### 4️⃣ 보이스피싱 방어
- 실시간 통화 모니터링
- 사기 패턴 감지
- 즉시 음성 경고

### 5️⃣ 생활 매니저
- 날씨, 일정, 약 복용 알림
- 전화 기반 생활 관리
- 24시간 안부 체크

### 6️⃣ 응급 상황 대응
- 급한 상황 즉시 연결
- 장례·요양 절차 안내
- 행정 신청 흐름 가이드

---

## 🎨 디자인 시스템

### 색상 팔레트
```
메인 컬러: #2F3A4A (소프트 네이비) - 신뢰·안정
서브 컬러: #8B9098 (웜 그레이) - 차분함
배경 컬러: #F4F6F8 (오프화이트) - 눈 피로 최소화
포인트 컬러: #6F8F7E (세이지 그린) - 케어받는 느낌
```

### 폰트
- **한글/국문**: Noto Sans KR (시니어 가독성 최고)
- **영문**: Inter (글로벌 표준)

### 디자인 철학
- 과장 없는 안정감
- 의료·복지처럼 무겁지 않게
- 기술을 드러내지 않는 기술

---

## 🛠️ 기술 스택

### Frontend
- **Hono Framework**: 경량 고속 웹 프레임워크
- **TailwindCSS**: 유틸리티 기반 CSS
- **Vanilla JavaScript**: 순수 JS (프레임워크 없음)

### Backend
- **Cloudflare Workers**: 엣지 런타임
- **Hono**: API 엔드포인트

### Infrastructure
- **Cloudflare Pages**: 정적 사이트 호스팅
- **Wrangler**: 개발 및 배포 CLI

---

## 📁 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx              # 메인 Hono 애플리케이션
│   ├── renderer.tsx           # JSX 렌더러
│   └── locales/               # 다국어 콘텐츠
│       ├── index.ts           # 로케일 로더
│       ├── ko.json            # 한국어
│       ├── en.json            # 영어
│       ├── ja.json            # 일본어
│       ├── de.json            # 독일어
│       ├── zh-CN.json         # 중국어 간체
│       ├── es.json            # 스페인어
│       ├── fr.json            # 프랑스어
│       ├── pt.json            # 포르투갈어
│       ├── pt-BR.json         # 브라질 포르투갈어
│       ├── it.json            # 이탈리아어
│       └── en-GB.json         # 영국 영어
├── public/
│   └── static/
│       └── app.js             # 프론트엔드 JavaScript
├── dist/                      # 빌드 결과물
├── ecosystem.config.cjs       # PM2 설정
├── package.json               # 의존성 및 스크립트
├── tsconfig.json              # TypeScript 설정
├── vite.config.ts             # Vite 빌드 설정
└── wrangler.jsonc             # Cloudflare 설정
```

---

## 🚀 로컬 개발 환경

### 필수 요구사항
- Node.js 18+
- npm 또는 pnpm

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 빌드
npm run build

# 개발 서버 시작 (PM2)
fuser -k 3000/tcp 2>/dev/null || true  # 포트 정리
pm2 start ecosystem.config.cjs

# 또는 직접 실행
npm run dev:sandbox
```

### 테스트

```bash
# HTTP 테스트
curl http://localhost:3000

# API 테스트
curl http://localhost:3000/api/languages
curl http://localhost:3000/api/locale/ko
```

---

## 🌍 배포

### Cloudflare Pages 배포

#### 1. Cloudflare API 키 설정
```bash
# API 키 설정 (최초 1회)
wrangler login
```

#### 2. 프로젝트 생성
```bash
# 프로젝트 생성
wrangler pages project create solocall --production-branch main
```

#### 3. 배포
```bash
# 빌드 및 배포
npm run build
wrangler pages deploy dist --project-name solocall
```

### 배포 URL
- **Production**: `https://solocall.pages.dev`
- **Branch**: `https://main.solocall.pages.dev`

---

## 📊 현재 완료된 기능

✅ **다국어 지원**: 11개 언어 완전 구현  
✅ **반응형 디자인**: 모바일/태블릿/데스크톱 최적화  
✅ **언어 자동 감지**: 브라우저 언어 기반 초기 설정  
✅ **실시간 언어 전환**: 새로고침 없이 즉시 전환  
✅ **35개 FAQ**: 6개 카테고리별 질문 답변  
✅ **서비스 기능 소개**: 6개 핵심 기능 설명  
✅ **사용 방법 가이드**: 3단계 프로세스  
✅ **API 엔드포인트**: RESTful API 완성  

---

## 🔮 향후 구현 예정 기능

⏳ **Twilio 통화 연동**: 실제 전화 기능 구현  
⏳ **STT/TTS 엔진**: 실시간 음성 인식/합성  
⏳ **AI 의도 분류**: 사용자 요청 자동 분류  
⏳ **전화 대행 기능**: 외부 전화 자동 발신  
⏳ **사기 감지 엔진**: 실시간 위험 패턴 분석  
⏳ **사용자 인증**: 전화번호 기반 인증  
⏳ **통화 이력 관리**: D1 데이터베이스 연동  
⏳ **가족 알림 시스템**: 이메일/SMS 연동  

---

## 📖 API 문서

### GET `/api/languages`
사용 가능한 언어 목록 조회

**Response:**
```json
[
  {
    "code": "ko",
    "name": "한국어",
    "flag": "🇰🇷"
  },
  ...
]
```

### GET `/api/locale/:lang`
특정 언어의 로케일 데이터 조회

**Parameters:**
- `lang`: 언어 코드 (ko, en, ja, de, zh-CN, es, fr, pt, it, pt-BR, en-GB)

**Response:**
```json
{
  "lang": "ko",
  "langName": "한국어",
  "meta": { ... },
  "nav": { ... },
  "hero": { ... },
  "features": { ... },
  "howItWorks": { ... },
  "faq": { ... },
  "footer": { ... }
}
```

---

## 🔗 주요 URL

- **개발 서버**: https://3000-iopwwwabto40xp4vovsol-8f57ffe2.sandbox.novita.ai
- **GitHub**: (To be added)
- **Cloudflare Pages**: (To be deployed)

---

## 📝 개발 노트

### 왜 Cloudflare Pages인가?
- ✅ 전 세계 엣지 네트워크에서 초고속 응답
- ✅ 무료 티어로 충분한 트래픽 처리
- ✅ 자동 HTTPS 및 CDN
- ✅ Serverless Functions 지원

### 왜 Hono인가?
- ✅ Cloudflare Workers에 최적화
- ✅ Express보다 10배 빠른 성능
- ✅ TypeScript 완벽 지원
- ✅ 미들웨어 생태계

### 디자인 선택 이유
- **소프트 네이비**: 신뢰감, 전화 인프라 연상
- **Noto Sans KR**: 시니어 가독성, 정부 표준
- **과장 없는 디자인**: 중년 사용자 거부감 최소화

---

## 👥 대상 사용자

- 혼자 사는 중년 (40~60대)
- 독거 시니어 (60대 이상)
- 싱글·돌싱 생활자
- 디지털 디바이스 접근성이 낮은 분들
- 전화로 편하게 소통하고 싶은 분들

---

## 🤝 기여 가이드

현재는 비공개 프로젝트이나, 향후 오픈소스 전환 시 기여 환영합니다.

---

## 📄 라이선스

© 2026 SOLOCALL. All rights reserved.

---

## 📞 문의

- **이메일**: support@solocall.com
- **웹사이트**: https://solocall.pages.dev (예정)

---

## 📌 버전 정보

- **Current Version**: 1.0.0
- **Last Updated**: 2026-01-08
- **Status**: ✅ MVP 완성

---

## 🙏 감사의 말

혼자 사는 중년과 시니어 분들이 더 이상 혼자 고민하지 않도록,  
전화 한 통으로 모든 것이 해결되는 세상을 만들어갑니다.

**혼자지만 외롭지 않게, SOLOCALL과 함께하세요.**
