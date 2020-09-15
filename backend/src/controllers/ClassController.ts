import { container } from 'tsyringe';
import { Request, Response } from 'express';

import CreateUserService from '../services/CreateUserService';
import CreateClassScheduleService from '../services/CreateClassScheduleService';
import CreateClassService from '../services/CreateClassService';
import ListTeachersService from '../services/ListTeachersService';

class ClassController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      avatar_url,
      whatsapp_number,
      biography,
      subject,
      price,
      schedule,
    } = request.body;

    const createUser = container.resolve(CreateUserService);
    const createClass = container.resolve(CreateClassService);
    const createClassScheduleeateUser = container.resolve(
      CreateClassScheduleService,
    );

    const user = await createUser.execute({
      name,
      avatar_url,
      biography,
      whatsapp_number,
    });

    const new_class = await createClass.execute({
      price,
      subject,
      user_id: user.id,
    });

    const class_schedule = await createClassScheduleeateUser.execute({
      schedule,
      class_id: new_class.id,
    });

    return response.json({
      user,
      new_class,
      class_schedule,
    });
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const listTeachers = container.resolve(ListTeachersService);

    const teachers = await listTeachers.execute();

    return response.json(teachers);
  }
}

export default ClassController;
