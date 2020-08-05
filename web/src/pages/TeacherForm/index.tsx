import React, { useState } from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

export default () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      },
    ]);
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input label="Nome completo" name="name" />
          <Input label="Avatar" name="avatar" />
          <Input label="Whatsapp" name="whatsapp" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Química', label: 'Química' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Física', label: 'Física' },
            ]}
          />
          <Input label="Custo da sua hora por aula" name="cost" />
          <Textarea label="Biografia" name="bio" />
        </fieldset>

        <fieldset>
          <legend>
            Horários disponíveis
            <button type="button" onClick={addNewScheduleItem}>
              + Novo Horário
            </button>
          </legend>

          {scheduleItems.map(scheduleItem => (
            <div key={scheduleItem.week_day} className="schedule-item">
              <Select
                label="Dia da semana"
                name="week_day"
                options={[
                  { value: '0', label: 'Domingo' },
                  { value: '1', label: 'Segunda-feira' },
                  { value: '2', label: 'Terça-feira' },
                  { value: '3', label: 'Quarta-feira' },
                  { value: '4', label: 'Quinta-feira' },
                  { value: '5', label: 'Sexta-feira' },
                  { value: '6', label: 'Sábado' },
                ]}
              />

              <Input label="Das" name="from" type="time" />
              <Input label="Até" name="to" type="time" />
            </div>
          ))}
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante" />
            Importante! <br />
            Preencha todos os dados
          </p>
          <button type="button">Salvar cadastro</button>
        </footer>
      </main>
    </div>
  );
};
