<script lang="ts">
	import Piece from './piece.svelte';
	import Square from './square.svelte';
	import { convertColumnIndexToLetter, standard as standardPosition } from '$lib';

	type TBoard = {
		size?: number;
	};
	let { size = 8 }: TBoard = $props();

	const sides = new Array(size);

	function getSquarePiece(column: number, row: number) {
		const columnLetter = convertColumnIndexToLetter(column + 1);
		const position = columnLetter + (row + 1);

		return standardPosition[position];
	}
</script>

<div class="board flex flex-col-reverse">
	{#each sides as row, rowIndex}
		<div class="flex">
			{#each sides as column, colIndex}
				<Square column={colIndex + 1} row={rowIndex + 1}>
					{#if getSquarePiece(colIndex, rowIndex)}
						<Piece
							name={getSquarePiece(colIndex, rowIndex).name}
							color={getSquarePiece(colIndex, rowIndex).color}
						/>
					{/if}
				</Square>
			{/each}
		</div>
	{/each}
</div>
