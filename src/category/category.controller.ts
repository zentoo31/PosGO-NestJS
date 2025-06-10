import { Controller, Get, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
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
    
}
