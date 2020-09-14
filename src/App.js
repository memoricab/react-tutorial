import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person.js';

const App = props => {
  const [personsState, setPersons] = useState({
    persons: [
      { name: 'Mehmet', age: 25 },
      { name: 'John', age: 38 },
      { name: 'Fiona', age: 20 }
    ]
  });

  const switchNameHandler = () => {
    setPersons({
      persons: [
        { name: 'Messi', age: 32 },
        { name: 'Ronaldo', age: 30 },
        { name: 'Xavi', age: 40 }
      ]
    })
    style.background = 'red'

  }

  const nameChangedHandler = (event) => {
    setPersons({
      persons: [
        { name: 'Lolo', age: 32 },
        { name: event.target.value, age: 30 },
        { name: 'DASD', age: 40 }
      ]
    });

  }

  const style = {
    background: 'blue'
  }

  return (
    <div className="App">
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} changed= {nameChangedHandler}> I'm a software engineer.</Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler}></Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} changed= {nameChangedHandler}></Person>
      <button style= { style }  onClick={switchNameHandler}>Switch Person</button>
    </div>
  );
}

export default App;
