import React, {useState} from 'react';
import './App.css';
import Display from './components/Display';
import Form from './components/Form';


function App() {

  const [toDoList, setToDoList] =useState([]);

  return (
    <div className="App">
      <Form toDoList = {toDoList} setToDoList={setToDoList}/>
      <Display toDoList = {toDoList} setToDoList={setToDoList}/>
    </div>
  );
}

export default App;
