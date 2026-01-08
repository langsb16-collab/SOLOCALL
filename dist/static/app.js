// Global state
let currentLang = 'ko'
let currentLocale = null
let availableLanguages = []
let currentPage = 1
const itemsPerPage = 10

// Initialize application
async function init() {
  try {
    // Load available languages
    const langResponse = await axios.get('/api/languages')
    availableLanguages = langResponse.data
    
    // Detect browser language
    const browserLang = navigator.language || navigator.userLanguage
    const detectedLang = detectLanguage(browserLang)
    
    // Load locale
    await loadLocale(detectedLang)
    
    // Setup event listeners
    setupEventListeners()
    
    // Render language selector
    renderLanguageSelector()
    
    // Initialize chatbot
    initChatbot()
    
  } catch (error) {
    console.error('Initialization error:', error)
    // Fallback to Korean
    await loadLocale('ko')
  }
}

// Detect language from browser
function detectLanguage(browserLang) {
  const langCode = browserLang.toLowerCase()
  
  // Exact match
  if (availableLanguages.find(l => l.code === langCode)) {
    return langCode
  }
  
  // Partial match (e.g., 'en-US' -> 'en')
  const baseLang = langCode.split('-')[0]
  if (availableLanguages.find(l => l.code === baseLang)) {
    return baseLang
  }
  
  // Default to Korean
  return 'ko'
}

// Load locale data
async function loadLocale(lang) {
  try {
    const response = await axios.get(`/api/locale/${lang}`)
    currentLocale = response.data
    currentLang = lang
    
    // Update page content
    updatePageContent()
    
    // Update current language display
    updateCurrentLanguage()
    
  } catch (error) {
    console.error('Failed to load locale:', error)
  }
}

// Update page content with locale data
function updatePageContent() {
  if (!currentLocale) return
  
  // Update document title and meta
  document.title = currentLocale.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', currentLocale.meta.description)
  
  // Update hero section
  document.getElementById('hero-title').innerHTML = currentLocale.hero.title
  document.getElementById('hero-subtitle').innerHTML = currentLocale.hero.subtitle
  document.getElementById('hero-description').innerHTML = currentLocale.hero.description
  document.getElementById('cta-button').textContent = currentLocale.hero.cta
  document.getElementById('call-button').innerHTML = `<i class="fas fa-phone mr-2"></i>${currentLocale.hero.callNow}`
  
  // Update navigation
  const navLinks = document.querySelectorAll('.nav-link')
  const navItems = ['home', 'features', 'faq', 'contact']
  navLinks.forEach((link, index) => {
    if (currentLocale.nav[navItems[index]]) {
      link.textContent = currentLocale.nav[navItems[index]]
    }
  })
  
  // Update features section
  document.getElementById('features-title').textContent = currentLocale.features.title
  document.getElementById('features-subtitle').textContent = currentLocale.features.subtitle
  renderFeatures()
  
  // Update how it works section
  document.getElementById('how-it-works-title').textContent = currentLocale.howItWorks.title
  renderHowItWorks()
  
  // Update FAQ section
  document.getElementById('faq-title').textContent = currentLocale.faq.title
  document.getElementById('faq-subtitle').textContent = currentLocale.faq.subtitle
  renderFAQ()
  
  // Update footer
  document.getElementById('footer-tagline').textContent = currentLocale.footer.tagline
  document.getElementById('footer-contact').textContent = currentLocale.footer.contact
  document.getElementById('footer-copyright').textContent = currentLocale.footer.copyright
}

// Render features grid
function renderFeatures() {
  const grid = document.getElementById('features-grid')
  if (!grid || !currentLocale) return
  
  grid.innerHTML = currentLocale.features.items.map(feature => `
    <div class="feature-card bg-white rounded-xl p-8 shadow-lg">
      <div class="text-brand-sage text-4xl mb-4">
        <i class="fas ${feature.icon}"></i>
      </div>
      <h3 class="text-xl font-bold text-brand-navy mb-3">
        ${feature.title}
      </h3>
      <p class="text-brand-gray leading-relaxed">
        ${feature.description}
      </p>
    </div>
  `).join('')
}

// Render how it works steps
function renderHowItWorks() {
  const container = document.getElementById('steps-container')
  if (!container || !currentLocale) return
  
  container.innerHTML = currentLocale.howItWorks.steps.map((step, index) => `
    <div class="flex-1 text-center">
      <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-sage text-white text-3xl font-bold mb-4 shadow-lg">
        ${step.number}
      </div>
      <h3 class="text-xl font-bold text-brand-navy mb-2">
        ${step.title}
      </h3>
      <p class="text-brand-gray">
        ${step.description}
      </p>
      ${index < currentLocale.howItWorks.steps.length - 1 ? '<div class="hidden md:block text-brand-gray text-2xl mt-8"><i class="fas fa-arrow-right"></i></div>' : ''}
    </div>
  `).join('')
}

// Render FAQ
function renderFAQ() {
  const container = document.getElementById('faq-container')
  if (!container || !currentLocale) return
  
  container.innerHTML = currentLocale.faq.categories.map((category, catIndex) => `
    <div class="mb-8">
      <h3 class="text-2xl font-bold text-brand-navy mb-4">${category.name}</h3>
      <div class="space-y-3">
        ${category.questions.map((item, qIndex) => `
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <button class="faq-question w-full text-left px-6 py-4 font-medium text-brand-navy hover:bg-brand-white transition flex justify-between items-center" data-cat="${catIndex}" data-q="${qIndex}">
              <span>${item.q}</span>
              <i class="fas fa-chevron-down transition-transform"></i>
            </button>
            <div class="faq-answer px-6 bg-brand-white" data-cat="${catIndex}" data-q="${qIndex}">
              <p class="py-4 text-brand-gray">${item.a}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('')
  
  // Add FAQ toggle event listeners
  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', (e) => {
      const btn = e.currentTarget
      const cat = btn.dataset.cat
      const q = btn.dataset.q
      const answer = document.querySelector(`.faq-answer[data-cat="${cat}"][data-q="${q}"]`)
      const icon = btn.querySelector('i')
      
      answer.classList.toggle('open')
      icon.style.transform = answer.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)'
    })
  })
}

// Render language selector
function renderLanguageSelector() {
  const langList = document.getElementById('lang-list')
  if (!langList) return
  
  langList.innerHTML = availableLanguages.map(lang => `
    <button class="lang-option w-full text-left px-4 py-2 hover:bg-brand-white transition flex items-center space-x-3" data-lang="${lang.code}">
      <span class="text-2xl">${lang.flag}</span>
      <span class="font-medium text-brand-navy">${lang.name}</span>
    </button>
  `).join('')
  
  // Add click event to language options
  document.querySelectorAll('.lang-option').forEach(option => {
    option.addEventListener('click', async (e) => {
      const lang = e.currentTarget.dataset.lang
      await loadLocale(lang)
      closeLangDropdown()
    })
  })
}

// Update current language display
function updateCurrentLanguage() {
  const currentLangData = availableLanguages.find(l => l.code === currentLang)
  if (currentLangData) {
    document.getElementById('current-lang-flag').textContent = currentLangData.flag
    document.getElementById('current-lang-name').textContent = currentLangData.name
  }
}

// Setup event listeners
function setupEventListeners() {
  // Language toggle
  const langToggle = document.getElementById('lang-toggle')
  const langDropdown = document.getElementById('lang-dropdown')
  
  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', () => {
      langDropdown.classList.toggle('open')
    })
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!langToggle.contains(e.target) && !langDropdown.contains(e.target)) {
        closeLangDropdown()
      }
    })
  }
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    })
  })
}

// Close language dropdown
function closeLangDropdown() {
  const langDropdown = document.getElementById('lang-dropdown')
  if (langDropdown) {
    langDropdown.classList.remove('open')
  }
}

// Initialize chatbot
function initChatbot() {
  const chatbotButton = document.getElementById('chatbot-button')
  const chatbotModal = document.getElementById('chatbot-modal')
  const chatbotClose = document.getElementById('chatbot-close')
  const prevPage = document.getElementById('prev-page')
  const nextPage = document.getElementById('next-page')
  
  if (!chatbotButton || !chatbotModal) return
  
  // Toggle chatbot modal
  chatbotButton.addEventListener('click', () => {
    chatbotModal.classList.toggle('active')
    if (chatbotModal.classList.contains('active')) {
      renderChatbotFAQ()
    }
  })
  
  // Close chatbot
  chatbotClose.addEventListener('click', () => {
    chatbotModal.classList.remove('active')
  })
  
  // Pagination
  prevPage.addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--
      renderChatbotFAQ()
    }
  })
  
  nextPage.addEventListener('click', () => {
    const totalPages = getTotalPages()
    if (currentPage < totalPages) {
      currentPage++
      renderChatbotFAQ()
    }
  })
  
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!chatbotModal.contains(e.target) && !chatbotButton.contains(e.target)) {
      chatbotModal.classList.remove('active')
    }
  })
}

// Get total pages for pagination
function getTotalPages() {
  if (!currentLocale || !currentLocale.faq || !currentLocale.faq.categories) return 1
  
  let totalQuestions = 0
  currentLocale.faq.categories.forEach(category => {
    totalQuestions += category.questions.length
  })
  
  return Math.ceil(totalQuestions / itemsPerPage)
}

// Render chatbot FAQ with pagination
function renderChatbotFAQ() {
  const chatbotContent = document.getElementById('chatbot-content')
  const pageInfo = document.getElementById('page-info')
  const prevBtn = document.getElementById('prev-page')
  const nextBtn = document.getElementById('next-page')
  
  if (!chatbotContent || !currentLocale || !currentLocale.faq) return
  
  // Collect all questions
  let allQuestions = []
  currentLocale.faq.categories.forEach(category => {
    category.questions.forEach(q => {
      allQuestions.push({
        category: category.name,
        question: q.q,
        answer: q.a
      })
    })
  })
  
  // Calculate pagination
  const totalPages = Math.ceil(allQuestions.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const pageQuestions = allQuestions.slice(startIndex, endIndex)
  
  // Render questions
  chatbotContent.innerHTML = pageQuestions.map((item, index) => `
    <div class="faq-item-chatbot" data-index="${index}">
      <div class="faq-item-chatbot-question">
        <i class="fas fa-comment-dots mr-2 text-brand-sage"></i>
        ${item.question}
      </div>
      <div class="faq-item-chatbot-answer">
        <i class="fas fa-arrow-right mr-2 text-brand-sage"></i>
        ${item.answer}
      </div>
    </div>
  `).join('')
  
  // Update pagination
  pageInfo.textContent = `${currentPage} / ${totalPages}`
  prevBtn.disabled = currentPage === 1
  nextBtn.disabled = currentPage === totalPages
  
  // Add click events to toggle answers
  document.querySelectorAll('.faq-item-chatbot').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active')
    })
  })
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init)
