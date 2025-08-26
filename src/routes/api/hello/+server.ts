export async function GET() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return new Response('Hello, world of SvelteKit!', { status: 200 });
}
