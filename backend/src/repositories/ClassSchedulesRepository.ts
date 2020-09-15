import { Repository, getRepository } from 'typeorm';
import IClassSchedulesRepository from './IClassSchedulesRepository';
import ICreateClassScheduleDTO from '../dtos/ICreateClassScheduleDTO';
import ClassSchedule from '../models/ClassSchedule';

class ClassSchedulesRepository implements IClassSchedulesRepository {
  private ormRepository: Repository<ClassSchedule>;

  constructor() {
    this.ormRepository = getRepository(ClassSchedule);
  }

  findById(class_id: string): Promise<ClassSchedule[]> {
    throw new Error('Method not implemented.');
  }

  public async create(data: ICreateClassScheduleDTO): Promise<ClassSchedule> {
    const class_schedule = this.ormRepository.create(data);

    await this.ormRepository.save(class_schedule);

    return class_schedule;
  }

  public async findAllById(class_id: string): Promise<ClassSchedule[]> {
    const schedules = await this.ormRepository.find({
      where: {
        class_id,
      },
    });

    return schedules;
  }
}

export default ClassSchedulesRepository;
