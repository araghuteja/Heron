import React from 'react'
import { useHistory } from "react-router-dom";

class StartMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            includeNegatives: false,
            showMCQs: false,
            timer: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const history = useHistory();

        return (
            <div className="StartMent">
                <h1>Start Menu</h1>
                <button onClick={() => history.push('/')}>Main Menu</button>
                <hr/>

                <button>+</button>
                <button>-</button>
                <button>X</button>
                <button>/</button>
                <button>Zen</button>

                <hr/>

                <label>
                    Include Negative Numbers
                    <input
                        name="includeNegatives"
                        type="checkbox"
                        checked={this.state.includeNegatives}
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    Show Multiple Choices
                    <input
                        name="showMCQs"
                        type="checkbox"
                        checked={this.state.showMCQs}
                        onChange={this.handleInputChange}/>
                </label>
                <label>
                    Use Timer
                    <input
                        name="timer"
                        type="checkbox"
                        checked={this.state.timer}
                        onChange={this.handleInputChange}/>
                </label>

                <hr/>
                    <button>Start Game</button>

            </div>
        );

    }
}

export default StartMenu
