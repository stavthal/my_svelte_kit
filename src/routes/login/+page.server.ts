import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	// default: async (event) => {
	// 	console.log(event);
	// },

	login: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);

		const password = formData.get('password');

		if (typeof password !== 'string' || password.length < 6) {
			return fail(400, {
				success: false,
				message: 'Password must be at least 6 characters long',
				email: formData.get('email')
			});
		}

		return { success: true };
	}
} satisfies Actions;
