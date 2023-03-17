import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import AddTodo from './components/addTodo/addTodo';
import { useState } from 'react';
import {Container} from 'react-bootstrap'
import ReactDOM from 'react-dom/client';


function App() {

  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true
    },
    {
      id: 2,
      title: 'second todo',
      status: true
    },
    {
      id: 3,
      title: 'third todo',
      status: false
    },
  ])
  console.log(todo)


  

  return (
    <Container className="App" >
        <Header/>
        <AddTodo todo={todo} setTodo={setTodo}/>
        <TodoList todo={todo} setTodo={setTodo}/>
    </Container>
  );
}

export default App;
