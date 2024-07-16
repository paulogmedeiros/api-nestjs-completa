import { IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly telephone: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly senha: string;

  @IsString()
  readonly role: string;
}
