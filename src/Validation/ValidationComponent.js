import React from 'react';

const InputVarLength = (props) =>{
    let validationMessage = 'Text long enough';

    if (props.inputlength <= 5) {
        validationMessage = 'Text too short';
    }
return(
    <div>
        {props.inputlength}
        <br />
        <b>{validationMessage}</b>
    </div>
)
}

export default InputVarLength;;