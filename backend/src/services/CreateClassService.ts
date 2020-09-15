import { injectable, inject } from 'tsyringe';
import Class from '../models/Class';

import IClassesRepository from '../repositories/IClassesRepository';

interface IRequestDTO {
  subject: string;
  price: number;
  user_id: string;
}

@injectable()
class CreateClassService {
  constructor(
    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,
  ) {}

  public async execute(data: IRequestDTO): Promise<Class> {
    const new_class = await this.classesRepository.create(data);

    return new_class;
  }
}

export default CreateClassService;
