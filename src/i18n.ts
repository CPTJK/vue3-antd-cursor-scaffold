import { createI18n } from 'vue-i18n'
import type { App } from 'vue'
import type { I18n, Locale, I18nOptions, Composer } from 'vue-i18n'
// 导入 Vant 的 Locale
// import { Locale as VantLocale } from 'vant'

// 导入 Vant 的语言包
// import enUS from 'vant/es/locale/lang/en-US'
// import zhCN from 'vant/es/locale/lang/zh-CN'
// import esES from 'vant/es/locale/lang/es-ES'
// import ptBR from 'vant/es/locale/lang/pt-BR'

// 扩展 vue-i18n 的类型
declare module 'vue-i18n' {
  // 为 Composer 添加 tcf 和 tc 方法
  export interface Composer {
    tcf: (key: string, options?: Record<string, unknown>) => string
    tc: (key: string, options?: Record<string, unknown>) => string
  }

  // 为 VueI18n.global 添加 tcf 和 tc 方法
  export interface VueI18n {
    global: {
      tcf: (key: string, options?: Record<string, unknown>) => string
      tc: (key: string, options?: Record<string, unknown>) => string
      // 允许其他已有属性
      [key: string]: unknown
    }
  }
}

export const SUPPORT_LOCALES = ['en', 'es', 'pt']

// 默认语言
export const DEFAULT_LOCALE = 'en'

// Vant UI 语言映射
// const VANT_LOCALE_MAP: Record<string, Record<string, unknown>> = {
//   'zh-CN': zhCN,
//   en: enUS,
//   es: esES,
//   pt: ptBR,
// }

/**
 * 首字母大写
 * @param text 文本
 * @returns 首字母大写的文本
 */
export function capitalizeFirstLetter(text: string): string {
  if (!text) return ''
  return text.charAt(0).toUpperCase() + text.slice(1)
}

/**
 * 所有单词首字母大写
 * @param text 文本
 * @returns 所有单词首字母大写的文本
 */
export function capitalizeWords(text: string): string {
  if (!text) return ''
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

// 创建i18n实例
export function createI18nInstance() {
  const i18nInstance = createI18n({
    legacy: false,
    locale: DEFAULT_LOCALE,
    fallbackLocale: DEFAULT_LOCALE,
    messages: {},
    missing: (locale, key) => {
      console.warn(`[i18n] 缺少翻译: ${key} for locale: ${locale}`)
      return key
    },
  } as I18nOptions)

  // 扩展 Composer 添加 tcf 方法
  const composer = i18nInstance.global as unknown as Composer

  // 添加 tcf 方法 - 首字母大写
  composer.tcf = (key: string, options?: Record<string, unknown>) => {
    const text = options ? composer.t(key, options) : composer.t(key)
    return capitalizeFirstLetter(text as string)
  }

  // 添加 tc 方法 - 所有单词首字母大写
  composer.tc = (key: string, options?: Record<string, unknown>) => {
    const text = options ? composer.t(key, options) : composer.t(key)
    return capitalizeWords(text as string)
  }

  return i18nInstance
}

// 全局i18n实例
export const i18n = createI18nInstance()

/**
 * 设置Vant UI的语言
 * @param locale 语言
 */
// export function setVantLocale(locale: Locale): void {
//   const vantLocale = VANT_LOCALE_MAP[locale]
//   if (vantLocale) {
//     VantLocale.use(locale, vantLocale)
//   } else {
//     console.warn(`[i18n] Vant UI 不支持语言: ${locale}，将使用默认语言`)
//   }
// }

/**
 * 设置i18n语言
 * @param instance i18n实例
 * @param locale 语言
 */
export function setI18nLanguage(instance: I18n, locale: Locale): void {
  if (instance.global.availableLocales.includes(locale)) {
    // @ts-expect-error - locale在Composition API模式下是对象
    instance.global.locale.value = locale
    document.querySelector('html')?.setAttribute('lang', locale)
    localStorage.setItem('locale', locale)

    // 同步设置 Vant UI 的语言
    // setVantLocale(locale)
  }
}

/**
 * 加载语言文件
 * @param instance i18n实例
 * @param locale 语言
 */
export async function loadLocaleMessages(instance: I18n, locale: Locale): Promise<void> {
  // 检查是否已加载该语言
  const messages = instance.global.getLocaleMessage(locale)
  if (Object.keys(messages).length === 0) {
    // 动态导入对应的语言文件
    const messages = await import(`./locales/${locale}.json`)
    // 设置语言文件
    instance.global.setLocaleMessage(locale, messages.default || messages)
  }
}

/**
 * 切换语言
 * @param instance i18n实例
 * @param locale 目标语言
 */
export async function switchLanguage(instance: I18n, locale: Locale): Promise<void> {
  // 如果语言相同，不做任何操作
  // @ts-expect-error - locale在Composition API模式下是对象
  if (instance.global.locale.value === locale) return

  // 检查语言是否支持
  if (!SUPPORT_LOCALES.includes(locale)) {
    console.warn(`[i18n] 不支持的语言: ${locale}`)
    return
  }

  // 加载语言文件
  await loadLocaleMessages(instance, locale)

  // 设置语言
  setI18nLanguage(instance, locale)
}

/**
 * 初始化i18n
 * @param app Vue应用实例
 * @param options i18n选项
 */
export async function setupI18n(app: App): Promise<I18n> {
  // 获取浏览器保存的语言设置或使用默认语言
  const savedLocale = (localStorage.getItem('locale') as Locale) || DEFAULT_LOCALE
  const initialLocale = SUPPORT_LOCALES.includes(savedLocale) ? savedLocale : DEFAULT_LOCALE

  // 加载初始语言
  await loadLocaleMessages(i18n, initialLocale)

  // 设置语言
  setI18nLanguage(i18n, initialLocale)

  // 注册i18n实例
  app.use(i18n)

  return i18n
}
