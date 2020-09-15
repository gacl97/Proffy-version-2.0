import ICreateClassScheduleDTO from '../dtos/ICreateClassScheduleDTO';
import ClassSchedule from '../models/ClassSchedule';

export default interface IClassSchedulesRepository {
  create(data: ICreateClassScheduleDTO): Promise<ClassSchedule>;
  findAllById(class_id: string): Promise<ClassSchedule[]>;
}
