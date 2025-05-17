import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SupabaseModule } from './config/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { ProfileInfoModule } from './profile-info/profile-info.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    SupabaseModule,
    ProfileInfoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
