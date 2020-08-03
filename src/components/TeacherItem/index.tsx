import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://spinoff.com.br/wp-content/uploads/The-Flash-2-1200x900.jpg"
          alt="Flash"
        />
        <div>
          <strong>Flash</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        laudantium
        <br /> <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In obcaecati
        dignissimos ipsum sit blanditiis explicabo qui magni molestiae eos.
        Numquam autem facilis laudantium consequatur facere incidunt qui in
        nihil illo.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
