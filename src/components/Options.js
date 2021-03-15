import React from 'react'
import Option from './Option.js'

const Options=(props)=>{
    return (
        <div>
        <button onClick={props.handleDeleteOption}>Remove All</button>
        {props.options!==null && props.options.length===0 && <p>Please add an Option to get Started</p>}
        {props.options.map((option)=><Option
            key={option} 
            optionT={option}
            handleRemoveSingleOption={props.handleRemoveSingleOption}
        />
        )}
       
        </div>
    )
}
export default Options