import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../models/User';

export default interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findAllUsers(): Promise<User[]>;
}
