import { IsString, IsNumber, MaxLength } from "class-validator";

export class CreateProductDto {
    @MaxLength(100)
    @IsString()
    name: string;

    @MaxLength(500)
    @IsString()
    description: string;

    @IsNumber()
    price: number;
        
    @IsString()
    category?: string;
    
    @IsNumber()
    stock: number;
        
    @IsString()
    imageUrl: string;
}
