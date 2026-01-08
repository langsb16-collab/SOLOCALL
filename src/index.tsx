import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { getLocale, availableLanguages, type LocaleData } from './locales'

const app = new Hono()

// Enable CORS for frontend-backend communication
app.use('/api/*', cors())

// Serve static files from public directory
app.use('/static/*', serveStatic({ root: './public' }))

// API endpoint to get locale data
app.get('/api/locale/:lang', (c) => {
  const lang = c.req.param('lang')
  const locale = getLocale(lang)
  return c.json(locale)
})

// API endpoint to get available languages
app.get('/api/languages', (c) => {
  return c.json(availableLanguages)
})

// Main page route
app.get('/', (c) => {
  const acceptLang = c.req.header('Accept-Language') || 'ko'
  const defaultLang = acceptLang.split(',')[0].split('-')[0] || 'ko'
  
  return c.html(`
    <!DOCTYPE html>
    <html lang="${defaultLang}">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="SOLOCALL - AI Voice-First Life Support Platform">
        <title>SOLOCALL - 솔로콜</title>
        
        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
        
        <!-- Icons -->
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        
        <!-- TailwindCSS -->
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  'brand-navy': '#2F3A4A',
                  'brand-gray': '#8B9098',
                  'brand-white': '#F4F6F8',
                  'brand-sage': '#6F8F7E'
                },
                fontFamily: {
                  'sans': ['Noto Sans KR', 'Inter', 'sans-serif'],
                  'inter': ['Inter', 'sans-serif']
                }
              }
            }
          }
        </script>
        
        <!-- Custom CSS -->
        <style>
          body {
            font-family: 'Noto Sans KR', 'Inter', sans-serif;
            background-color: #F4F6F8;
            color: #2F3A4A;
          }
          
          .hero-gradient {
            background: linear-gradient(135deg, #2F3A4A 0%, #1F3C5A 100%);
          }
          
          .feature-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(47, 58, 74, 0.15);
          }
          
          .smooth-scroll {
            scroll-behavior: smooth;
          }
          
          .fade-in {
            animation: fadeIn 0.6s ease-in;
          }
          
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .lang-selector {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          .lang-selector.open {
            max-height: 400px;
          }
          
          .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          .faq-answer.open {
            max-height: 500px;
          }
          
          /* 모바일에서 features-title 30% 축소 */
          @media (max-width: 768px) {
            #features-title {
              font-size: 1.4rem !important;
              line-height: 1.2;
            }
            
            /* 모바일에서 곤색 헤더(Hero) 여백 축소 */
            #home {
              padding-top: 5rem !important;
              padding-bottom: 3rem !important;
            }
            
            /* 모바일에서 섹션 여백 축소 */
            #features, #how-it-works, #faq {
              padding-top: 2.5rem !important;
              padding-bottom: 2.5rem !important;
            }
            
            /* 모바일에서 제목 하단 여백 축소 */
            #home .max-w-6xl {
              margin-bottom: 0 !important;
            }
            
            #hero-title {
              margin-bottom: 1rem !important;
            }
            
            #hero-subtitle {
              margin-bottom: 0.75rem !important;
            }
            
            #hero-description {
              margin-bottom: 1.5rem !important;
            }
          }
          
          /* 챗봇 버튼 스타일 */
          #chatbot-button {
            position: fixed;
            bottom: 24px;
            right: 24px;
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #6F8F7E 0%, #5a7366 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-center;
            box-shadow: 0 4px 12px rgba(111, 143, 126, 0.4);
            cursor: pointer;
            z-index: 1000;
            transition: all 0.3s ease;
          }
          
          #chatbot-button:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(111, 143, 126, 0.6);
          }
          
          #chatbot-button i {
            color: white;
            font-size: 24px;
          }
          
          /* 챗봇 모달 */
          #chatbot-modal {
            display: none;
            position: fixed;
            bottom: 100px;
            right: 24px;
            width: 90%;
            max-width: 400px;
            max-height: 600px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(47, 58, 74, 0.2);
            z-index: 999;
            overflow: hidden;
          }
          
          #chatbot-modal.active {
            display: flex;
            flex-direction: column;
            animation: slideUp 0.3s ease;
          }
          
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          #chatbot-header {
            background: linear-gradient(135deg, #2F3A4A 0%, #1F3C5A 100%);
            color: white;
            padding: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          
          #chatbot-content {
            flex: 1;
            overflow-y: auto;
            padding: 16px;
          }
          
          .faq-item-chatbot {
            background: #F4F6F8;
            padding: 12px;
            margin-bottom: 8px;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .faq-item-chatbot:hover {
            background: #e8eaed;
          }
          
          .faq-item-chatbot-question {
            font-weight: 500;
            color: #2F3A4A;
            margin-bottom: 8px;
          }
          
          .faq-item-chatbot-answer {
            font-size: 0.9rem;
            color: #8B9098;
            display: none;
          }
          
          .faq-item-chatbot.active .faq-item-chatbot-answer {
            display: block;
          }
          
          #chatbot-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8px;
            padding: 12px;
            border-top: 1px solid #e5e7eb;
          }
          
          .page-btn {
            padding: 6px 12px;
            background: #F4F6F8;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
          }
          
          .page-btn:hover {
            background: #e8eaed;
          }
          
          .page-btn.active {
            background: #6F8F7E;
            color: white;
          }
          
          .page-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        </style>
    </head>
    <body class="smooth-scroll">
        <!-- Navigation -->
        <nav class="bg-white shadow-md fixed w-full top-0 z-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between items-center h-16">
                    <div class="flex items-center">
                        <i class="fas fa-phone-volume text-brand-navy text-2xl mr-2"></i>
                        <span class="text-2xl font-bold text-brand-navy">SOLOCALL</span>
                    </div>
                    
                    <div class="hidden md:flex space-x-8">
                        <a href="#home" class="nav-link text-brand-navy hover:text-brand-sage transition">홈</a>
                        <a href="#features" class="nav-link text-brand-navy hover:text-brand-sage transition">서비스</a>
                        <a href="#how-it-works" class="nav-link text-brand-navy hover:text-brand-sage transition">사용방법</a>
                        <a href="#faq" class="nav-link text-brand-navy hover:text-brand-sage transition">FAQ</a>
                    </div>
                    
                    <div class="relative">
                        <button id="lang-toggle" class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-brand-white hover:bg-gray-200 transition">
                            <span id="current-lang-flag">🇰🇷</span>
                            <span id="current-lang-name" class="font-medium">한국어</span>
                            <i class="fas fa-chevron-down text-sm"></i>
                        </button>
                        <div id="lang-dropdown" class="lang-selector absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl">
                            <div id="lang-list" class="py-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="hero-gradient text-white pt-32 pb-20 px-4">
            <div class="max-w-6xl mx-auto text-center fade-in">
                <h1 id="hero-title" class="text-4xl md:text-6xl font-bold mb-6">
                    혼자지만 외롭지 않게
                </h1>
                <p id="hero-subtitle" class="text-xl md:text-2xl mb-4 text-gray-200">
                    전화 한 통으로 일상을 해결하는<br/>AI 생활 파트너
                </p>
                <p id="hero-description" class="text-base md:text-lg mb-8 text-gray-300 max-w-3xl mx-auto">
                    앱 설치 없이 전화만으로 병원 예약, 행정 절차, 건강 정보를<br/>대신 처리해 드리는 음성 우선 플랫폼입니다.
                </p>
                <div class="flex flex-col sm:flex-row justify-center gap-4">
                    <button id="cta-button" class="bg-white text-brand-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg">
                        서비스 시작하기
                    </button>
                    <button id="call-button" class="bg-brand-sage text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition shadow-lg">
                        <i class="fas fa-phone mr-2"></i>지금 전화하기
                    </button>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section id="features" class="py-20 px-4">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <h2 id="features-title" class="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        SOLOCALL이 제공하는 서비스
                    </h2>
                    <p id="features-subtitle" class="text-lg text-brand-gray">
                        전화 한 통으로 모든 것이 해결됩니다
                    </p>
                </div>
                
                <div id="features-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Features will be populated by JavaScript -->
                </div>
            </div>
        </section>

        <!-- How It Works Section -->
        <section id="how-it-works" class="py-20 px-4 bg-white">
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-16">
                    <h2 id="how-it-works-title" class="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        이렇게 사용하세요
                    </h2>
                </div>
                
                <div id="steps-container" class="flex flex-col md:flex-row justify-between items-center gap-8">
                    <!-- Steps will be populated by JavaScript -->
                </div>
            </div>
        </section>

        <!-- FAQ Section -->
        <section id="faq" class="py-20 px-4">
            <div class="max-w-4xl mx-auto">
                <div class="text-center mb-16">
                    <h2 id="faq-title" class="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        자주 묻는 질문
                    </h2>
                    <p id="faq-subtitle" class="text-lg text-brand-gray">
                        궁금한 점을 확인하세요
                    </p>
                </div>
                
                <div id="faq-container" class="space-y-6">
                    <!-- FAQ categories will be populated by JavaScript -->
                </div>
            </div>
        </section>

        <!-- Chatbot Button -->
        <div id="chatbot-button" title="FAQ 챗봇">
            <i class="fas fa-comments"></i>
        </div>

        <!-- Chatbot Modal -->
        <div id="chatbot-modal">
            <div id="chatbot-header">
                <div>
                    <h3 class="font-bold text-lg">FAQ 챗봇</h3>
                    <p class="text-sm opacity-80">자주 묻는 질문</p>
                </div>
                <button id="chatbot-close" class="text-white hover:text-gray-300 transition">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            <div id="chatbot-content">
                <!-- FAQ items will be populated by JavaScript -->
            </div>
            <div id="chatbot-pagination">
                <button id="prev-page" class="page-btn">
                    <i class="fas fa-chevron-left"></i>
                </button>
                <span id="page-info" class="text-sm text-brand-gray">1 / 4</span>
                <button id="next-page" class="page-btn">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>

        <!-- 서비스 시작하기 모달 -->
        <div id="onboarding-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999; overflow-y:auto;">
            <div style="max-width:600px; margin:50px auto; background:white; border-radius:16px; padding:32px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                    <h2 style="font-size:24px; font-weight:bold; color:#2F3A4A;">서비스 시작하기</h2>
                    <button onclick="document.getElementById('onboarding-modal').style.display='none'" style="font-size:24px; color:#8B9098; border:none; background:none; cursor:pointer;">&times;</button>
                </div>
                
                <p style="color:#8B9098; margin-bottom:24px; font-size:14px;">필요한 정보만 먼저 알려주세요. 이 정보는 위급하거나 도움이 필요할 때만 사용됩니다.</p>
                
                <form id="onboarding-form" style="display:flex; flex-direction:column; gap:20px;">
                    <!-- Step 1: 기본 정보 -->
                    <div style="padding:20px; background:#F4F6F8; border-radius:8px;">
                        <h3 style="font-weight:600; margin-bottom:16px; color:#2F3A4A;">1. 기본 정보</h3>
                        <div style="display:grid; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">나이대</label>
                                <select name="age" required style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                                    <option value="">선택하세요</option>
                                    <option value="40대">40대</option>
                                    <option value="50대">50대</option>
                                    <option value="60대 이상">60대 이상</option>
                                </select>
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">성별</label>
                                <select name="gender" required style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                                    <option value="">선택하세요</option>
                                    <option value="남">남</option>
                                    <option value="여">여</option>
                                    <option value="선택 안 함">선택 안 함</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 2: 거주 지역 -->
                    <div style="padding:20px; background:#F4F6F8; border-radius:8px;">
                        <h3 style="font-weight:600; margin-bottom:16px; color:#2F3A4A;">2. 거주 지역</h3>
                        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">시/도</label>
                                <input type="text" name="city" required placeholder="예: 서울" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">구/군</label>
                                <input type="text" name="district" required placeholder="예: 강남구" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 3: 건강 관련 -->
                    <div style="padding:20px; background:#F4F6F8; border-radius:8px;">
                        <h3 style="font-weight:600; margin-bottom:16px; color:#2F3A4A;">3. 건강 관련 (선택)</h3>
                        <div style="display:grid; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">기저질환</label>
                                <div style="display:grid; gap:8px;">
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="없음"> 없음</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="고혈압"> 고혈압</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="당뇨"> 당뇨</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="심장"> 심장</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="호흡기"> 호흡기</label>
                                    <label style="display:flex; align-items:center; gap:8px;"><input type="checkbox" name="condition" value="기타"> 기타</label>
                                </div>
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">복용 약</label>
                                <input type="text" name="medication" placeholder="예: 혈압약, 당뇨약" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                        </div>
                    </div>
                    
                    <!-- Step 4: 긴급 연락 -->
                    <div style="padding:20px; background:#F4F6F8; border-radius:8px;">
                        <h3 style="font-weight:600; margin-bottom:16px; color:#2F3A4A;">4. 긴급 연락 설정</h3>
                        <div style="display:grid; gap:12px;">
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">가족/자녀 이름</label>
                                <input type="text" name="contact_name" placeholder="예: 김철수" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                            <div>
                                <label style="display:block; margin-bottom:6px; font-size:14px; color:#2F3A4A;">전화번호</label>
                                <input type="tel" name="contact_phone" placeholder="예: 010-1234-5678" style="width:100%; padding:10px; border:1px solid #ddd; border-radius:6px;">
                            </div>
                            <label style="display:flex; align-items:center; gap:8px; font-size:14px;">
                                <input type="checkbox" name="alert_consent">
                                위험 상황 시 자동 알림 동의
                            </label>
                        </div>
                    </div>
                    
                    <button type="submit" style="width:100%; padding:16px; background:#6F8F7E; color:white; border:none; border-radius:8px; font-size:16px; font-weight:600; cursor:pointer;">
                        정보 저장하고 시작하기
                    </button>
                </form>
            </div>
        </div>

        <!-- 지금 전화하기 모달 -->
        <div id="call-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.5); z-index:9999;">
            <div style="max-width:500px; margin:100px auto; background:white; border-radius:16px; padding:32px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
                    <h2 style="font-size:24px; font-weight:bold; color:#2F3A4A;">지금 전화하기</h2>
                    <button onclick="document.getElementById('call-modal').style.display='none'" style="font-size:24px; color:#8B9098; border:none; background:none; cursor:pointer;">&times;</button>
                </div>
                
                <p style="color:#8B9098; margin-bottom:24px; font-size:14px;">지금 도움이 필요하신가요?</p>
                
                <div style="display:grid; gap:12px;">
                    <button onclick="alert('가족에게 연결 중입니다...')" style="width:100%; padding:20px; background:#F4F6F8; border:1px solid #ddd; border-radius:8px; text-align:left; cursor:pointer; transition:all 0.2s;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-user-friends" style="font-size:24px; color:#6F8F7E;"></i>
                            <div>
                                <div style="font-weight:600; color:#2F3A4A; margin-bottom:4px;">1️⃣ 가족에게 전화</div>
                                <div style="font-size:12px; color:#8B9098;">사전 등록된 번호로 즉시 연결</div>
                            </div>
                        </div>
                    </button>
                    
                    <button onclick="alert('가까운 병원을 찾고 있습니다...')" style="width:100%; padding:20px; background:#F4F6F8; border:1px solid #ddd; border-radius:8px; text-align:left; cursor:pointer; transition:all 0.2s;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-hospital" style="font-size:24px; color:#6F8F7E;"></i>
                            <div>
                                <div style="font-weight:600; color:#2F3A4A; margin-bottom:4px;">2️⃣ 가까운 병원 찾기</div>
                                <div style="font-size:12px; color:#8B9098;">현재 지역 기준 자동 검색 후 연결</div>
                            </div>
                        </div>
                    </button>
                    
                    <button onclick="if(confirm('119에 연결하시겠습니까?')) alert('119 연결 중...')" style="width:100%; padding:20px; background:#FF6B6B; border:1px solid #FF6B6B; border-radius:8px; text-align:left; cursor:pointer; transition:all 0.2s; color:white;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-ambulance" style="font-size:24px;"></i>
                            <div>
                                <div style="font-weight:600; margin-bottom:4px;">3️⃣ 119 응급 신고</div>
                                <div style="font-size:12px; opacity:0.9;">위급 상황 시 즉시 연결</div>
                            </div>
                        </div>
                    </button>
                    
                    <button onclick="alert('AI 상담 연결 중입니다...')" style="width:100%; padding:20px; background:#F4F6F8; border:1px solid #ddd; border-radius:8px; text-align:left; cursor:pointer; transition:all 0.2s;">
                        <div style="display:flex; align-items:center; gap:12px;">
                            <i class="fas fa-robot" style="font-size:24px; color:#6F8F7E;"></i>
                            <div>
                                <div style="font-weight:600; color:#2F3A4A; margin-bottom:4px;">4️⃣ AI에게 상담</div>
                                <div style="font-size:12px; color:#8B9098;">지금 상황을 말씀해 주세요</div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-brand-navy text-white py-12 px-4">
            <div class="max-w-7xl mx-auto text-center">
                <div class="mb-6">
                    <i class="fas fa-phone-volume text-4xl mb-4"></i>
                    <h3 class="text-2xl font-bold mb-2">SOLOCALL</h3>
                    <p id="footer-tagline" class="text-gray-300 mb-4">
                        혼자지만 외롭지 않게, SOLOCALL과 함께하세요
                    </p>
                </div>
                <div class="border-t border-gray-600 pt-6">
                    <p id="footer-contact" class="text-gray-400 mb-2">
                        문의: support@solocall.com
                    </p>
                    <p id="footer-copyright" class="text-gray-500 text-sm">
                        © 2026 SOLOCALL. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

        <!-- JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script>
          // 서비스 시작하기 버튼
          document.getElementById('cta-button').addEventListener('click', function() {
            document.getElementById('onboarding-modal').style.display = 'block';
          });
          
          // 지금 전화하기 버튼
          document.getElementById('call-button').addEventListener('click', function() {
            document.getElementById('call-modal').style.display = 'block';
          });
          
          // 온보딩 폼 제출
          document.getElementById('onboarding-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = {
              age: formData.get('age'),
              gender: formData.get('gender'),
              city: formData.get('city'),
              district: formData.get('district'),
              conditions: formData.getAll('condition'),
              medication: formData.get('medication'),
              contact_name: formData.get('contact_name'),
              contact_phone: formData.get('contact_phone'),
              alert_consent: formData.get('alert_consent') ? 'ON' : 'OFF'
            };
            
            // localStorage에 저장
            localStorage.setItem('solocall_user_info', JSON.stringify(data));
            
            // 모달 닫기
            document.getElementById('onboarding-modal').style.display = 'none';
            
            // 성공 메시지
            alert('정보가 저장되었습니다! 이제 SOLOCALL 서비스를 이용하실 수 있습니다.');
          });
          
          // 모달 외부 클릭 시 닫기
          window.addEventListener('click', function(e) {
            if (e.target.id === 'onboarding-modal') {
              document.getElementById('onboarding-modal').style.display = 'none';
            }
            if (e.target.id === 'call-modal') {
              document.getElementById('call-modal').style.display = 'none';
            }
          });
        </script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
