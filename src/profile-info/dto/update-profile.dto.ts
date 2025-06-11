import { IsString, IsOptional } from "class-validator";

export class UpdateProfileDto {
    @IsString()
    @IsOptional()
    pic_url: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    country: string;
}