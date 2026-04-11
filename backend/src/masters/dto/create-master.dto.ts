import { IsString, MinLength, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateMasterDto {
  @IsNotEmpty({ message: 'Имя мастера обязательно' })
  @IsString()
  @MinLength(2)
  name!: string;

  @IsNotEmpty({ message: 'Специализация обязательна' })
  @IsString()
  specialization!: string; // Например, "Top Barber" или "Junior"

  @IsOptional()
  @IsString()
  bio?: string;
}
