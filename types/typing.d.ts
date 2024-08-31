interface Base {
  _id: string;
  _type: string;
  _rev: string;
  _createdAt: string;
  _updatedAt: string;
}

export interface Category extends Base {
  name: string;
}

export interface Product extends Base {
  name: string;
  category: Category[];
  stock: boolean;
  price: number;
  images: string[];
  discount: number;
  featured: boolean;
  rating: number;
  description: string;
}
