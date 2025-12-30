// vendors
import {Reveal} from "react-awesome-reveal";

// img
import logoIcon from "@/assets/LOGO.png"

// utils
import {
    ANIMATION_DURATION,
    CASCADE_DAMPING,
    TRIGGER_ONCE,
    titleSlideInCentered,
} from "@/config/animaciones.ts";

// styles
import styles from "./navbar.module.css"

export const Navbar = () => {
    return(
        
        <nav className={styles["navbar"]}>
        <div className={styles["logo-container"]}>
            <img src={logoIcon} alt="logo-NFG" />
        </div >
        <div className={styles["nav-links"]}>
        <Reveal
        cascade
        damping={CASCADE_DAMPING}
        keyframes={titleSlideInCentered}
        duration={ANIMATION_DURATION}
        triggerOnce={TRIGGER_ONCE}
        >
        <a href="#sobre-mi" className={styles["nav-item"]}>SOBRE MI</a>
        <a href="#proyectos" className={styles["nav-item"]}>PROYECTOS</a>
        <a href="#contactame" className={styles["nav-item"]}>EXPERIENCIA</a>
        <a href="#contactame" className={styles["nav-item"]}>EDUCACIÓN</a>
        <a href="#contactame" className={styles["nav-item"]}>HERRAMIENTAS</a>
        <a href="#contactame" className={styles["nav-item"]}>HABILIDADES</a>
        <a href="#contactame" className={styles["nav-item"]}>CONTACTAME</a>
    </Reveal>
        </div>
    </nav>
    )
}