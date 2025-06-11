import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Patch, Param, Delete } from '@nestjs/common';
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
            throw new Error(`${error.message}`);
        }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async createCategory(@Body() category: CreateCategoryDto) {
        try {
            return await this.categoryService.createCategory(category);
        } catch (error) {
            throw new Error(`${error.message}`);
        }
    }

    @Get(':id')
    async getCategoryById(@Param('id') id: string) {
        try {
            return await this.categoryService.getCategoryById(id);
        } catch (error) {
            throw new Error(`${error.message}`);
        }
    }

    @Patch(':id')
    @UsePipes(new ValidationPipe())
    async updateCategory(@Body() category: CreateCategoryDto, @Param('id') id: string) {
        try {
            return await this.categoryService.updateCategory(id, category);
        } catch (error) {
            throw new Error(`${error.message}`);
        }
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string) {
        try {
            return await this.categoryService.deleteCategory(id);
        } catch (error) {
            throw new Error(`${error.message}`);
        }
    }
}
