import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { MastersModule } from './masters/masters.module';

@Module({
  imports: [UsersModule, PrismaModule, MastersModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
