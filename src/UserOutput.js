import React from 'react';

const UserOutput = (props) =>{
  const  style = {
        font : 'inherit',
        size : 'solid',
        margin : '15px',
        padding : "16px",
        "text-align": "center"
    
      }
        return(
            <div className="userOutput">
                <p style = {style}> 
                    {props.name} 
                </p>
                <p> PQRS</p>
            </div>
        )
}

export default UserOutput;