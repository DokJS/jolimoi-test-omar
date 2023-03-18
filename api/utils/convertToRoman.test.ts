import { convertToRoman } from './convertToRoman'
describe('convertToRoman', () => {
	it('should convert a number to a roman number', () => {
		expect(convertToRoman(2)).toBe('II')
		expect(convertToRoman(3)).toBe('III')
		expect(convertToRoman(4)).toBe('IV')
		expect(convertToRoman(45)).toBe('XLV')
		expect(convertToRoman(68)).toBe('LXVIII')
	})
})
