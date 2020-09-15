import { container } from 'tsyringe';

import UsersRepository from '../repositories/UsersRepository';
import IUsersRepository from '../repositories/IUsersRepository';

import ClassesRepository from '../repositories/ClassesRepository';
import IClassesRepository from '../repositories/IClassesRepository';

import ClassSchedulesRepository from '../repositories/ClassSchedulesRepository';
import IClassSchedulesRepository from '../repositories/IClassSchedulesRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IClassesRepository>(
  'ClassesRepository',
  ClassesRepository,
);

container.registerSingleton<IClassSchedulesRepository>(
  'ClassSchedulesRepository',
  ClassSchedulesRepository,
);
