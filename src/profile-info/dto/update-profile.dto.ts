import { IsString } from "class-validator";

export class UpdateProfileDto {
    @IsString()
    pic_url: string;

    @IsString()
    name: string;

    @IsString()
    city: string;

    @IsString()
    country: string;
}