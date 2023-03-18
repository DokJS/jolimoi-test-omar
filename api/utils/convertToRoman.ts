import { numberRomanList } from '../data/RomanValuesList'
export function convertToRoman(number: number): string {
	let romanNumber = ''
	numberRomanList.forEach(romanNumberValue => {
		while (number >= romanNumberValue.numberValue) {
			romanNumber += romanNumberValue.romanValue
			number -= romanNumberValue.numberValue
		}
	})
	return romanNumber
}
