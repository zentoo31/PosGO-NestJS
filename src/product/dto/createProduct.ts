
export class CreateProductDto {
    name: string;
    description: string;
    price: number;
    category?: string;
    stock: number;
    imageUrl: string;
}
