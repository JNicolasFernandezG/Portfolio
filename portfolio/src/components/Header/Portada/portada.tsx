//vendors
import type React from "react";
import Reveal from "react-awesome-reveal";

// img
import portada from "@/assets/PORTADA.png"
import linkedinIcon from "@/assets/LINKEDIN.png"
import twitterIcon from "@/assets/TWITTER.png"
import githubIcon from "@/assets/GITHUB.png"

// navbar
import { Navbar } from "../Navbar/navbar";

// utils
import { social_links } from "./utils";
import {
    ANIMATION_DURATION,
    CASCADE_DAMPING,
    TRIGGER_ONCE,
    titleSlideInCentered,
    cardFadeInUp,
} from "@/config/animaciones.ts";

// styles
import styles from"./portada.module.css"
// import Reveal from "react-awesome-reveal";


export const PortadaComponent: React.FC = () => {

    
    return (
        <header className={styles["portada-header"]}>
            <img 
                src={portada} 
                alt="Imagen de Portada - Desarrollador Full Stack" 
                className={`${styles["portada-imagen"]} ${styles["glitch-effect"]}`}
            />
                <Navbar/>
            
            <Reveal
                keyframes={titleSlideInCentered}
                duration={ANIMATION_DURATION}
                triggerOnce={TRIGGER_ONCE}
            >
            // <div className={styles["social-links"]}>
                <a href={social_links.linkedin} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LOGO-LINKEDIN" className={styles["social-media-logo"]}/>
                    LINKEDIN
                </a>
                <a href={social_links.twitter} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    <img src={twitterIcon} alt="LOGO-TWITTER" className={styles["social-media-logo"]}/>
                    TWITTER
                </a>
                <a href={social_links.github} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    <img src={githubIcon} alt="LOGO-GITHUB" className={styles["social-media-logo"]}/>
                    GITHUB
                </a>
            </div>
            </Reveal>

        <div className={styles["email-contact"]}>
            <a href={`mailto:${social_links.email}`} target="_blank" className={styles["email"]} rel=" noopener noreferrer">
                nicolas.fernandezGamarra@gmail.com
            </a>
        </div>

        </header>
    )}


export default PortadaComponent;