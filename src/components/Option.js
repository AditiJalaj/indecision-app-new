
import React from 'react';

 const Option=(props)=>{
    return(
        <div>{props.optionT}
        <button onClick={(e)=>{
            props.handleRemoveSingleOption(props.optionT)
        }}>Remove</button></div>
    )
}

export default Option