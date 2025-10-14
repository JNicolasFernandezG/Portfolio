//vendors
import type React from "react";

// img
import portada from "@/assets/PORTADA.png"
import linkedinIcon from "@/assets/LINKEDIN.png"
import twitterIcon from "@/assets/TWITTER.png"
import githubIcon from "@/assets/GITHUB.png"

// navbar
import { Navbar } from "../Navbar/navbar";

// utils
import { social_links } from "./utils";

// styles
import styles from"./portada.module.css"


export const PortadaComponent: React.FC = () => {
    return (
        <header className={styles["portada-header"]}>
            <img src={portada} alt="Imagen de Portada - Desarrollador Full Stack" className={styles["portada-imagen"]}/>
            <Navbar/>
            <div className={styles["social-links"]}>
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


        <div className={styles["email-contact"]}>
            <a href={`mailto:${social_links.email}`} target="_blank" className={styles["email"]} rel=" noopener noreferrer">
                nicolas.fernandezGamarra@gmail.com
            </a>
        </div>

        </header>
    )
}

export default PortadaComponent;