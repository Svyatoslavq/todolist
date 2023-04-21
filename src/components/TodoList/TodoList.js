import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import s from './TodoList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

function TodoList({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (localStorage.getItem('localTodo')) {
      const storedTodo = JSON.parse(localStorage.getItem('localTodo'));
      setTodo(storedTodo);
    }
  }, []);

  const deleteTodo = (id) => {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
    localStorage.setItem('localTodo', JSON.stringify(newTodo));
  };

  const statusTodo = (id) => {
    let newTodo = [...todo].filter((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
    localStorage.setItem('localTodo', JSON.stringify(newTodo));
  };

  const editTodo = (id, title) => {
    setEdit(id);
    setValue(title);
    localStorage.setItem('localTodo', JSON.stringify(setEdit, setValue));
  };

  const saveTodo = (id) => {
    let newTodo = [...todo].map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
    localStorage.setItem('localTodo', JSON.stringify(newTodo));
  };

  const clearTodo = () => {
    setTodo([]);
    localStorage.removeItem('localTodo');
  };

  return (
    <div>
      {' '}
      {todo.map((item) => (
        <div key={item.id} className={s.listItems}>
          {' '}
          {edit === item.id ? (
            <div>
              <input onChange={(e) => setValue(e.target.value)} value={value} />{' '}
            </div>
          ) : (
            <div className={!item.status ? s.close : ''}> {item.title} </div>
          )}{' '}
          {edit === item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)} variant="success" size="sm">
                <FontAwesomeIcon icon={faCheck} />{' '}
              </Button>{' '}
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)} variant="outline-danger" size="sm">
                <FontAwesomeIcon icon={faMinus} />{' '}
              </Button>{' '}
              <Button
                onClick={() => editTodo(item.id, item.title)}
                className={s.btn}
                variant="outline-success"
                size="sm">
                <FontAwesomeIcon icon={faPen} />{' '}
              </Button>{' '}
              <Button
                onClick={() => statusTodo(item.id)}
                className={s.btn}
                variant="outline-secondary"
                size="sm">
                {' '}
                {item.status ? (
                  <FontAwesomeIcon icon={faLockOpen} />
                ) : (
                  <FontAwesomeIcon icon={faLock} />
                )}{' '}
              </Button>{' '}
            </div>
          )}{' '}
        </div>
      ))}{' '}
    </div>
  );
}

export default TodoList;
