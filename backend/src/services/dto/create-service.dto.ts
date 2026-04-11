import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Min,
} from 'class-validator';

export class CreateServiceDto {
  @IsNotEmpty({ message: 'Название услуги обязательно' })
  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty({ message: 'Цена обязательна' })
  @IsNumber()
  @Min(0) // Цена не может быть отрицательной
  price!: number;

  @IsNotEmpty({ message: 'Длительность обязательна' })
  @IsNumber()
  @Min(5) // Стрижка вряд ли длится меньше 5 минут
  duration!: number;
}
