import { Injectable, Inject } from '@nestjs/common';
import { RegisterDto } from 'src/auth/dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
    constructor(
        @Inject('SUPABASE_CLIENT')
        private supabase: SupabaseClient,
    ) { }

    async register(user: RegisterDto) {
        const { data, error } = await this.supabase.auth.signUp({
            email: user.email,
            password: user.password
        })
        if (error) {
            throw new Error(error.message);
        }

        await this.supabase
            .schema('public')
            .from('profile')
            .insert({
                user_id: data.user?.id,
            })
            .select('*')
            .single();

        return data;
    }

    async login(credentials: LoginDto) {
        const { data, error } = await this.supabase.auth.signInWithPassword({
            email: credentials.email,
            password: credentials.password,
        });

        if (error) {
        throw new InvalidCredentialsException(error.message);
        }

        return data;
    }

    async getSession() {
        const { data, error } = await this.supabase.auth.getSession();
        if (error) {
            throw new Error(error.message);
        }
        return data;
    }

    async logout() {
        const { error } = await this.supabase.auth.signOut();
        if (error) {
            throw new Error(error.message);
        }
        return { message: 'Logged out successfully' };
    }
}

export class InvalidCredentialsException extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidCredentialsException';
  }
}