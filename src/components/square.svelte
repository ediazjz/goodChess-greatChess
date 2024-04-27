<script lang="ts">
	import { convertColumnIndexToLetter, getColor } from '$lib';

	type TSquare = {
		column: number;
		row: number;
	};
	let { column, row }: TSquare = $props();

	// const name = $derived(convertColumnIndexToLetter(column) + row);
</script>

<div
	class={`relative flex h-16 w-16 items-center justify-center
    ${getColor(column, row) === 'white' ? 'bg-white text-black' : 'bg-black text-white'}
  `}
>
	<slot />

	<aside
		class={`absolute bottom-1 right-1 z-10 text-xs font-bold leading-none opacity-40 ${row !== 1 && 'hidden'}`}
	>
		{convertColumnIndexToLetter(column)}
	</aside>
	<aside
		class={`absolute left-1 top-1 z-10 text-xs font-bold leading-none opacity-40 ${column !== 1 && 'hidden'}`}
	>
		{row}
	</aside>
</div>
