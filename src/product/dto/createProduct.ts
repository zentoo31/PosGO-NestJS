import { IsString, IsNumber, MaxLength, IsOptional } from "class-validator";

export class CreateProductDto {
    @MaxLength(100)
    @IsString()
    name: string;

    @MaxLength(500)
    @IsString()
    description: string;

    @IsNumber()
    price: number;
        
    @IsNumber()
    category: number;
    
    @IsNumber()
    stock: number;
        
    @IsString()
    @IsOptional()
    imageUrl?: string;
}
