import React from 'react';

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';
import api from '../../services/api';

export interface Teacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;
  name: string;
  subject: string;
  whatsapp: string;
};

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherList: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('/connections', {
      user_id: teacher.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/60764637?s=460&u=8797a733b9d0e20137cd06132dd3f94357ea0db7&v=4" alt="Daniel Dantas" />

        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio}
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <button onClick={createNewConnection} type="button">
          <img src={WhatsappIcon} alt="Icone Whatsapp" />
              Entrar em contato
        </button>

      </footer>
    </article>
  );
}

export default TeacherList;