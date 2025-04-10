// src/constants.ts
var ZERO = 0
var TEN = 10
var TWENTY = 20
var THIRTY = 30
var HUNDRED = 100
var THOUSAND = 1e3
var MILLION = 1e6
var BILLION = 1e9
var TRILLION = 1e12

// src/locales/en/constants.ts
var units = [
	'zero',
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
]
var teens = [
	'ten',
	'eleven',
	'twelve',
	'thirteen',
	'fourteen',
	'fifteen',
	'sixteen',
	'seventeen',
	'eighteen',
	'nineteen',
]
var tens = [
	'',
	'',
	'twenty',
	'thirty',
	'forty',
	'fifty',
	'sixty',
	'seventy',
	'eighty',
	'ninety',
]

// src/locales/en/en.ts
function convertBelowThousand(number) {
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
function convert(number) {
	if (number < ZERO) {
		return `minus ${convert(Math.abs(number))}`
	}
	if (number < ZERO || number >= TRILLION) {
		return 'Number out of supported range'
	}
	if (number < THOUSAND) return convertBelowThousand(number)
	if (number < MILLION) {
		const thousands = Math.floor(number / THOUSAND)
		const rest2 = number % THOUSAND
		const thousandsText =
			thousands === 1
				? 'one thousand'
				: `${convertBelowThousand(thousands)} thousand`
		return rest2 === 0
			? thousandsText
			: `${thousandsText} ${convertBelowThousand(rest2)}`
	}
	if (number < BILLION) {
		const millions = Math.floor(number / MILLION)
		const rest2 = number % MILLION
		const millionsText = `${convert(millions)} million`
		return rest2 === 0 ? millionsText : `${millionsText} ${convert(rest2)}`
	}
	const billions = Math.floor(number / BILLION)
	const rest = number % BILLION
	const billionsText = `${convert(billions)} billion`
	return rest === 0 ? billionsText : `${billionsText} ${convert(rest)}`
}
var enConverter = {
	convert,
}
var en_default = enConverter

// src/locales/es/constants.ts
var units2 = [
	'cero',
	'uno',
	'dos',
	'tres',
	'cuatro',
	'cinco',
	'seis',
	'siete',
	'ocho',
	'nueve',
]
var teens2 = [
	'diez',
	'once',
	'doce',
	'trece',
	'catorce',
	'quince',
	'diecis\xE9is',
	'diecisiete',
	'dieciocho',
	'diecinueve',
]
var tens2 = [
	'',
	'',
	'veinte',
	'treinta',
	'cuarenta',
	'cincuenta',
	'sesenta',
	'setenta',
	'ochenta',
	'noventa',
]
var twentiesMap = {
	21: 'veintiuno',
	22: 'veintid\xF3s',
	23: 'veintitr\xE9s',
	24: 'veinticuatro',
	25: 'veinticinco',
	26: 'veintis\xE9is',
	27: 'veintisiete',
	28: 'veintiocho',
	29: 'veintinueve',
}
var hundredsMap = {
	1: 'ciento',
	2: 'doscientos',
	3: 'trescientos',
	4: 'cuatrocientos',
	5: 'quinientos',
	6: 'seiscientos',
	7: 'setecientos',
	8: 'ochocientos',
	9: 'novecientos',
}

// src/locales/es/es.ts
function convertBelowThousand2(number) {
	if (number < ZERO || number >= THOUSAND) {
		return 'N\xFAmero fuera de rango soportado'
	}
	if (number < TEN) return units2[number]
	if (number < TWENTY) return teens2[number - TEN]
	if (number < THIRTY) {
		return number === TWENTY ? 'veinte' : twentiesMap[number]
	}
	if (number < HUNDRED) {
		const ten = Math.floor(number / TEN)
		const unit = number % 10
		return unit === 0 ? tens2[ten] : `${tens2[ten]} y ${units2[unit]}`
	}
	if (number === HUNDRED) return 'cien'
	const hundreds = Math.floor(number / HUNDRED)
	const rest = number % HUNDRED
	const hundredText = hundredsMap[hundreds]
	return rest === ZERO ? hundredText : `${hundredText} ${convert2(rest)}`
}
function convert2(number) {
	if (number < ZERO) {
		return `menos ${convert2(Math.abs(number))}`
	}
	if (number < ZERO || number >= TRILLION) {
		return 'N\xFAmero fuera de rango soportado'
	}
	if (number < THOUSAND) return convertBelowThousand2(number)
	if (number < MILLION) {
		const thousands = Math.floor(number / THOUSAND)
		const rest2 = number % THOUSAND
		const thousandsText =
			thousands === 1 ? 'mil' : `${convertBelowThousand2(thousands)} mil`
		return rest2 === ZERO
			? thousandsText
			: `${thousandsText} ${convertBelowThousand2(rest2)}`
	}
	if (number < TRILLION) {
		const millions = Math.floor(number / MILLION)
		const rest2 = number % MILLION
		const millionsText =
			millions === 1 ? 'un mill\xF3n' : `${convert2(millions)} millones`
		return rest2 === 0 ? millionsText : `${millionsText} ${convert2(rest2)}`
	}
	const billions = Math.floor(number / TRILLION)
	const rest = number % TRILLION
	const billionsText =
		billions === 1
			? 'mil millones'
			: `${convertBelowThousand2(billions)} mil millones`
	return rest === 0 ? billionsText : `${billionsText} ${convert2(rest)}`
}
var esConverter = {
	convert: convert2,
}
var es_default = esConverter

// src/index.ts
var converters = {
	['en' /* ENGLISH */]: en_default,
	['es' /* SPANISH */]: es_default,
}
function toWords(num, locale) {
	return converters[locale].convert(num)
}
export { toWords }
