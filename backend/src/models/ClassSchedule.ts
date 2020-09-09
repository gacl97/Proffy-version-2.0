import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import Class from './Class';

@Entity('class_schedule')
class ClassSchedule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('integer')
  week_day: number;

  @Column('integer')
  start_hour: number;

  @Column('integer')
  end_hour: number;

  @Column()
  class_id: string;

  @ManyToOne(() => Class)
  @JoinColumn({ name: 'class_id' })
  class: Class;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default ClassSchedule;
