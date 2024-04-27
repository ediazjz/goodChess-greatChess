<script lang="ts">
	import { convertColumnIndexToLetter, getColor } from '$lib';

	type TSquare = {
		column: number;
		row: number;
	};
	let { column, row }: TSquare = $props();

	const name = $derived(convertColumnIndexToLetter(column) + row);
</script>

<div
	class={`flex h-16 w-16 items-center justify-center
    ${getColor(column, row) === 'white' ? 'bg-white text-black' : 'bg-black text-white'}
  `}
>
	<slot />
</div>
