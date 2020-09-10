import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div>
            <p className="person">My name is {props.name + ' and my age is ' + props.age}.</p>
            <p>{ props.children } </p>
        </div>
    )
}

export default person;