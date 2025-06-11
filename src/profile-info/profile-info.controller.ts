import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Param, HttpException, HttpStatus  } from '@nestjs/common';
import { ProfileInfoService } from './profile-info.service';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('profile-info')
export class ProfileInfoController {
    constructor(private readonly profileInfoService: ProfileInfoService) {}

    @Get()
    async getProfileInfo(@Param('id') id: string){
        try {
            return await this.profileInfoService.getProfileInfo(id);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: `${error.message}`,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    @UsePipes(new ValidationPipe())
    async updateProfileInfo(@Body() updateProfileDto: UpdateProfileDto, @Param('id') id: string) {
        try {
            return await this.profileInfoService.updateProfileInfo(id, updateProfileDto);
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: `${error.message}`,
            }, HttpStatus.BAD_REQUEST);
        }
    }
}
