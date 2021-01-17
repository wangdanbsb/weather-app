import React from 'react'

function WeatherComp(props) {
    return (
        <div className = "container">
            <div className = "cards">
                <h1>{props.city}, {props.country}</h1>

                <h5 className = "py-4"> 
                    <i className = "wi wi-day-sunny display-1"></i>
                </h5>

                <h1 className = "py-2">25 &deg;</h1>

                {/* show max and min temperature */}
                {minmaxTemp(24,30)}
                
                <h4 className="py-3">slow rain</h4>
            </div>
        </div>
    )
}

//function: displaying max and min temperature
function minmaxTemp(min, max) {
    return(
        <h3>
           <span className="px-4">{min} &deg;</span>
           <span className="px-4">{max} &deg;</span>
        </h3>
    )
}

export default WeatherComp
