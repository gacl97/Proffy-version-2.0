import { inject, injectable } from 'tsyringe';

import Class from '../models/Class';
import ClassSchedule from '../models/ClassSchedule';
import User from '../models/User';

import IClassesRepository from '../repositories/IClassesRepository';
import IClassSchedulesRepository from '../repositories/IClassSchedulesRepository';
import IUsersRepository from '../repositories/IUsersRepository';

interface IResponseDTO {
  user: User;
  class: Class;
  schedules: ClassSchedule[];
}

@injectable()
class ListTeachersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('ClassesRepository')
    private classesRepository: IClassesRepository,

    @inject('ClassSchedulesRepository')
    private classScheduleRepository: IClassSchedulesRepository,
  ) {}

  public async execute(): Promise<IResponseDTO[]> {
    const users = await this.usersRepository.findAllUsers();

    const teachers = await Promise.all(
      users.map(async user => {
        const data = await this.classesRepository.findById(user.id);

        if (!data) {
          return {
            user,
            class: {} as Class,
            schedules: [],
          };
        }

        const schedules = await this.classScheduleRepository.findAllById(
          data.id,
        );

        return {
          user,
          class: data,
          schedules,
        };
      }),
    );

    return teachers;
  }
}

export default ListTeachersService;
