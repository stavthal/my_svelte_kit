<script lang="ts">
	import { goto } from '$app/navigation';
	import LoadingComponent from '$lib/components/loading.svelte';

	const fetchHelloWorld = async () => {
		const response = await fetch('/api/hello');
		const data = await response.text();
		return data;
	};

	const onNav = (id: string) => {
		goto('/hello/other/' + id);
	};
</script>

<h1 class="text-3xl text-green-500">Hello World</h1>

{#await fetchHelloWorld()}
	<LoadingComponent message="Fetching hello world..." />
{:then data}
	<p class="text-blue-500">{data}</p>
{:catch error}
	<p class="text-red-500">Error: {error.message}</p>
{/await}

<button
	class="rounded-xl bg-blue-400 p-2 text-white focus:bg-blue-500"
	onclick={() => onNav('some-id')}>Navigate</button
>
