import React from 'react'
import heroOfAlexandria from '../../Assets/Hero_of_Alexandria.png';
import { useHistory } from "react-router-dom";

class About extends React.Component {
    

    render() {
        const history = useHistory();

        return (
            <div className="About">
                <h1>About</h1>
                <button onClick={() => history.push("/")}>Main Menu</button>
                <hr/>
                <img src={heroOfAlexandria} alt={'Hero of Alexandria'}/>
                <h2>From Wikipedia</h2>
                <p>
                    Hero of Alexandria, also known as, Heron of Alexandria was a mathematician and engineer who was active
                    in his native city of Alexandria, Roman Egypt. He is considered the greatest experimenter of
                    antiquity and his work is representative of the Hellenistic scientific tradition.<br/>

                    Hero published a well-recognized description of a steam-powered device called an aeolipile
                    (sometimes called a "Hero engine"). Among his most famous inventions was a windwheel, constituting
                    the earliest instance of wind harnessing on land. He is said to have been a follower of the
                    atomists. In his work Mechanics, described the pantographs. Some of his ideas were derived from
                    the works of Ctesibius.<br/>

                    Much of Hero's original writings and designs have been lost, but some of his works were
                    preserved—mostly in manuscripts from the Eastern Roman Empire, and a smaller part in Latin or Arabic
                    translations.<br/>
                </p>

                <a style={{display: "table-cell"}} rel="noopener noreferrer" target="_blank" href='https://en.wikipedia.org/wiki/Hero_of_Alexandria'>Read More..</a>
            </div>
        );

    }
}

export default About
