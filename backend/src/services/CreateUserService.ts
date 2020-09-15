import { injectable, inject } from 'tsyringe';
import User from '../models/User';

import IUsersRepository from '../repositories/IUsersRepository';

interface IRequestDTO {
  name: string;
  avatar_url: string;
  whatsapp_number: string;
  biography: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute(data: IRequestDTO): Promise<User> {
    const user = await this.usersRepository.create(data);

    return user;
  }
}

export default CreateUserService;
