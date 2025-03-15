import React from 'react';
import TodoItem from './TodoItem';

const Todos = (props) => {
  let myStyle = {
    minHeight: '70vh',
  };

  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'> Todos list </h3>

      {props.todos.length === 0 ? (
        <p>No Todos to display</p>
      ) : (
        props.todos.map((todo) => (
          <React.Fragment key={todo.Sno}>
            <TodoItem todo={todo} onDelete={props.onDelete} />
            <hr />
          </React.Fragment>
        ))
      )}
    </div>
  );
};

export default Todos;
