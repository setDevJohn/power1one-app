
interface ProductImage {
  https: string;
}

export interface Product {
  price: string;
  id: string;
  description: string;
  name: string;
  ProductImage: ProductImage[];
}
