<script lang="ts">
	import LoadingComponent from '$lib/components/loading.svelte';

	const fetchHelloWorld = async () => {
		const response = await fetch('/api/hello');
		const data = await response.text();
		return data;
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
