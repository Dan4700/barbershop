import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateServiceDto } from './dto/create-service.dto';

@Injectable()
export class ServicesService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateServiceDto) {
    return this.prisma.service.create({ data });
  }

  findAll() {
    return this.prisma.service.findMany();
  }
}
