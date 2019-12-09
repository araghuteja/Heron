import React from 'react'
import { useHistory } from "react-router-dom";

class NotFound extends React.Component {

    constructor(props) {
        super(props);
        console.log(this)
        console.log(this.props)
        console.log(window.history)
    }

    render() {
        const history = useHistory();

        return (
            <div className="NotFound">
                <h1>Not Found</h1>
                <button onClick={() => history.push('/')}>Main Menu</button>
            </div>
        );

    }
}

export default NotFound
