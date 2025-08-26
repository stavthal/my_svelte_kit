interface RequestParams {
	id: string;
}

export async function GET({ params }: { params: RequestParams }) {
	await new Promise((resolve, reject) => setTimeout(resolve, 3000));
	return new Response(JSON.stringify({ message: `Hello, ${params.id}!` }), { status: 200 });
}
