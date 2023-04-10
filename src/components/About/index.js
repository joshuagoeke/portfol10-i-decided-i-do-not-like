import { useEffect, useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { faPython, faReact, faHtml5, faCss3, faJsSquare, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const About = () => {

    const[letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 2000);
        
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <AnimatedLetters 
                    letterClass={letterClass}
                    strArray = {['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
            
              <p>Here's a bunch of text where I tell everyoone how awesome I am, even though I feel deep down it's a lie.</p>
              <p>Here's a bunch of text where I tell everyoone how awesome I am, even though I feel deep down it's a lie.</p>
              <p>Here's a bunch of text where I tell everyoone how awesome I am, even though I feel deep down it's a lie.</p>
            </div>

            <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#FFD343" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>

        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About

// strArray = "About me"

// console.log(strArray.split(''))