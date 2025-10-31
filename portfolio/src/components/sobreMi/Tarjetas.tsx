//vendors
import type React from "react";

//styles
import styles from"./Tarjetas.module.css";

//utils
import { social_links } from "./utils";

export const SobremiComponent: React.FC = () => {
    return (
        <section className={styles['sobremi-section']}>
            <h2>
                Desarrollador Full Stack | Del Liderazgo a la Innovacion en Código
            </h2>
            <div className={styles['cards']}>
                
                <div className={styles['description-contact-column']}>
                <p className={styles['card-description']}>
                Desarrollador Full Stack certificado, especializado en crear sistemas robustos y eficientes utilizando TypeScript, Next.js, NestJS y PostgreSQL. Mi experiencia no se limita al código; mi pasado como líder de equipos me ha enseñado a gestionar proyectos, verificar tareas y resolver problemas complejos con una visión integral.
                </p>
                <button className={styles['card-button']}>
                    LEER MAS
                </button>

                <div className={styles['contact-card']}>
                <h3 className={styles['contact-title']}>Contactemos Creando el Futuro, juntos</h3>
                <p className={styles['contact-info']}> 
                    
                    <a href={`mailto:${social_links.email}`} target="_blank" className={styles["email"]} rel=" noopener noreferrer">
                    nicolas.fernandezGamarra@gmail.com
                </a>
                    <a href={social_links.linkedin} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    LINKEDIN
                </a>
                <a href={social_links.twitter} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    TWITTER
                </a>
                <a href={social_links.github} target="_blank" className={styles["social-icon"]} rel="noopener noreferrer">
                    GITHUB
                </a>

                </p>
                
                </div>

                </div>

                <>
                <p className={styles['aptitudes']}> 
                100% Comprometido | 100% Proactivo | 100% Innovador
                </p>
                </>

                <>
                <p className={styles['aptitudes']}> 
                100% Comprometido | 100% Proactivo | 100% Innovador
                </p>
                </>
            </div>
        </section>
    )

}

export default SobremiComponent;