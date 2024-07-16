import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  public async createUser(createUserDto: CreateUserDto) {
    return await this.userRepository.insertUser(createUserDto);
  }

  public async findAll() {
    return `This action returns all user`;
  }

  public async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  public async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  public async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
