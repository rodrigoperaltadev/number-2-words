import {
	BILLION,
	HUNDRED,
	MILLION,
	TEN,
	THOUSAND,
	TRILLION,
	TWENTY,
	ZERO,
} from '../../constants'
import type { LocaleConverter } from '../../types'
import { teens, tens, units } from './constants'

function convertBelowThousand(number: number): string {
	if (number < ZERO || number >= THOUSAND) {
		return 'Number out of supported range'
	}

	if (number < TEN) return units[number]
	if (number < TWENTY) return teens[number - TEN]
	if (number < HUNDRED) {
		const ten = Math.floor(number / TEN)
		const unit = number % TEN
		return unit === 0 ? tens[ten] : `${tens[ten]}-${units[unit]}`
	}

	const hundred = Math.floor(number / HUNDRED)
	const rest = number % HUNDRED

	if (rest === 0) return `${units[hundred]} hundred`

	return `${units[hundred]} hundred ${convertBelowThousand(rest)}`
}

function getPlural(number: number, word: string): string {
	if (number === 1) return word
	return `${word}s`
}

function convert(number: number): string {
	if (number < ZERO) {
		return `minus ${convert(Math.abs(number))}`
	}
	if (number < ZERO || number >= TRILLION) {
		return 'Number out of supported range'
	}

	if (number < THOUSAND) return convertBelowThousand(number)

	if (number < MILLION) {
		const thousands = Math.floor(number / THOUSAND)
		const rest = number % THOUSAND

		const thousandsText =
			thousands === 1
				? 'one thousand'
				: `${convertBelowThousand(thousands)} thousand`

		return rest === 0
			? thousandsText
			: `${thousandsText} ${convertBelowThousand(rest)}`
	}

	if (number < BILLION) {
		const millions = Math.floor(number / MILLION)
		const rest = number % MILLION

		const millionsText = `${convert(millions)} million`
		return rest === 0 ? millionsText : `${millionsText} ${convert(rest)}`
	}

	// Mover BILLION antes que MILLION para evitar conflictos
	const billions = Math.floor(number / BILLION)
	const rest = number % BILLION

	const billionsText = `${convert(billions)} billion`
	return rest === 0 ? billionsText : `${billionsText} ${convert(rest)}`
}

const enConverter: LocaleConverter = {
	convert,
}

export default enConverter
