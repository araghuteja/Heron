import React from 'react'
import { useHistory } from "react-router-dom";

class Options extends React.Component {

    render() {
        const history = useHistory();

        return (
            <div className="Options">
                <h1>Options</h1>
                <button onClick={() => history.push('/')}>Main Menu</button>
            </div>
        );

    }
}

export default Options
