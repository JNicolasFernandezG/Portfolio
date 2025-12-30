//vendors
import React from "react";

// styles
import styles from "./contactame.module.css";

// img
import linkedinIcon from "@/assets/LINKEDIN.png"
import twitterIcon from "@/assets/TWITTER.png"
import githubIcon from "@/assets/GITHUB.png"
import correoIcon from "@/assets/CORREO.png"

//utils
import { social_links } from "../Header/Portada/utils";

export const ContactameComponent: React.FC = () => {
    return (
        <section id="contactame" className={styles["contactame-section"]}>
            <h2 className={styles.titulo}>Contáctame</h2>
            <div className={styles["social-links"]}>
                
                <div
                className={styles["social-link"]}>
                <a href={social_links.linkedin} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LOGO-LINKEDIN" className={styles["social-media-logo"]}/>
                    LINKEDIN
                </a>
                </div>

                <div className={styles["social-link"]}>
                <a href={social_links.twitter} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    <img src={twitterIcon} alt="LOGO-TWITTER" className={styles["social-media-logo"]}/>
                    TWITTER
                </a>
                </div>

                <div className={styles["social-link"]}>
                <a href={social_links.github} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    <img src={githubIcon} alt="LOGO-GITHUB" className={styles["social-media-logo"]}/>
                    GITHUB
                </a>
                </div>

            <div className={styles["social-link"]}>
            <a href={`mailto:${social_links.email}`} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                <img src={correoIcon} alt="LOGO-CORREO" className={styles["social-media-logo"]}/>
                CORREO
            </a>
            </div>


            </div>
        </section>
    )}

export default ContactameComponent;