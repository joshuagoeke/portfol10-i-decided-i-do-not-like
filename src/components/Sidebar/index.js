import './index.scss'
import {Link} from 'react-router-dom'
import joshface from '../../assets/images/JoshFace.jpg'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
    <div className='nav-bar'>
        <Link className='josh-face' to='/'>
            <img src={joshface} alt='joshface'/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
    </div> 
    
   ) 
}
export default Sidebar