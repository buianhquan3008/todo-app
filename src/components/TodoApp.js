import React, { useState } from 'react';

export default function TodoApp( {todos, addTodo } ) {
  const [text, setText] = useState('');
  const handleOnChange = (e) => {
    setText(e.target.value);
  }
  const handlenClick = () => {
    console.log(text)
    addTodo([...todos, text]);
  }
  return (
    <div className="App" >
      <input type='text' value={text} onChange={handleOnChange}/>
      <button onClick={handlenClick}>add</button>
      <ul>
        { todos.map(todo => (
          <li>
            {todo}
          </li>
        )) }
      </ul>
    </div>
  )
}
