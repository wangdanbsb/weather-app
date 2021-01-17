import React from 'react'
import "./form.style.css"

function Form(props) {
    return (
        <div className = "container">
            <div>{props.error? error():null}</div>
            <form onSubmit = {props.loadweather}> 
                                                   {/* //点击button时，执行loadweather函数，获取数据 */}
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <input 
                        type="text" 
                        className="form-control" 
                        name = "city" 
                        autoComplete = "off"
                        placeholder = "City"/>
                    </div>
                    <div className="col-md-3">
                        <input 
                        type="text" 
                        className="form-control" 
                        name = "country" 
                        autoComplete = "off"
                        placeholder = "Country"/>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button className="btn btn-warning">get weather</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
function error () {
    return (
        <div className="alert alert-danger mx-5" role = "alert">
            Please enter city and country
        </div>
    )
}

export default Form
