import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMasterDto } from './dto/create-master.dto';

@Injectable()
export class MastersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMasterDto) {
    return this.prisma.master.create({ data });
  }

  async findAll() {
    return this.prisma.master.findMany();
  }
}
