import { IsString, MaxLength } from "class-validator";

export class CreateCategoryDto {
    @MaxLength(50)
    @IsString()
    name: string;

    @MaxLength(200)
    @IsString()
    description: string;
    
    @MaxLength(20)
    @IsString()
    color: string;
}