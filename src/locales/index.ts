// 다국어 JSON 파일 import
import ko from './ko.json'
import en from './en.json'
import ja from './ja.json'
import de from './de.json'
import zhCN from './zh-CN.json'
import es from './es.json'
import fr from './fr.json'
import pt from './pt.json'
import it from './it.json'
import ptBR from './pt-BR.json'
import enGB from './en-GB.json'

export const locales = {
  ko,
  en,
  ja,
  de,
  'zh-CN': zhCN,
  es,
  fr,
  pt,
  it,
  'pt-BR': ptBR,
  'en-GB': enGB
}

export const availableLanguages = [
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'en-GB', name: 'English (UK)', flag: '🇬🇧' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh-CN', name: '简体中文', flag: '🇨🇳' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'pt-BR', name: 'Português (Brasil)', flag: '🇧🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' }
]

export function getLocale(lang: string) {
  return locales[lang as keyof typeof locales] || locales.en
}

export type LocaleData = typeof ko
