declare enum Locale {
	ENGLISH = 'en',
	SPANISH = 'es',
}

declare function toWords(num: number, locale: Locale): string

export { toWords }
