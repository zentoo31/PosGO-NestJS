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
            .from ('category')
            .select('*')
        if(error) throw new Error(error.message);
        return data;
    }
}


