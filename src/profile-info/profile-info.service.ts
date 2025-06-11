import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';
import { UpdateProfileDto } from './dto/update-profile.dto';

@Injectable()
export class ProfileInfoService {
    constructor(
        @Inject('SUPABASE_CLIENT')
        private supabase: SupabaseClient
    ) {}

    async getProfileInfo(userId: string) {
        const { data, error } = await this.supabase
            .schema('public')
            .from('profile')
            .select('*')
            .eq('user_id', userId)
            .single();

        if (error) throw new Error(error.message);
        return data;
    }

    async updateProfileInfo(userId: string, updateProfileDto: UpdateProfileDto) {
        const { data, error } = await this.supabase
            .schema('public')
            .from('profile')
            .update(updateProfileDto)
            .eq('user_id', userId)
            .select('*')
            .single();

        if (error) throw new Error(error.message);
        return { id: data.id, message: 'Profile updated successfully' };
    }

}
