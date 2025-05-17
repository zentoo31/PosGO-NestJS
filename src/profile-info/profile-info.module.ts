import { Module } from '@nestjs/common';
import { ProfileInfoService } from './profile-info.service';
import { ProfileInfoController } from './profile-info.controller';

@Module({
  providers: [ProfileInfoService],
  controllers: [ProfileInfoController]
})
export class ProfileInfoModule {}
