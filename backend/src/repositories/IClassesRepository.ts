import ICreateClassDTO from '../dtos/ICreateClassDTO';
import Class from '../models/Class';

export default interface IClassesRepository {
  create(data: ICreateClassDTO): Promise<Class>;
  findById(user_id: string): Promise<Class | undefined>;
}
