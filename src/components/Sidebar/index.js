import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='Logo'/>
                <img className='sub-logo' src={LogoSubtitle} alt='slobodan'/>
            </Link>
            <nav>
                <NavLink exact = 'true' activeclassname = 'active' to='/'>
                    <FontAwesomeIcon icon={faHome} color = '#4d4d4e' />
                </NavLink>
                <NavLink exact = 'true' activeclassname = 'active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color = '#4d4d4e' />
                </NavLink>
                <NavLink exact = 'true' activeclassname = 'active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color = '#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        target='_blank'
                        rel='noreferrer'
                        href='https://twitter.com/dimyasvariant'
                        title='about Twitter'
                    >
                        <FontAwesomeIcon icon={faTwitter} color = '#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank'
                        rel='noreferrer'
                        href='https://github.com/illionillion'
                        title='about GitHub'
                    >
                        <FontAwesomeIcon icon={faGithub} color = '#4d4d4e'/>
                    </a>
                </li>
                <li>
                    <a 
                        target='_blank'
                        rel='noreferrer'
                        href='https://www.youtube.com/channel/UCUN7wqpoIb00mszKKzFn7HQ'
                        title='about Youtube'
                    >
                        <FontAwesomeIcon icon={faYoutube} color = '#4d4d4e'/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar