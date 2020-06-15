import React from 'react';
import './form.style.css';

//layouting search field

const Form = props =>(
    <div className='container'>
        <form className='py-2' onSubmit={props.getWeather}>
            <div className='row'>
                <div className='col-md-3 offset-md-1'>
                    <input autoComplete='off' type="text" className='py-4 form-control' name="city" placeholder="City" />
                </div>
                <div className="col-md-3 ">
                    <input autoComplete='off' type="text" className='py-4 form-control' name="country" placeholder="Country" />
                </div>
                <div className="col-md-3 mt-md-0 text-md-left py-4">
                    <button className='btn btn-warning'>Get Weather</button>
                </div>
            </div>
        </form>
    </div>
)

export default Form;