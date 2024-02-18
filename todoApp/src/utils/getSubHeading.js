export function getSubHeading(e) {
	if (e == 0) {
		return 'Brak zadań na liście'
	} else if (e == 1) {
		return `${e} zadanie`
	} else if (e < 5) {
		return `${e} zadania`
	} else return `${e} zadań`
}
