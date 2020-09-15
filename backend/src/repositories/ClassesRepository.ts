import { getRepository, Repository } from 'typeorm';
import IClassesRepository from './IClassesRepository';
import ICreateClassDTO from '../dtos/ICreateClassDTO';
import Class from '../models/Class';

class ClassesRepository implements IClassesRepository {
  private ormRepository: Repository<Class>;

  constructor() {
    this.ormRepository = getRepository(Class);
  }

  public async create({
    price,
    user_id,
    subject,
  }: ICreateClassDTO): Promise<Class> {
    const new_class = this.ormRepository.create({
      price,
      user_id,
      subject,
    });

    await this.ormRepository.save(new_class);

    return new_class;
  }

  public async findById(user_id: string): Promise<Class | undefined> {
    const classes = await this.ormRepository.findOne({
      where: {
        user_id,
      },
    });

    return classes;
  }
}

export default ClassesRepository;
