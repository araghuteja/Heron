import React from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory } from "react-router-dom";

import About from "./Components/About/About";
import Game from "./Components/Game/Game";
import MainMenu from "./Components/MainMenu/MainMenu";
import NotFound from "./Components/NotFound/NotFound";
import Options from "./Components/Options/Options";
import StartMenu from "./Components/StartMenu/StartMenu";
import Scoreboard from "./Components/Scoreboard/Scoreboard";

let initialLoad = true;

const App = () => {
    const history = useHistory();

    if (initialLoad) {
        history.push('/');
        initialLoad = false;
    }

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MainMenu />
                </Route>
                <Route path="/start">
                    <StartMenu />
                </Route>
                <Route path="/game">
                    <Game />
                </Route>
                <Route path="/scoreboard">
                    <Scoreboard />
                </Route>
                <Route path="/options">
                    <Options />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
