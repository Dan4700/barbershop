import { IsString, MinLength } from 'class-validator';

export class CreateMasterDto {
  @IsString()
  @MinLength(2)
  name!: string;

  @IsString()
  specialization!: string; // Например, "Top Barber" или "Junior"

  @IsString()
  bio?: string;
}
