import enConverter from './locales/en/en'
import esConverter from './locales/es/es'
import { Locale, type LocaleConverter } from './types'

const converters: Record<Locale, LocaleConverter> = {
	[Locale.ENGLISH]: enConverter,
	[Locale.SPANISH]: esConverter,
}

export function toWords(num: number, locale: Locale): string {
	return converters[locale].convert(num)
}

export { Locale } from './types'
