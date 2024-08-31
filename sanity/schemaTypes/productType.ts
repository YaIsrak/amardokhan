import { PackageIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const productType = defineType({
  name: "product",
  title: "Category",
  type: "document",
  icon: PackageIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "category",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: { type: "category" },
        }),
      ],
    }),
    defineField({
      name: "stock",
      type: "boolean",
    }),
    defineField({
      name: "price",
      type: "number",
    }),
    defineField({
      name: "image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "discount",
      type: "number",
    }),
    defineField({
      name: "featured",
      type: "boolean",
    }),
    defineField({
      name: "rating",
      type: "number",
    }),
    defineField({
      name: "description",
      type: "text",
    }),
    // revies
  ],
  initialValue: {
    stock: true,
    price: 0,
    discount: 0,
    featured: false,
    rating: 0,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et neque vitae leo pharetra sodales. Quisque placerat auctor orci, non hendrerit orci tempor sed. Suspendisse purus metus, rutrum in dolor quis, rhoncus efficitur sem. Etiam iaculis enim id ante iaculis tempus. Suspendisse non mi vitae nulla pellentesque semper eu nec purus. Quisque feugiat neque a ante facilisis, ac tempus enim aliquam. Suspendisse bibendum volutpat ex vitae laoreet. Praesent metus libero, ultrices eu suscipit eget, vehicula at nunc. Praesent ante ipsum, mattis sit amet est in, porta pellentesque massa. Nullam eu magna sollicitudin, porta elit non, aliquam augue. Cras ullamcorper aliquam orci eget pellentesque.",
  },

  preview: {
    select: {
      title: "name",
      media: "image.0",
    },
    prepare({ title, media }) {
      return {
        title: title,
        media: media,
      };
    },
  },
});
