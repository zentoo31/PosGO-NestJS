import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { CreateCategoryDto } from './dto/createCategory';

@Injectable()
export class CategoryService {
    constructor(
            @Inject('SUPABASE_CLIENT')
            private supabase: SupabaseClient
    ){}

    async getCategories() {
        const {data, error} = await this.supabase
            .schema('public')
            .from ('category')
            .select('*')
        if(error) throw new Error(error.message);
        return data;
    }

    async createCategory(category: CreateCategoryDto){
        const {data, error} = await this.supabase
            .schema('public')
            .from('category')
            .insert(category)
            .select('*')
            .single();
        if(error) throw new Error(error.message);
        return {id: data.id ,message: 'Category created successfully'};
    }

    async getCategoryById(id: string) {
        const { data, error } = await this.supabase
            .schema('public')
            .from('category')
            .select('*')
            .eq('id', id)
            .single();
        if (error) throw new Error(error.message);
        return data;
    }

    async updateCategory(id: string, category: CreateCategoryDto) {
        const { data, error } = await this.supabase
            .schema('public')
            .from('category')
            .update(category)
            .eq('id', id)
            .select('*')
            .single();
        
        if (error) throw new Error(error.message);
        return { id: data.id, message: 'Category updated successfully' };
    } 

    async deleteCategory(id: string) {
        const { error } = await this.supabase
            .schema('public')
            .from('category')
            .delete()
            .eq('id', id);
        
        if (error) throw new Error(error.message);
        return { message: 'Category deleted successfully' };
    }
    
}


