<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<h1 class="text-3xl text-green-500">{data.message}</h1>
