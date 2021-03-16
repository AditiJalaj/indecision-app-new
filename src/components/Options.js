import React from 'react'
import Option from './Option.js'

const Options=(props)=>{
    return (
        <div>
        <div className='widget-header'>
        <h3 className='widget-header__title'>Your options</h3>
        <button className='button button--link'
        onClick={props.handleDeleteOption}>Remove All</button>
        </div>
        
        {props.options!==null && props.options.length===0 && <p className='widget__message'>Please add an Option to get Started</p>}
        {props.options.map((option,index)=><Option
            key={option} 
            optionT={option}
            count={index+1}
            handleRemoveSingleOption={props.handleRemoveSingleOption}
        />
        )}
       
        </div>
    )
}
export default Options