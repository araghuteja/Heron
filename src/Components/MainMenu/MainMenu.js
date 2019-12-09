import React from 'react'
import { navigate } from 'hookrouter';

class MainMenu extends React.Component {

    render() {
        return (
        <div className="MainMenu">
            <h1>Main Menu</h1>

            <button onClick={() => navigate('/start')}>Start Menu</button>
            <button onClick={() => navigate('scoreboard')}>Score Board</button>
            <button onClick={() => navigate('options')}>Options</button>
            <button onClick={() => navigate('about')}>About</button>
        </div>
        );
    }
}

export default MainMenu
