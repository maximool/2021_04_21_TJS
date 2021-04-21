import React from 'react';
import Button from './components/Button/Button';
import './App.css';

const lorem = 'Excepteur velit pariatur est minim commodo incididunt aute duis aliquip aute eu officia veniam sint.'
function App(props) {
  return (
    <div className="App" style={{ color: 'tomato' }}>{lorem}<br />
      <Button title="Ok" bgColor="green"  />                       
      <Button title="Cancel" bgColor="tomato" />
      <Button title="Clear" bgColor="orange" style={{color:'green', fontWeight:900}}  />
      <Button title="Test" onclickbutton={(qqch)=>{
        alert(qqch);
      }}/>
    </div>
  );
}

export default App;
