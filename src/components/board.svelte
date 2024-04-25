<script lang="ts">
	import Square from './square.svelte';

	type TBoard = {
		size?: number;
	};

	let { size = 8 }: TBoard = $props();

	const sides = new Array(size);
</script>

<div class="board flex flex-col-reverse">
	{#each sides as row, rowIndex}
		<div class="flex">
			{#each sides as column, colIndex}
				<Square column={colIndex + 1} row={rowIndex + 1} />
			{/each}
		</div>
	{/each}
</div>
