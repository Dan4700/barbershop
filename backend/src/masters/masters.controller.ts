import { Controller, Post, Get, Body } from '@nestjs/common';
import { MastersService } from './masters.service';
import { CreateMasterDto } from './dto/create-master.dto';

@Controller('masters')
export class MastersController {
  constructor(private readonly mastersService: MastersService) {}

  @Post() // Добавить мастера
  create(@Body() createMasterDto: CreateMasterDto) {
    return this.mastersService.create(createMasterDto);
  }

  @Get() // Получить список всех мастеров
  findAll() {
    return this.mastersService.findAll();
  }
}
