import logoIcon from "@/assets/LOGO.png"

// styles
import styles from "./navbar.module.css"

export const Navbar = () => {
    return(
        <nav className={styles["navbar"]}>
        <div className={styles["logo-container"]}>
            <img src={logoIcon} alt="logo-NFG" />
        </div >
        <div className="nav-links">
        <a href="#proyectos" className={styles["nav-item"]}>PROYECTOS</a>
        <a href="#sobre-mi" className={styles["nav-item"]}>SOBRE MI</a>
        <a href="#contactame" className={styles["nav-item"]}>CONTACTAME</a>
        </div>
    </nav>
    )
}