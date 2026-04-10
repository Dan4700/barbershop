import { IsEmail, IsString, MinLength, IsOptional } from 'class-validator';
export class CreateUserDto {
  @IsEmail({}, { message: 'Некорректный email' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'Пароль должен быть не меньше 6 символов' })
  password!: string;

  @IsString()
  name!: string;

  @IsOptional()
  @IsString()
  phone?: string;
}
