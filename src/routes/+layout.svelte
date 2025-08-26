<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { beforeNavigate, afterNavigate, goto } from '$app/navigation';
	import { writable } from 'svelte/store';
	import Loading from '$lib/components/loading.svelte';

	export const loading = writable(false);

	beforeNavigate(() => loading.set(true));
	afterNavigate(() => loading.set(false));

	let { children } = $props();

	const onBack = () => {
		if (window.history.length > 1) {
			history.back();
		} else {
			goto('/');
		}
	};

	const onClick = () => {
		goto('/');
	};
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $loading}
	<Loading />
{:else}
	<div>
		<div class="flex gap-2 px-4 py-2">
			<button class="rounded-2xl bg-red-400 px-2 text-white" onclick={onBack}> Go Back </button>
			<button class="rounded-2xl bg-blue-400 px-2 text-white" onclick={onClick}>
				Go to Home
			</button>
		</div>

		{@render children?.()}
	</div>
{/if}
