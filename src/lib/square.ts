export function getColor(column: number, row: number): string {
	let color: 'white' | 'black';

	if (column % 2 === row % 2) color = 'black';
	else color = 'white';

	return color;
}

export function convertColumnIndexToLetter(index: number): string {
	let letter: 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n';

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
		case 9:
			letter = 'i';
			break;
		case 10:
			letter = 'j';
			break;
		case 11:
			letter = 'k';
			break;
		case 12:
			letter = 'l';
			break;
		case 13:
			letter = 'm';
			break;
		case 14:
			letter = 'n';
			break;
		default:
			return (letter = 'a');
	}

	return letter;
}

export function convertLetterToColumn(letter: string): number {
	let column: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14;

	switch (letter) {
		case 'a':
			column = 1;
			break;
		case 'b':
			column = 2;
			break;
		case 'c':
			column = 3;
			break;
		case 'd':
			column = 4;
			break;
		case 'e':
			column = 5;
			break;
		case 'f':
			column = 6;
			break;
		case 'g':
			column = 7;
			break;
		case 'h':
			column = 8;
			break;
		case 'i':
			column = 9;
			break;
		case 'j':
			column = 10;
			break;
		case 'k':
			column = 11;
			break;
		case 'l':
			column = 12;
			break;
		case 'm':
			column = 13;
			break;
		case 'n':
			column = 14;
			break;
		default:
			return (column = 1);
	}

	return column;
}
