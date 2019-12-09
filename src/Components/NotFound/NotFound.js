import React from 'react'
import { navigate } from 'hookrouter';

class NotFound extends React.Component {

    constructor(props) {
        super(props);
        console.log(this)
        console.log(this.props)
        console.log(window.history)
    }

    render() {
        return (
            <div className="NotFound">
                <h1>Not Found</h1>
                <button onClick={() => navigate('/')}>Main Menu</button>
            </div>
        );

    }
}

export default NotFound
