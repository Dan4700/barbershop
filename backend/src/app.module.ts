import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { MastersModule } from './masters/masters.module';
import { ServicesModule } from './services/services.module';
import { AppointmentsModule } from './appointments/appointments.module';

@Module({
  imports: [UsersModule, PrismaModule, MastersModule, ServicesModule, AppointmentsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
