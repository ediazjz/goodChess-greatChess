export function getColor(column: number, row: number): string {
	let color: 'white' | 'black';

	if (column % 2 === row % 2) color = 'black';
	else color = 'white';

	return color;
}

export function convertColumnIndexToLetter(index: number): string {
	let letter: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h';

	switch (index) {
		case 1:
			letter = 'a';
			break;
		case 2:
			letter = 'b';
			break;
		case 3:
			letter = 'c';
			break;
		case 4:
			letter = 'd';
			break;
		case 5:
			letter = 'e';
			break;
		case 6:
			letter = 'f';
			break;
		case 7:
			letter = 'g';
			break;
		case 8:
			letter = 'h';
			break;
		default:
			return (letter = 'a');
	}

	return letter;
}
