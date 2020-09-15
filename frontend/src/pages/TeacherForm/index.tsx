import React, { useState, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { uuid } from 'uuidv4';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import rocketIcon from '../../assets/images/icons/rocket.svg';
import warningIcon from '../../assets/images/icons/warning.svg';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Select from '../../components/Select';
import TextArea from '../../components/TextArea';

import {
  Container,
  Main,
  BoxContainer,
  PlusIcon,
  AvailableTime,
  TrashIcon,
  BoxContainerFooter,
  BoxFooterContent,
  WarningIcon,
} from './styles';

interface ScheduleItemsData {
  week_day: string;
  start_hour: string;
  end_hour: string;
}

interface FormData {
  name: string;
  avatar_url: string;
  whatsapp_number: string;
  subject: string;
  price: string;
  schedule: ScheduleItemsData[];
}

const schema = Yup.object().shape({
  name: Yup.string().required('* Nome obrigatório'),
  avatar: Yup.string(),
  whatsapp_number: Yup.string().required('* Número de celular obrigatório'),
  biography: Yup.string().required('* Biografia obrigatória'),
  subject: Yup.string().required('* Matéria a ser ministrada obrigatório'),
  price: Yup.string().required('* Valor da aula obrigatório'),
  schedule: Yup.array()
    .required()
    .min(1)
    .of(
      Yup.object().shape({
        week_day: Yup.string().required('* Dia da semana'),
        start_hour: Yup.number()
          .required('* Horário inicial obrigatório')
          .min(7, 'Mínimo as 7h')
          .max(19, 'Máximo até as 19h'),
        end_hour: Yup.number()
          .required('* Horário final obrigatório')
          .min(8, 'horário mínimo para finalizar a aula 8h')
          .max(20, 'Até no máximo 20h'),
      }),
    ),
});

const TeacherForm: React.FC = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [subject, setSubject] = useState('');
  const [scheduleItems, setscheduleItems] = useState([
    { id: uuid(), week_day: 0, start_hour: '', end_hour: '' },
  ]);
  const history = useHistory();

  const handleAddNewScheduleItem = useCallback(() => {
    if (scheduleItems.length === 5) {
      return;
    }

    setscheduleItems(prevState => [
      ...prevState,
      {
        id: uuid(),
        week_day: prevState[prevState.length - 1].week_day + 1,
        start_hour: '',
        end_hour: '',
      },
    ]);
  }, [scheduleItems]);

  const handleRemoveScheduleItem = useCallback(
    (id: string) => {
      if (scheduleItems.length > 1) {
        const updated = scheduleItems.filter(item => item.id !== id);

        setscheduleItems(updated);
      }
    },
    [scheduleItems],
  );

  let timer = 0;
  const handleUpdateScheduleItem = (
    id: string,
    field: string,
    value: string,
  ) => {
    let waitingTime = 500;

    if (field === 'week_day') {
      waitingTime = 0;
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      const updated = scheduleItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item,
      );

      setscheduleItems(updated);
    }, waitingTime);
  };

  const onSubmit = useCallback(
    async (data: FormData) => {
      await api.post('class', data);
      history.push('/success');
    },
    [history],
  );

  return (
    <FormProvider {...methods}>
      <PageHeader
        title_header="Dar aulas"
        title="Que incrível que você quer dar aulas."
        description_below_title="O primeiro passo é preencher esse formulário de inscrição."
        description_below_title_icon={rocketIcon}
        description_below_title_right_side="Preparare-se! vai ser o máximo."
      />

      <Container>
        <Main>
          <BoxContainer>
            <form id="formRef" onSubmit={methods.handleSubmit(onSubmit)}>
              <legend>Seus Dados</legend>

              <Input name="name" label="Nome completo" />

              <section>
                <Input
                  name="avatar_url"
                  label="Link da sua foto"
                  description="(comece com //http)"
                />

                <Input
                  name="whatsapp_number"
                  label="Whatsapp"
                  description="(somente números)"
                />
              </section>

              <TextArea name="biography" label="Biografia" />

              <legend>Sobre a aula</legend>

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

              <Input
                name="price"
                label="Custo da sua hora por aula"
                description="(em R$)"
              />

              <legend>
                Horários disponíveis
                <button type="button" onClick={handleAddNewScheduleItem}>
                  <PlusIcon />
                  Novo horário
                </button>
              </legend>

              {scheduleItems.map((item, index) => (
                <AvailableTime key={item.id}>
                  <Select
                    name={`schedule[${index}].week_day`}
                    value={item.week_day}
                    label="Dia da semana"
                    onChange={e => {
                      handleUpdateScheduleItem(
                        item.id,
                        'week_day',
                        e.target.value,
                      );
                    }}
                    options={[
                      { value: '0', label: 'Segunda-feira' },
                      { value: '1', label: 'Terça-feira' },
                      { value: '2', label: 'Quarta-feira' },
                      { value: '3', label: 'Quinta-feira' },
                      { value: '4', label: 'Sexta-feira' },
                    ]}
                  />

                  <Input
                    name={`schedule[${index}].start_hour`}
                    label="Das"
                    description="(7h - 19h)"
                  />

                  <Input
                    name={`schedule[${index}].end_hour`}
                    label="Até"
                    description="(8h - 20h)"
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveScheduleItem(item.id)}
                  >
                    <TrashIcon />
                  </button>
                </AvailableTime>
              ))}
            </form>
          </BoxContainer>

          <BoxContainerFooter>
            <BoxFooterContent>
              <div>
                <WarningIcon src={warningIcon} alt="warning" />

                <div>
                  <p>Importante!</p>
                  <p>Preencha todos os dados</p>
                </div>
              </div>

              <button type="submit" form="formRef">
                Salvar cadastro
              </button>
            </BoxFooterContent>
          </BoxContainerFooter>
        </Main>
      </Container>
    </FormProvider>
  );
};

export default TeacherForm;
