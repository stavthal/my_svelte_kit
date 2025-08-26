import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const response = await fetch(`/api/hello_other/${params.id}`);
	const data = await response.json();
	return {
		id: params.id,
		message: data.message
	};
};
