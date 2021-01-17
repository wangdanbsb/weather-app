import React from 'react'

function WeatherComp() {
    return (
        <div className = "container">
            <div className = "cards">
                <h1>London</h1>
                <h5 className = "py-4"> 
                    <i className = "wi wi-day-sunny display-1"></i>
                </h5>
                <h1 className = "py-2">25 &deg;</h1>
                
            </div>
        </div>
    )
}

//display max and min temperature
function minmaxTemp(min, max) {
    return(
        <h3>
           
        </h3>
    )
}

export default WeatherComp
