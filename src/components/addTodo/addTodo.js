import React, { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { Row, Col, Button, FormControl } from "react-bootstrap";
import s from "./addTodo.module.css";

function AddTodo({ todo, setTodo }) {
  const [value, setValue] = useState("");

  function saveTodo() {
    const newTodo = {
      id: uuidv1(),
      title: value,
      status: true,
    };
    setTodo([...todo, newTodo]);
    setValue("");

    localStorage.setItem("localTodo", JSON.stringify([...todo, newTodo]));
  }
  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="Введите задачу"
          onKeyPress={(e) => e.key === "Enter" && saveTodo()}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          onClick={saveTodo}
          className={s.btn}
          variant="success"
          size="lg"
        >
          Сохранить
        </Button>
      </Col>
    </Row>
  );
}

export default AddTodo;
