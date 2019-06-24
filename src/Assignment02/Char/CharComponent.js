import React from 'react';

const CharComponent = (props) =>{
    const  CharStyle = {
        display: "inline-block",
         padding: "16px",
         textAlign: "center", 
          margin: "16px", 
          border: "1px solid black"
       };
return(

    <div >
       <p style={CharStyle} onChange={props.change} onClick = {props.clicked}>{props.character}</p>
    </div>
)
}

export default CharComponent