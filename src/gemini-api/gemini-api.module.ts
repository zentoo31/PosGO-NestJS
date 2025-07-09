import { Module } from '@nestjs/common';
import { GeminiApiController } from './gemini-api.controller';
import { GeminiApiService } from './gemini-api.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [],
  controllers: [GeminiApiController],
  providers: [GeminiApiService]
})
export class GeminiApiModule {}
