import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    async createProduct(product: CreateProductDto) {
        try {
            return this.productService.createProduct(product);
        } catch (error) {
            throw new Error(`Error creating product: ${error.message}`);
        }
    }

    async getProducts() {
        try {
            return this.productService.getProducts();
        } catch (error) {
            throw new Error(`Error fetching products: ${error.message}`);
        }
    }
}
