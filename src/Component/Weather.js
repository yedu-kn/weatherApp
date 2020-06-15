import React from 'react';

//layouting city name, weather icons and other parameters with respect to the props recieved from App.js

const Weather = props => (
        <div>
            {props.city && props.country &&
            <>
                <div className='cards'>

                    <h1 className='pb-2 px-3'>
                        {props.city}, {props.country}
                    </h1>

                    <h3 className="py-2">
                        {props.time}
                    </h3>

                    <h5 className="py-3">
                        <i className={`wi ${props.icon} display-1`}/>
                    </h5>

                    <h1 className="py-2">{Math.round(props.temp)}&deg;</h1>

                    <h3>
                        <span className='px-4'>{Math.round(props.tempMax)}&deg;</span>
                        <span className='px-4'>{Math.round(props.tempMin)}&deg;</span>
                    </h3>

                    <h4 className="py-2">
                        {props.description.charAt(0).toUpperCase() + props.description.slice(1)}
                    </h4>
                    
                    <h6 className='mb-5'>{props.humidity}%</h6>
            </div>
            </>}
            {props.error && <h3 className='py-5 errorStyle'>{props.error}</h3> }
        </div>
)

export default Weather;