import React, { Component } from 'react';

import "./Character-Board.css";


import CharacterBoardList from '../Character-Board-List/Character-Board-List';
import CharacterBoardScore from '../Character-Board-Score/Character-Board-Score';
import characters from '../characters.json';


class CharacterBoard extends Component {
    

        state = {
            characters,
            handleClick() {
                this.setState({ clicked: true })
            },
            score: 0
        }

    render() {
        return (
            <div>
                
                <CharacterBoardScore />
                <div id="cards">
                    <ul>
                    {this.state.characters.map((character, i) => (
                        <CharacterBoardList
                            key = {i}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            clicked={false}
                            handleClick
                        />
                    ))}
                    </ul>
                </div>
            </div>

        );
    }
}

export default CharacterBoard;
