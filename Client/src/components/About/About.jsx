import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";


import styles from './About.css'

export default function About(){
    return(
        <div className="aboutFlex">
            <div className='aboutCard'>
                <div className='aboutHeader'>
                <h2 className='aboutName'>David Del Toro</h2>
                </div>
                <img src="https://live.staticflickr.com/65535/53198011296_27301944cb_m.jpg" className="foto" alt="DDD" />
                <div className='aboutItems'>
                    <h2>Status: Alive</h2>
                    <h2>Species: human</h2>
                    <h2>Gender: Male</h2>
                    <h2>Origin: Henry</h2>
                </div>
                    <h2 className='aboutId'>0</h2>
            </div>
            <div className='myInfo'>
                <p>Hi, I'm David Del Toro. I'm a 25 years old full stack developer from Barranquilla, Colombia and I'm passionate about web desing and technology in general. Today I will like to present you my Rick & Morty project, I hope you like it as much as I enjoyed working on it.</p>
                <div className='icons'>
                <a href="https://github.com/Ddeltoro97"><FontAwesomeIcon icon={faGithub} style={{color: 'black', margin: 5}}/></a>
                <a href="http://www.linkedin.com/in/david-del-toro-8aa143102"><FontAwesomeIcon icon={faLinkedin} style={{color: 'black', margin: 5}}/></a>
                <a href="https://www.instagram.com/ddeltoro97/"><FontAwesomeIcon icon={faInstagram} style={{color: 'black', margin: 5}}/></a>
                </div>
                
            </div>
           
        
        </div>

    )
}



