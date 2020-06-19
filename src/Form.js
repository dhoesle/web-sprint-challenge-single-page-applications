import React from 'react'
import './App.css';

export default function Form(props) {
    const { values, onInputChange, onSubmit, onCheckboxChange, errors } = props;
    return (
        <form className="form-container" onSubmit={onSubmit}>
          <div className="form-group inputs">
            <h1>Order Pizza Here</h1>
    
            <label>
              Name:&nbsp;
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={onInputChange}
                maxLength="100"
              />
            </label>
    
            <label htmlFor="specialInput">
              Special Instructions:&nbsp;
              <input
                id="specialInput"
                type="special"
                name="special"
                value={values.special}
                onChange={onInputChange}
              />
            </label>
    
            <label>
              Size:&nbsp;
              <select 
                name="size"
                value={values.size}
                onChange={onInputChange}
              >
                <option value="">-- Select a Size --</option>
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>
              </select>
            </label>
          </div>
          <div className='form-group checkboxes'>
                <h4>Toppings</h4>
                <label>Pepperoni 
                <input
                    name='pepperoni'
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.pepperoni}
                />
                </label>
                <label>Cheese 
                <input
                    name='cheese'
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.cheese}
                />
                </label>
                <label>Veggie 
                <input
                    name='veggie'
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.veggie}
                />
                </label>
                <label>Vegan 
                <input
                    name='vegan'
                    type="checkbox"
                    onChange={onCheckboxChange}
                    checked={values.toppings.vegan}
                />
                </label>
            </div>
          
    
          <div className="form-group submit">
            <h2>Order Pizza</h2>
            <button>submit</button>
          </div>
 
        </form>
      );
}