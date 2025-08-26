<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { beforeNavigate, afterNavigate } from '$app/navigation';
	import { writable } from 'svelte/store';
	import Loading from '$lib/components/loading.svelte';

	export const loading = writable(false);

	beforeNavigate(() => loading.set(true));
	afterNavigate(() => loading.set(false));

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $loading}
	<Loading />
{:else}
	{@render children?.()}
{/if}
