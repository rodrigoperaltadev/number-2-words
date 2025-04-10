import {
	HUNDRED,
	MILLION,
	TEN,
	THIRTY,
	THOUSAND,
	TRILLION,
	TWENTY,
	ZERO,
} from '../../constants'
import type { LocaleConverter } from '../../types'
import { hundredsMap, teens, tens, twentiesMap, units } from './constants'

function convertBelowThousand(number: number): string {
	if (number < ZERO || number >= THOUSAND) {
		return 'Número fuera de rango soportado'
	}

	if (number < TEN) return units[number]
	if (number < TWENTY) return teens[number - TEN]
	if (number < THIRTY) {
		return number === TWENTY ? 'veinte' : twentiesMap[number]
	}

	if (number < HUNDRED) {
		const ten = Math.floor(number / TEN)
		const unit = number % 10
		return unit === 0 ? tens[ten] : `${tens[ten]} y ${units[unit]}`
	}

	if (number === HUNDRED) return 'cien'

	const hundreds = Math.floor(number / HUNDRED)
	const rest = number % HUNDRED

	const hundredText = hundredsMap[hundreds]
	return rest === ZERO ? hundredText : `${hundredText} ${convert(rest)}`
}

function convert(number: number): string {
	if (number < ZERO) {
		return `menos ${convert(Math.abs(number))}`
	}

	if (number < ZERO || number >= TRILLION) {
		return 'Número fuera de rango soportado'
	}

	if (number < THOUSAND) return convertBelowThousand(number)

	if (number < MILLION) {
		const thousands = Math.floor(number / THOUSAND)
		const rest = number % THOUSAND
		const thousandsText =
			thousands === 1 ? 'mil' : `${convertBelowThousand(thousands)} mil`
		return rest === ZERO
			? thousandsText
			: `${thousandsText} ${convertBelowThousand(rest)}`
	}

	if (number < TRILLION) {
		const millions = Math.floor(number / MILLION)
		const rest = number % MILLION

		const millionsText =
			millions === 1 ? 'un millón' : `${convert(millions)} millones`

		return rest === 0 ? millionsText : `${millionsText} ${convert(rest)}`
	}

	const billions = Math.floor(number / TRILLION)
	const rest = number % TRILLION

	const billionsText =
		billions === 1
			? 'mil millones'
			: `${convertBelowThousand(billions)} mil millones`

	return rest === 0 ? billionsText : `${billionsText} ${convert(rest)}`
}

const esConverter: LocaleConverter = {
	convert,
}
export default esConverter
