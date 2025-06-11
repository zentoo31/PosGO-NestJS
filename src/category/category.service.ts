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
}


