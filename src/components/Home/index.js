import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';

const Home = () =>{
  const[letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'J', 'o', 's', 'h', '.'] 
  const makeThingsArr = [ 'A', 'n', 'd', ' ', 'I',' ', 'm', 'a', 'k', 'e', 
  ' ', 't', 'h', 'i', 'n','g', 's', '.']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

    return (
      <div className="container home-page">
        <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <span className={`${letterClass} _13`}>!</span>
              <br/>
              <span className={`${letterClass} _14`}>I</span>
              <span className={`${letterClass} _15`}>'</span>
              <span className={`${letterClass} _16`}>m</span>  
            <AnimatedLetters letterClass={letterClass}
            strArray={nameArray}
            idx={15} />
            <br/>
            <AnimatedLetters letterClass={letterClass}
            strArray={makeThingsArr}
            idx={15} /></h1>
            <h2>Web Developer / Data Analyst / Math Educator</h2>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
        </div>      
      </div>
    )
}
export default Home;

// const makeString = "And I make things."

// console.log(makeString.split(''))