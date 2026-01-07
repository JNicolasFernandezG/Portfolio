// vendors
import {Reveal} from "react-awesome-reveal";

// img
import logoIcon from "@/assets/LOGO.png"

// utils
import {
    ANIMATION_DURATION,
    CASCADE_DAMPING,
    titleSlideInCentered,
    TRIGGER_ONCE_HEADER,
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
        triggerOnce={TRIGGER_ONCE_HEADER}
        >
        <a href="#sobreMi" className={styles["nav-item"]}>SOBRE MI</a>
        <a href="#proyectos" className={styles["nav-item"]}>PROYECTOS</a>
        <a href="#experiencia" className={styles["nav-item"]}>EXPERIENCIA</a>
        <a href="#educacion" className={styles["nav-item"]}>EDUCACIÓN</a>
        <a href="#herramientas" className={styles["nav-item"]}>HERRAMIENTAS</a>
        <a href="#habilidades" className={styles["nav-item"]}>HABILIDADES</a>
    </Reveal>
        </div>
    </nav>
    )
}