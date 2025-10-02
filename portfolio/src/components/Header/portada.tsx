//vendors
import type React from "react";

// img
import portada from "../../assets/PORTADA.png"
import linkedinIcon from "../../assets/LINKEDIN.png"
import twitterIcon from "../../assets/TWITTER.png"
import githubIcon from "../../assets/GITHUB.png"

// navbar
import { Navbar } from "./navbar";

// utils
import { social_links } from "./utils";

// styles
import "./portada.module.css"


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