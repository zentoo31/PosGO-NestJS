import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/createProduct';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Get()
    async getProducts() {
        try {
            return await this.productService.getProducts();
        } catch (error) {
           throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: `${error.message}`,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Get('search/:name')
    async getProductsByName(@Param('name') name: string) {
        try {
            return await this.productService.getProductsByName(name);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `${error.message}`,
            }, HttpStatus.NOT_FOUND);
        }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createProduct(@Body() product: CreateProductDto) {
        try {
            return await this.productService.createProduct(product);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `${error.message}`,
            }, HttpStatus.NOT_FOUND);
        }
    }

    @Get(':id')
    async getProductById(@Param('id') id: string) {
        try {
            return await this.productService.getProductById(id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `${error.message}`,
            }, HttpStatus.NOT_FOUND);
        }
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateProduct(@Param('id') id: string, @Body() product: CreateProductDto) {
        try {
            return await this.productService.updateProduct(id, product);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `${error.message}`,
            }, HttpStatus.NOT_FOUND);
        }
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string) {
        try {
            return await this.productService.deleteProduct(id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `${error.message}`,
            }, HttpStatus.NOT_FOUND);
        }
    }

}
