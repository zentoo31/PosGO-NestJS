import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Patch, Param, Delete, HttpException, HttpStatus  } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/createCategory';

@Controller('category')
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    async getCategories() {
        try {
            return await this.categoryService.getCategories();
        }
        catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: `${error.message}`,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createCategory(@Body() category: CreateCategoryDto) {
        try {
            return await this.categoryService.createCategory(category);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: `${error.message}`,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id')
    async getCategoryById(@Param('id') id: string) {
        try {
            return await this.categoryService.getCategoryById(id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `${error.message}`,
            }, HttpStatus.NOT_FOUND);
        }
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateCategory(@Body() category: CreateCategoryDto, @Param('id') id: string) {
        try {
            return await this.categoryService.updateCategory(id, category);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `${error.message}`,
            }, HttpStatus.NOT_FOUND);
        }
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string) {
        try {
            return await this.categoryService.deleteCategory(id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: `${error.message}`,
            }, HttpStatus.NOT_FOUND);
        }
    }
}
