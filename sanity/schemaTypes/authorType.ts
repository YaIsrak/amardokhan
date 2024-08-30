import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const userType = defineType({
	name: 'user',
	title: 'User',
	type: 'document',
	icon: UserIcon,
	fields: [
		defineField({
			name: 'name',
			type: 'string',
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				source: 'name',
			},
		}),
		defineField({
			name: 'email',
			type: 'string',
		}),
		defineField({
			name: 'imageUrl',
			type: 'string',
		}),
	],
	preview: {
		select: {
			title: 'name',
		},
	},
});
