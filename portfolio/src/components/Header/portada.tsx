import type React from "react";
import portada from "./assets/PORTADA.png"
import logoIcon from "./assets/LOGO.png"
import linkedinIcon from "./assets/LINKEDIN.png"
import twitterIcon from "./assets/TWITTER.png"
import githubIcon from "./assets/GITHUB.png"


const social_links = {
    linkedin: 'https://www.linkedin.com/in/jorge-nicolas-fernandez-gamarra',
    twitter: 'https://x.com/NicFernandezG',
    github: 'https://github.com/JNicolasFernandezG',
    email: 'nicolas.fernandezgamarra@gmail.com'
}

const Navbar = () => {
    return(
        <nav className="navbar">
        <div className="logo-container">
            <img src={logoIcon} alt="logo-NFG" />
        </div >
        <div className="nav-links">
        <a href="#proyectos" className="nav-item">PROYECTOS</a>
        <a href="#sobre-mi" className="nav-item">SOBRE MI</a>
        <a href="#contactame" className="nav-item">CONTACTAME</a>
        </div>
    </nav>
    )
}

export const PortadaComponent: React.FC = () => {

    return (

        <header className="portada-header">
            <Navbar/>
        <div className="content-area">
            <img src={portada} alt="Imagen de Portada - Desarrollador Full Stack" className="portada-imagen"/>
            
            <div className="social-links">
                <a href={social_links.linkedin} target="_blank" className="social-icon" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LOGO-LINKEDIN" className="social-media-logo"/>
                    LINKEDIN
                </a>
                <a href={social_links.twitter} target="_blank" className="social-icon" rel="noopener noreferrer">
                    <img src={twitterIcon} alt="LOGO-TWITTER" className="social-media-logo"/>
                    TWITTER
                </a>
                <a href={social_links.github} target="_blank" className="social-icon" rel="noopener noreferrer">
                    <img src={githubIcon} alt="LOGO-GITHUB" className="social-media-icon"/>
                    GITHUB
                </a>
            </div>
        </div>

        <div className="email-contact">
            <a href={`mailto:${social_links.email}`} target="_blank" className="email" rel=" noopener noreferrer">
                nicolas.fernandezGamarra@gmail.com
            </a>
        </div>

        </header>
    )
}

export default PortadaComponent;