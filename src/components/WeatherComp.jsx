import React from 'react'

function WeatherComp(props) {
    const {city, country, icon, celsius, temp_max,temp_min, description } = props
    return (
        <div className = "container">
            <div className = "cards">
                <h1>{city}, {country}</h1>

                <h5 className = "py-4"> 
                    <i className = {`wi ${icon} display-1`}></i>
                </h5>

                <h1 className = "py-2">{celsius} &deg;</h1>

                {/* show max and min temperature */}
                {minmaxTemp(temp_min,temp_max)}
                
                <h4 className="py-3">{description}</h4>
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
