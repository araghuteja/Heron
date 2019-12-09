import React from 'react'
import ReactDOM from 'react-dom'
import {useRoutes, navigate} from 'hookrouter';

import About from "./Components/About/About";
import Game from "./Components/Game/Game";
import MainMenu from "./Components/MainMenu/MainMenu";
import NotFound from "./Components/NotFound/NotFound";
import Options from "./Components/Options/Options";
import StartMenu from "./Components/StartMenu/StartMenu";
import Scoreboard from "./Components/Scoreboard/Scoreboard";


const routes = {
    '/': () => <MainMenu />,
    '/start': () => <StartMenu />,
    '/game/:options*': () => ({options}) => <Game options={options} />,
    '/scoreboard': () => <Scoreboard />,
    '/options': () => <Options />,
    '/about': () => <About />
};

let initialLoad = true;

const App = () => {
    const routeResult = useRoutes(routes);

    if (initialLoad) {
        initialLoad = false;
        navigate('/');
    }

    return routeResult || <NotFound />;
}

ReactDOM.render(<App />, document.getElementById('root'))
