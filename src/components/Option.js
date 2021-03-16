import React from 'react';

 const Option=(props)=>{
    return(
        <div className='option'>
        <p className='option__text'>{props.count}. {props.optionT}</p>
        <button 
        className='button button--link'
        onClick={(e)=>{
            props.handleRemoveSingleOption(props.optionT)
        }}>Remove</button></div>
    )
}

export default Option