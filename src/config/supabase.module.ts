import { Global, Module } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js'
import { ConfigService, ConfigModule } from '@nestjs/config';

@Global()
@Module({
    imports: [ConfigModule],
    providers: [{
        provide: 'SUPABASE_CLIENT',
        useFactory: (configService: ConfigService) => {
            const supabaseUrl = configService.get<string>('SUPABASE_URL');
            const supabaseKey = configService.get<string>('SUPABASE_KEY');
            if (!supabaseUrl || !supabaseKey) {
                throw new Error('SUPABASE_URL and SUPABASE_KEY must be defined in environment variables');
            }
            return createClient(supabaseUrl, supabaseKey);
        },
        inject: [ConfigService]
    }],
    exports: ['SUPABASE_CLIENT']
})
export class SupabaseModule {

}
