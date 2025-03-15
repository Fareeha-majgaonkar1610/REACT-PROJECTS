import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import React, { useState, useEffect } from 'react';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  const onDelete = (todo) => {
    console.log('I am ondelete of todo', todo);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log('I am adding this todo', title, desc);
    let Sno;
    if (todos.length === 0) {
      Sno = 1;
    } else {
      Sno = todos[todos.length - 1].Sno + 1;
    }

    const myTodo = {
      Sno: Sno,
      title: title,
      desc: desc,
    };

    setTodos([...todos, myTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, myTodo]));
  };

  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header title="My Todos list" searchBar={false} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
