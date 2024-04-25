<script lang="ts">
	type TSquare = {
		// side: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
		column: number;
		row: number;
	};

	let { column, row }: TSquare = $props();

	export function getColor(column: number, row: number) {
		let color: 'white' | 'black';

		if (column % 2 === row % 2) color = 'black';
		else color = 'white';

		return color;
	}

	export function convertColumnIndexToLetter(index: number) {
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

	const name = $derived(convertColumnIndexToLetter(column) + row);
</script>

<div
	class={`flex h-16 w-16 items-center justify-center
    ${getColor(column, row) === 'white' ? 'bg-white text-black' : 'bg-black text-white'}
  `}
></div>
