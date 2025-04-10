import { describe, expect, it } from 'vitest'
import { toWords } from '../src'
import { Locale } from '../src/types'

describe('English - toWords', () => {
	it('should convert units', () => {
		expect(toWords(7, Locale.ENGLISH)).toBe('seven')
	})

	it('should convert teens', () => {
		expect(toWords(14, Locale.ENGLISH)).toBe('fourteen')
	})

	it('should convert tens', () => {
		expect(toWords(60, Locale.ENGLISH)).toBe('sixty')
	})

	it('should convert compound numbers', () => {
		expect(toWords(42, Locale.ENGLISH)).toBe('forty-two')
	})

	it('should convert hundreds', () => {
		expect(toWords(500, Locale.ENGLISH)).toBe('five hundred')
	})

	it('should convert compound hundreds', () => {
		expect(toWords(342, Locale.ENGLISH)).toBe('three hundred forty-two')
	})
})

describe('English - big numbers', () => {
	it('should convert 1000', () => {
		expect(toWords(1000, Locale.ENGLISH)).toBe('one thousand')
	})

	it('should convert 1101', () => {
		expect(toWords(1101, Locale.ENGLISH)).toBe('one thousand one hundred one')
	})

	it('should convert 1 million', () => {
		expect(toWords(1_000_000, Locale.ENGLISH)).toBe('one million')
	})

	it('should convert 2.5 million', () => {
		expect(toWords(2_500_000, Locale.ENGLISH)).toBe(
			'two million five hundred thousand',
		)
	})

	it('should convert 999,999,999,999', () => {
		expect(toWords(999_999_999_999, Locale.ENGLISH)).toBe(
			'nine hundred ninety-nine billion nine hundred ninety-nine million nine hundred ninety-nine thousand nine hundred ninety-nine',
		)
	})

	it('should convert negative number', () => {
		expect(toWords(-123, Locale.ENGLISH)).toBe('minus one hundred twenty-three')
	})
})
