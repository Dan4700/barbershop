import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAppointmentDto) {
    return this.prisma.appointment.create({
      data: {
        userId: data.userId,
        masterId: data.masterId,
        serviceId: data.serviceId,
        startTime: new Date(data.startTime),
      },
      // Чтобы в ответе сразу увидеть детали, а не только ID:
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
          },
        },
        master: true,
        service: true,
      },
    });
  }

  async findAll() {
    return this.prisma.appointment.findMany({
      include: { user: true, master: true, service: true },
    });
  }
}
