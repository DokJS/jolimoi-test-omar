const form = document.getElementById('form') as HTMLFormElement
const input = document.getElementById('input') as HTMLInputElement
const button = document.getElementById('button') as HTMLButtonElement
const result = document.getElementById('result') as HTMLParagraphElement
const API_URL = 'http://localhost:8000/convert/'

form.addEventListener('submit', async (event: SubmitEvent) => {
	event.preventDefault()
	if (input.value !== '') {
		if (containsOnlyNumber(input.value)) {
			if (valueIsInRange(input.value)) {
				result.innerText = 'Loading...'
				const url = getUrl(API_URL, input.value)
				const response = await fetch(url)
				const data = await response.json()

				setTimeout(() => {
					result.innerText = `Valeur en chiffre romain: ${data.romanValue}`
				}, 2000)
			} else {
				alert('Value must be between 1 and 100')
			}
		} else {
			alert('Only numbers integer are allowed')
		}
	} else {
		alert('Please enter a value')
	}
})

function getUrl(baseUrl: string, value: string) {
	return `${API_URL}${value}`
}
function valueIsInRange(value: string) {
	const parsedValue = parseFloat(value)
	if (
		Number.isInteger(parsedValue) &&
		parsedValue > 0 &&
		parsedValue < 101
	) {
		return true
	}
	return false
}
function containsOnlyNumber(str: string): boolean {
	return /^\d+$/.test(str)
}
