import React, { useMemo } from 'react';
import { uuid } from 'uuidv4';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import {
  Container,
  ProfileHeader,
  ProfileImg,
  Content,
  DaysCards,
  AvailableDaysCard,
  BoxContainerFooter,
  BoxContainerFooterContent,
  WhatsappImg,
} from './styles';

interface ScheduleItems {
  week_day: number;
  formattedHour: string;
}

interface TeachersData {
  user: {
    name: string;
    avatar_url: string;
    whatsapp_number: string;
    biography: string;
  };
  class: {
    subject: string;
    formattedPrice: string;
  };
  schedules: ScheduleItems[];
}

const TeacherCard = ({ user, class: classItem, schedules }: TeachersData) => {
  const daysOfWeek = useMemo(() => {
    return ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];
  }, []);

  return (
    <>
      <Container>
        <ProfileHeader>
          <ProfileImg
            src={
              user.avatar_url || `https://api.adorable.io/avatars/${user.name}`
            }
            alt={user.name}
          />

          <div>
            <h1>{user.name}</h1>
            <span>{classItem.subject}</span>
          </div>
        </ProfileHeader>

        <Content>
          <p>{user.biography}</p>
        </Content>

        <DaysCards>
          {daysOfWeek.map((day, index) => {
            return (
              <AvailableDaysCard
                key={uuid()}
                isDisabled={!schedules.find(item => item.week_day === index)}
              >
                <div>
                  <span>Dia</span>
                  <h1>{day}</h1>
                </div>

                <div>
                  <span>Horário</span>
                  <h1>
                    {schedules.find(item => item.week_day === index)
                      ?.formattedHour || '-'}
                  </h1>
                </div>
              </AvailableDaysCard>
            );
          })}
        </DaysCards>
      </Container>

      <BoxContainerFooter>
        <BoxContainerFooterContent>
          <div>
            <span>Preço/hora</span>
            <h1>{classItem.formattedPrice}</h1>
          </div>

          <button type="button">
            <WhatsappImg src={whatsappIcon} alt="whatsapp icon" />
            Entrar em contato
          </button>
        </BoxContainerFooterContent>
      </BoxContainerFooter>
    </>
  );
};

export default TeacherCard;
