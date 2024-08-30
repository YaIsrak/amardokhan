import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
	S.list()
		.title('Blog')
		.items([
			S.documentTypeListItem('category').title('Categories'),
			S.documentTypeListItem('product').title('Products'),
			S.divider(),
			...S.documentTypeListItems().filter(
				(item) =>
					item.getId() && !['category', 'product'].includes(item.getId()!),
			),
		]);
