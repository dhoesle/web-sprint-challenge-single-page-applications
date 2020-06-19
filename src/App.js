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
      setError("MUST FILL OUT NAME AND SIZE");
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
  const  toppings = pizzas.toppings
  console.log("App -> toppings", toppings)

 
  return (
    <div className='container'>
      <h1>Lambda Eats</h1>
      <div className="home-button">
        <Route path='/'>
          <Link to='/pizza'>OrderNow</Link>
        </Route>
        <Route path='/'>
          <Link to='/'>Home</Link>
        </Route>

        <Route path='/pizza'>
          <Form
            values={formValues}
            onInputChange={onInputChange}
            onSubmit={onSubmit}
            onCheckboxChange={onCheckboxChange}
          />
        </Route>
        <span style={{ color: "red" }}>{error}</span>

        <h4>Pizzas:</h4>
        {pizzas.map((pizza) => {
          const  toppings = pizzas.toppings

          return (
            <ul>
              <li>Name: {pizza.name}</li>
              <li>Size: {pizza.size}</li>
              <li>Toppings:
                <ul>
                  <li>{toppings}</li>
                  
                  
                </ul>
              </li>
              <li>Special Instructions: {pizza.special}</li>

            </ul>
          );
        })}
      </div>
    </div>
  );

};
export default App;
