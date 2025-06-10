import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SupabaseModule } from './config/supabase.module';
import { ConfigModule } from '@nestjs/config';
import { ProfileInfoModule } from './profile-info/profile-info.module';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    SupabaseModule,
    ProfileInfoModule,
    ProductModule,
    CategoryModule
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
