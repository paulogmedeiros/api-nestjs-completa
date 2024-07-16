import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Paulo',
    minimum: 1,
    maximum: 100,
  })
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Numero de contato do usuário' })
  @IsString()
  readonly telephone: string;

  @ApiProperty({ description: 'E-mail do usuário' })
  @IsString()
  readonly email: string;

  @ApiProperty({ description: 'Senha do usuário' })
  @IsString()
  readonly senha: string;

  @ApiProperty({ description: 'Cargo do usuário' })
  @IsString()
  readonly role: string;
}
