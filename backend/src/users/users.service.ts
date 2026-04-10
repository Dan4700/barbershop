import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    // 1. Хешируем пароль (10 - это "соль", количество раундов шифрования)
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // 2. Сохраняем пользователя в БД
    return this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        phone: data.phone,
        password: hashedPassword,
      },
    });
  }
}
