import logoIcon from "../../assets/LOGO.png"

export const Navbar = () => {
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