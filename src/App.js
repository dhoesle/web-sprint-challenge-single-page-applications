import React, { useState, useEffect } from 'react';
import {  Route, Link } from 'react-router-dom'
import Form from './Form'
import axios from "axios";
import { v4 as uuid } from "uuid";



const initialPizzaList = []

const initialFormValues = {
  name: '',
  size: '',
  toppings: {
  
  },
  special: '',
}


const App = () => {
  const [pizzas, setPizzas] = useState(initialPizzaList)
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (evt) => {
    const { name, value } = evt.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    setFormValues({
      ...formValues,
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!formValues.name || !formValues.size) {
      setError("MUST FILL OUT INFO");
      return;
    }

    const newPizza = {
      id: uuid(),
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size,
      toppings: formValues.toppings
    };

    console.log(pizzas);

    axios.post("url");

    setPizzas((pizzas) => [newPizza, ...pizzas]);

    setFormValues(initialFormValues);
  };
  
  return (
    <div className='container'>
      <h1>Lambda Eats</h1>
      <div className="home-button">
        <Route path='/'>
          <Link to='/'>Home</Link>
        </Route>

        <Route>
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            onCheckboxChange={onCheckboxChange}
          />
        </Route>
        <h4>Pizzas:</h4>
        {pizzas.map((pizza) => {
          return (
            <ul>
              <li>Name: {pizza.name}</li>
              <li>Size: {pizza.size}</li>
              <li>Toppings:
                <ul>
                  <li>{pizza.toppings.cheese.value}</li>
                  <li>{pizza.toppings.pepperoni}</li>
                  <li>{pizza.toppings.veggie}</li>
                  <li>{pizza.toppings.vegan}</li>
                </ul>
              </li>
              <li>Special Instructions: {pizza.special}</li>
{              console.log("App -> pizza.toppings", pizza.toppings)
}
            </ul>
          );
        })}
      </div>
    </div>
  );

};
export default App;
