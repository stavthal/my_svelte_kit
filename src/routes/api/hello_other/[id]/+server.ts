interface RequestParams {
	id: string;
}

export async function GET({ params }: { params: RequestParams }) {
	return new Response(`Hello, ${params.id}!`, { status: 200 });
}
