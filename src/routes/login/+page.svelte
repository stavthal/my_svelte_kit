<script lang="ts">
	import type { PageData, ActionData } from './$types';

	let { data, form }: { data: PageData; form: ActionData } = $props();
</script>

<form method="POST" action="?/login">
	{#if form?.success === false && form.message}<p class="error">{form?.message}</p>{/if}
	<div class="flex w-96 flex-col gap-2 p-4">
		<label for="email"> Email: </label>
		<input id="email" type="email" name="email" value={form?.email ?? ''} required />
		<label for="password">Password:</label>
		<input id="password" type="password" name="password" required />
		<button class="rounded-2xl bg-blue-500 py-3 text-2xl text-white">Log in</button>
	</div>
</form>
