import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';
import { AssistanceModule } from './assistance/assistance.module';
import { UserprofileModule } from './userprofile/userprofile.module';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  }), UsersModule, LoginModule, AssistanceModule, UserprofileModule, RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
