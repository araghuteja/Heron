import React from 'react'
import { useHistory } from "react-router-dom";

class MainMenu extends React.Component {

    render() {
        const history = useHistory();

        return (
        <div className="MainMenu">
            <h1>Main Menu</h1>

            <button onClick={() => history.push('/start')}>Start Menu</button>
            <button onClick={() => history.push('scoreboard')}>Score Board</button>
            <button onClick={() => history.push('options')}>Options</button>
            <button onClick={() => history.push('about')}>About</button>
        </div>
        );
    }
}

export default MainMenu
