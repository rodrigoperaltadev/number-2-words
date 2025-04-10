import { describe, expect, it } from 'vitest'
import { toWords } from '../src'
import { Locale } from '../src/types'

describe('Español - toWords', () => {
	it('debe convertir unidades', () => {
		expect(toWords(2, Locale.SPANISH)).toBe('dos')
	})

	it('debe convertir números entre 10 y 19', () => {
		expect(toWords(13, Locale.SPANISH)).toBe('trece')
	})

	it('debe convertir "veintiuno"', () => {
		expect(toWords(21, Locale.SPANISH)).toBe('veintiuno')
	})

	it('debe convertir "treinta y cuatro"', () => {
		expect(toWords(34, Locale.SPANISH)).toBe('treinta y cuatro')
	})

	it('debe convertir "noventa y nueve"', () => {
		expect(toWords(99, Locale.SPANISH)).toBe('noventa y nueve')
	})

	it('debe convertir "cien"', () => {
		expect(toWords(100, Locale.SPANISH)).toBe('cien')
	})

	it('debe convertir "ciento uno"', () => {
		expect(toWords(101, Locale.SPANISH)).toBe('ciento uno')
	})

	it('debe convertir "doscientos cuarenta y cinco"', () => {
		expect(toWords(245, Locale.SPANISH)).toBe('doscientos cuarenta y cinco')
	})

	it('debe convertir "quinientos treinta y dos"', () => {
		expect(toWords(532, Locale.SPANISH)).toBe('quinientos treinta y dos')
	})

	it('debe convertir "novecientos noventa y nueve"', () => {
		expect(toWords(999, Locale.SPANISH)).toBe('novecientos noventa y nueve')
	})
})

describe('Español - miles y millones', () => {
	it('debe convertir "mil"', () => {
		expect(toWords(1000, Locale.SPANISH)).toBe('mil')
	})

	it('debe convertir "dos mil"', () => {
		expect(toWords(2000, Locale.SPANISH)).toBe('dos mil')
	})

	it('debe convertir "mil ciento uno"', () => {
		expect(toWords(1101, Locale.SPANISH)).toBe('mil ciento uno')
	})

	it('debe convertir "un millón"', () => {
		expect(toWords(1_000_000, Locale.SPANISH)).toBe('un millón')
	})

	it('debe convertir "dos millones"', () => {
		expect(toWords(2_000_000, Locale.SPANISH)).toBe('dos millones')
	})

	it('debe convertir "un millón veinte mil trescientos"', () => {
		expect(toWords(1_020_300, Locale.SPANISH)).toBe(
			'un millón veinte mil trescientos',
		)
	})

	it('debe convertir "novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve"', () => {
		expect(toWords(999_999_999, Locale.SPANISH)).toBe(
			'novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve',
		)
	})
})

describe('Español - miles de millones', () => {
	it('debe convertir "mil millones"', () => {
		expect(toWords(1_000_000_000, Locale.SPANISH)).toBe('mil millones')
	})

	it('debe convertir "dos mil millones"', () => {
		expect(toWords(2_000_000_000, Locale.SPANISH)).toBe('dos mil millones')
	})

	it('debe convertir "mil millones un"', () => {
		expect(toWords(1_000_000_001, Locale.SPANISH)).toBe('mil millones uno')
	})

	it('debe convertir "quinientos treinta y dos mil millones cien mil"', () => {
		expect(toWords(532_000_100_000, Locale.SPANISH)).toBe(
			'quinientos treinta y dos mil millones cien mil',
		)
	})

	it('debe convertir el máximo permitido', () => {
		expect(toWords(999_999_999_999, Locale.SPANISH)).toBe(
			'novecientos noventa y nueve mil novecientos noventa y nueve millones novecientos noventa y nueve mil novecientos noventa y nueve',
		)
	})

	it('debe convertir número negativo', () => {
		expect(toWords(-123, Locale.SPANISH)).toBe('menos ciento veintitrés')
	})
})
