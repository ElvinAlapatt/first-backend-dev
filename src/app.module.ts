import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [AuthModule, PrismaModule, ConfigModule.forRoot({
    isGlobal : true
  })],
  providers: [PrismaService]
})
export class AppModule {}
