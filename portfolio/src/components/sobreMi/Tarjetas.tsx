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
                Desarrollador&nbsp;
                <span className={styles['highlight-orange']}>Full Stack</span>&nbsp;
                | Del&nbsp;
                <span className={styles['highlight-orange']}>Liderazgo</span>&nbsp;
                a la&nbsp;
                <span className={styles['highlight-orange']}>Innovacion</span>&nbsp;
                en&nbsp;
                <span className={styles['highlight-orange']}>Código</span>
            </h2>
            <div className={styles['cards']}>
                
                <div className={styles['card-description']}>
                <p className={styles['description']}>
                Desarrollador Full Stack certificado,&nbsp;
                <span className={styles['highlight-orange']}>especializado en crear sistemas robustos y eficientes utilizando TypeScript, Next.js, NestJS y PostgreSQL.</span>&nbsp;
                Mi experiencia no se limita al código; mi pasado como líder de equipos me ha enseñado a gestionar proyectos, verificar tareas y&nbsp;
                <span className={styles['highlight-orange']}>resolver problemas complejos con una visión integral.</span>
                </p>
                <button className={styles['card-button']}>
                    LEER MAS
                </button>
                </div>

                <div className={styles['aptitudes-card']}>
                    <p className={styles['aptitudes']}>
                    100% resiliencia
                    <br />
                    "Superando desafíos con persistencia."
                    </p>
                </div>
                
                <div className={styles['contact-card']}>
                <h3 className={styles['contact-title']}>Contactemos Creando el Futuro, juntos</h3>

                    <a href={`mailto:${social_links.email}`} target="_blank" className={styles["contact-text"]} rel=" noopener noreferrer">
                    CORREO
                </a>
                    <a href={social_links.linkedin} target="_blank" className={styles["contact-text"]} rel="noopener noreferrer">
                    LINKEDIN
                </a>
                <a href={social_links.twitter} target="_blank" className={styles["contact-text"]} rel="noopener noreferrer">
                    TWITTER
                </a>
                <a href={social_links.github} target="_blank" className={styles["contact-text"]} rel="noopener noreferrer">
                    GITHUB
                </a>
                </div>

                <div className={styles['aptitudes-card']}>
                    <p className={styles['aptitudes']}>
                    Agilidad y Adaptabilidad
                    <br />
                    "Aprendizaje continuo en entornos dinámicos."
                    </p>
                </div>

            </div>
        </section>
    )

}

export default SobremiComponent;