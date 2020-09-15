import { injectable, inject } from 'tsyringe';
import ClassSchedule from '../models/ClassSchedule';

import AppError from '../errors/AppError';

import IClassSchedulesRepository from '../repositories/IClassSchedulesRepository';

interface IScheduleData {
  week_day: number;
  start_hour: number;
  end_hour: number;
}

interface IRequestDTO {
  schedule: IScheduleData[];
  class_id: string;
}

@injectable()
class CreateClassScheduleService {
  constructor(
    @inject('ClassSchedulesRepository')
    private classScheduleRepository: IClassSchedulesRepository,
  ) {}

  public async execute({
    class_id,
    schedule,
  }: IRequestDTO): Promise<ClassSchedule[]> {
    const scheduleItems = await Promise.all(
      schedule.map(async item => {
        if (item.week_day < 0 || item.week_day > 5) {
          throw new AppError('Day of the week must be between 0 to 6.');
        }

        if (item.start_hour < 7 || item.start_hour > 22) {
          throw new AppError('Start hour must be between 7h to 22h');
        }

        if (item.end_hour < 0 || item.end_hour > 59) {
          throw new AppError('End time must be between 0 to 23');
        }

        const class_schedule = await this.classScheduleRepository.create({
          week_day: item.week_day,
          end_hour: item.end_hour,
          start_hour: item.start_hour,
          class_id,
        });

        return class_schedule;
      }),
    );

    return scheduleItems;
  }
}

export default CreateClassScheduleService;
