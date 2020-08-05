import React from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';

export default () => {
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
      </main>
    </div>
  );
};
