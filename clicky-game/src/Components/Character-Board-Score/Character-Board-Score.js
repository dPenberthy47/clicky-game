import React, { Component } from 'react';

import "./Character-Board-Score.css"

const CharacterBoardScore = props => {

    return (
        <div id="characterBoardScoreBar">
            <div id="gameTitle">
                <h2>Mad Men Match</h2>
            </div>
            <div id="scoreBoard">
            <h2>Score: <span>0</span> | Top Score: <span>0</span></h2>
            </div>
        </div>
            
    );
};

export default CharacterBoardScore;