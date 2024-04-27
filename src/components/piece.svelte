<script lang="ts">
	import { Bishop, King, Knight, Pawn, Queen, Rook } from './pieces';

	type TPiece = {
		name: 'bishop' | 'king' | 'knight' | 'pawn' | 'queen' | 'rook';
		color: 'white' | 'black';
	};

	let { name, color }: TPiece = $props();
	let selected = $state(Pawn);

	// TODO: Refactor once proper documentation for the state rune is released
	switch (name) {
		case 'bishop':
			selected = Bishop;
			break;
		case 'king':
			selected = King;
			break;
		case 'knight':
			selected = Knight;
			break;
		case 'queen':
			selected = Queen;
			break;
		case 'rook':
			selected = Rook;
			break;
		default:
			selected = Pawn;
	}
</script>

<svelte:component this={selected} {color} />
