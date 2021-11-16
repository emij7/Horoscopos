import React from 'react';
import githubLogo from '../../images/layout/github.png'
import linkedinLogo from '../../images/layout/linkedin.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="dedication">
                <h5>Hecho para Alme &#128147;</h5>
            </div>
            <div className="footer__links">
                <a className="footer__link--size" href="https://github.com/emij7" target="_blank" rel="noreferrer"><img src={githubLogo} alt="Github Logo"/></a>
                <a className="footer__link--size" href="https://linkedin.com/in/ignacio-emiliano-juarez/" target="_blank" rel="noreferrer"><img src={linkedinLogo} alt="Linkedin Logo"/></a>
            </div>
        </div>
    );
};

export default Footer;