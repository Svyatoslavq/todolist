import React, { useState } from 'react';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import s from './addTodo.module.css';

const AddTodo = ({ todo, setTodo }) => {
  const [value, setValue] = useState('');

  const saveTodo = () => {
    const newTodo = {
      id: Date.now(),
      title: value,
      status: true,
    };
    setTodo([...todo, newTodo]);
    setValue('');

    localStorage.setItem('localTodo', JSON.stringify([...todo, newTodo]));
  };
  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Введите задачу"
          onKeyPress={(e) => e.key === 'Enter' && saveTodo()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />{' '}
        <Button onClick={saveTodo} className={s.btn} variant="success" size="lg">
          Сохранить{' '}
        </Button>{' '}
      </Col>{' '}
    </Row>
  );
};

export default AddTodo;
