<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	onMount(() => {
		console.log('Component mounted');
	});

	let name = $state('');

	const onSubmit = () => {
		alert(`Your name is ${name}`);
	};

	const onNav = () => {
		goto('/hello');
	};
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
<a href="/demo/paraglide">Go to Paraglide Demo</a>

<div class="flex flex-col gap-2 p-4">
	<h1 class="text-3xl text-green-500">
		Your name is: <span class="font-bold text-blue-400">{name}</span>
	</h1>
	<input bind:value={name} placeholder="Enter your name" />
	<button onclick={onSubmit}>Submit</button>

	<button class="rounded-2xl bg-red-500 text-white" onclick={onNav}
		>Navigate to hello world page</button
	>
</div>
