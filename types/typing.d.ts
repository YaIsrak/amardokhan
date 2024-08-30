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
