import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { CreateProductDto } from './dto/createProduct';

@Injectable()
export class ProductService {
    constructor(
        @Inject('SUPABASE_CLIENT')
        private supabase: SupabaseClient
    ){}
    
    async createProduct(product: CreateProductDto) {
        const existingCategory = await this.supabase
            .schema('public')
            .from('category')
            .select('*')
            .eq('id', product.category)
            .single();
        if (!existingCategory.data) throw new Error('Category not found');
        if (existingCategory.error) throw new Error(existingCategory.error.message);

        const { data, error } = await this.supabase
            .schema('public')
            .from('product')
            .insert(product)
            .select('*')
            .single();
        
        if (error) throw new Error(error.message);
        return { id: data.id, message: 'Product created successfully' };
    }

    async getProducts(){
        const {data, error} =  await this.supabase
            .schema('public')
            .from('product')
            .select('*');
        if (error) throw new Error(error.message);
        return data;
    }

}
