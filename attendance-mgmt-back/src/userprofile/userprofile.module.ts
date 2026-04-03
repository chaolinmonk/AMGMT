import { Module } from '@nestjs/common';
import { UserprofileService } from './userprofile.service';
import { UserprofileController } from './userprofile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [UserprofileController],
  providers: [UserprofileService],
})
export class UserprofileModule {}