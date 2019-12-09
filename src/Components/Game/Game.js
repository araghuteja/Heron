import React from 'react'
import { navigate } from 'hookrouter';
import {getRandomNumbers} from '../../Utilities/RandomNumberGenerator'

class Game extends React.Component {

    constructor(props) {
        super(props);
        console.log(this)
        console.log(this.props)
        console.log(window.history)
    }

    rand() {
        this.setState({ randomNumber: getRandomNumbers(5) } );
        console.log(this.state.randomNumber);
    }

    render() {
        return (
            <div className="Game">
                <h1>Game</h1>
                <button onClick={() => navigate('/')}>Main Menu</button>

                {/*<hr/>
                <span>{this.state.includeNegatives.toString()}</span>
                <span>{this.state.showMCQs.toString()}</span>
                <span>{this.state.timer.toString()}</span>

                <hr/>
                <button onClick={() => this.rand(1)}>Random</button><br/>
                <span>{this.state.randomNumber}</span>*/}
            </div>
        );

    }
}

export default Game
