import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database.module';
import { ConfigModule } from '@nestjs/config';
import { OtpModule } from './otp/otp.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    OtpModule,
    // controllers: [AppController],
    // providers: [AppService],
  ],
})
export class AppModule {}
