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
        <script src="/static/app.js"></script>
    </body>
    </html>
  `)
})

export default app
