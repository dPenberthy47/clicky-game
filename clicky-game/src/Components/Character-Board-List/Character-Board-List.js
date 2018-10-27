 import React, { Component } from 'react';

 import "./Character-Board-List.css";

 const CharacterBoardList = props => {


    return (
        <div className="card">
            <div className="img-container">
                <img onClick={props.handleClicked} alt={props.name} src={props.image} />
                {console.log(props)}
            </div>
        </div>
    );
 };

 export default CharacterBoardList;