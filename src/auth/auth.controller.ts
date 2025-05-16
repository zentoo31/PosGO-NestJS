import { Controller, UsePipes, ValidationPipe, Post, Body, UseFilters } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { SupabaseFilter } from 'src/supabase/supabase.filter';

@Controller('auth')
@UseFilters(SupabaseFilter)
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    @UsePipes(new ValidationPipe())
    async register(@Body() user: RegisterDto) {
        return this.authService.register(user);
    }

    @Post('login')
    @UsePipes(new ValidationPipe())
    async login(@Body() credentials: LoginDto) {
        return this.authService.login(credentials);
    }

    @Post('logout')
    logout() {
        return this.authService.logout();
    }
}
