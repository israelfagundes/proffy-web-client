import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  async function handleSearchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day: weekDay,
        time,
      },
    });
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            label="Disciplina"
            options={[
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Química', label: 'Química' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Português', label: 'Português' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Sociologia', label: 'Sociologia' },
              { value: 'Educação Física', label: 'Educação Física' },
            ]}
          />
          <Select
            name="week_day"
            value={weekDay}
            onChange={(e) => setWeekDay(e.target.value)}
            label="Dia da semana"
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
          <Input
            name="time"
            label="Horário"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;
