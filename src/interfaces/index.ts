export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageUrl: string;
  };
}

export interface Iinputs {
  id: string;
  name: "title" | "description" | "imageUrl" | "price";
  type: string;
  label: string;
}
export interface Icategories {
  id: string;
  name: string;
  imageUrl: string;
}
