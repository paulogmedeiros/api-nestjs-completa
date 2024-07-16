import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('users')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Cria um novo usuário' })
  @ApiResponse({
    status: 201,
    description: 'O usuário foi criado com sucesso.',
    schema: {
      example: { id: 1, name: 'John Doe', age: 25 },
    },
  })
  @ApiResponse({ status: 400, description: 'Dados de entrada inválidos.' })
  @ApiBody({
    description: 'Dados para atualizar o usuário',
    type: CreateUserDto,
    examples: {
      a: {
        summary: 'Example A',
        description: 'A basic example',
        value: {
          name: 'Jon',
          email: 'dwad',
          password: 'ddawdaw',
        },
      },
      b: {
        summary: 'Example B',
        description: 'A basic example',
        value: {
          name: 'Jon',
          email: 'dwad',
          password: 'ddawdaw',
        },
      },
    },
  })
  public async postUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }

  @Get()
  public async findAll() {
    return this.userService.findAll();
  }
  @ApiParam({
    name: 'id',
    description: 'ID do usuário',
    example: 1,
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }
  @ApiQuery({ name: 'nome', description: 'nome do usuarios', required: false })
  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
