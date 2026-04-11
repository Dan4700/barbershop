import { IsInt, IsISO8601, IsNotEmpty } from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  @IsInt()
  userId!: number;

  @IsNotEmpty()
  @IsInt()
  masterId!: number;

  @IsNotEmpty()
  @IsInt()
  serviceId!: number;

  @IsNotEmpty()
  @IsISO8601() // Проверяет, что дата пришла в формате "2026-04-15T10:00:00Z"
  startTime!: string;
}
