import React, { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import formatHour from '../../utils/formatHour';

import { Container, Main, ContainerHeader, TeacherCards } from './styles';

import smileIcon from '../../assets/images/icons/smile.svg';

import TeacherCard from '../../components/TeacherCard';
import Select from '../../components/Select';
import PageHeader from '../../components/PageHeader';

interface ScheduleItems {
  week_day: number;
  start_hour: number;
  end_hour: number;
  formattedHour: string;
}

interface TeachersData {
  user: {
    id: string;
    name: string;
    avatar_url: string;
    whatsapp_number: string;
    biography: string;
  };
  class: {
    subject: string;
    price: number;
    formattedPrice: string;
  };
  schedules: ScheduleItems[];
}

const AvailableClasses: React.FC = () => {
  const methods = useForm<FormData>();
  const [teachers, setTeachers] = useState<TeachersData[]>([]);
  const [subject, setSubject] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [startHour, setStartHour] = useState('');

  useEffect(() => {
    async function loadTeachers() {
      const response = await api.get<TeachersData[]>('/class/teachers');

      setTeachers(
        response.data.map(values => {
          const updatedSchedules = values.schedules.map(item => {
            return {
              ...item,
              formattedHour: formatHour(item.start_hour, item.end_hour),
            };
          });

          return {
            ...values,
            class: {
              ...values.class,
              formattedPrice: formatValue(values.class.price),
            },
            schedules: updatedSchedules,
          };
        }),
      );
    }

    loadTeachers();
  }, []);

  const filter = useCallback(() => {
    let filtered: TeachersData[] = teachers;

    if (subject) {
      filtered = teachers.filter(item => {
        return item.class.subject === subject;
      });
    }

    if (dayOfWeek) {
      filtered = filtered.filter(
        item =>
          item.schedules.filter(
            schedule => schedule.week_day === Number(dayOfWeek),
          ).length !== 0,
      );
    }

    if (startHour) {
      filtered = filtered.filter(
        item =>
          item.schedules.filter(
            schedule => schedule.start_hour === Number(startHour),
          ).length !== 0,
      );
    }

    return filtered;
  }, [subject, dayOfWeek, startHour, teachers]);

  return (
    <FormProvider {...methods}>
      <PageHeader
        title_header="Estudar"
        title="Estes são os proffys disponíveis."
        title_description_icon={smileIcon}
        title_description_right_side={`Nós temos ${teachers.length} professores`}
      />

      <Container>
        <Main>
          <ContainerHeader>
            <Select
              name="subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
              label="Matéria"
              options={[
                { value: 'Artes', label: 'Artes' },
                { value: 'Biologia', label: 'Biologia' },
                { value: 'Ciências', label: 'Ciências' },
                { value: 'Educação Física', label: 'Educação Física' },
                { value: 'Física', label: 'Física' },
                { value: 'Geografia', label: 'Geografia' },
                { value: 'Química', label: 'Química' },
                { value: 'História', label: 'História' },
                { value: 'Matemática', label: 'Matemática' },
                { value: 'Português', label: 'Português' },
                { value: 'Inglês', label: 'Inglês' },
              ]}
            />
            <Select
              name="subject"
              value={dayOfWeek}
              onChange={e => setDayOfWeek(e.target.value)}
              label="Dia da semana"
              options={[
                { value: '0', label: 'Segunda-feira' },
                { value: '1', label: 'Terça-feira' },
                { value: '2', label: 'Quarta-feira' },
                { value: '3', label: 'Quinta-feira' },
                { value: '4', label: 'Sexta-feira' },
              ]}
            />
            <Select
              name="subject"
              value={startHour}
              onChange={e => setStartHour(e.target.value)}
              label="Horário inicial"
              options={[
                { value: '7', label: '7 horas' },
                { value: '8', label: '8 horas' },
                { value: '9', label: '9 horas' },
                { value: '10', label: '10 horas' },
                { value: '11', label: '11 horas' },
                { value: '12', label: '12 horas' },
                { value: '13', label: '13 horas' },
                { value: '14', label: '14 horas' },
                { value: '15', label: '15 horas' },
                { value: '16', label: '16 horas' },
                { value: '17', label: '17 horas' },
                { value: '18', label: '18 horas' },
                { value: '19', label: '19 horas' },
                { value: '20', label: '20 horas' },
              ]}
            />
          </ContainerHeader>

          <TeacherCards>
            {filter().map(teacher => {
              return (
                <TeacherCard
                  key={teacher.user.id}
                  user={teacher.user}
                  class={teacher.class}
                  schedules={teacher.schedules}
                />
              );
            })}
          </TeacherCards>

          <span>Estes são todos os resultados</span>
        </Main>
      </Container>
    </FormProvider>
  );
};

export default AvailableClasses;
