import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { CreateProductDto } from './dto/createProduct';

@Injectable()
export class ProductService {
    constructor(
        @Inject('SUPABASE_CLIENT')
        private supabase: SupabaseClient
    ){}
    
    async createProduct(product: CreateProductDto){
        
    }


}
