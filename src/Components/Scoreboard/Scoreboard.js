import React from 'react'
import { useHistory } from "react-router-dom";

class Scoreboard extends React.Component {

    render() {
        const history = useHistory();

        return (
            <div className="Scoreboard">
                <h1>Score Board</h1>
                <button onClick={() => history.push('/')}>Main Menu</button>
            </div>
        );

    }
}

export default Scoreboard
