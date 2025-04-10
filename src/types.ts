export enum Locale {
	ENGLISH = 'en',
	SPANISH = 'es',
}

export interface LocaleConverter {
	convert(number: number): string
}
