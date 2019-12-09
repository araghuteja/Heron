import React from 'react'
import { navigate } from 'hookrouter';

class Scoreboard extends React.Component {

    render() {
        return (
            <div className="Scoreboard">
                <h1>Score Board</h1>
                <button onClick={() => navigate('/')}>Main Menu</button>
            </div>
        );

    }
}

export default Scoreboard
