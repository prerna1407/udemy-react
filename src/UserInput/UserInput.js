import React from 'react';
import '../users.css';
const UserInput =(props)=>{
        return(
            <div className="userInput">
                <input type = "text" onChange={props.change} value={props.name}></input>
            </div>
        )
}

export default UserInput