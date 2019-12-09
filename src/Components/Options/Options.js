import React from 'react'
import { navigate } from 'hookrouter';

class Options extends React.Component {

    render() {
        return (
            <div className="Options">
                <h1>Options</h1>
                <button onClick={() => navigate('/')}>Main Menu</button>
            </div>
        );

    }
}

export default Options
