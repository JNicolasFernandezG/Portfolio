//vendors
import type React from "react";

//styles
import styles from"./Tarjetas.module.css";
import { body } from "framer-motion/client";


export const sobremiComponent: React.FC = () => {
    return (
        <body>
            <h2>
                Desarrollador Full Stack | Del Liderazgo a la Innovacion en Código
            </h2>
            <div className={styles['cards']}>
                <>
                <p className={styles['card-description']}>
                Como Desarrollador Full Stack, combino habilidades técnicas y liderazgo para crear soluciones innovadoras. Mi experiencia en gestión de equipos y proyectos me permite entregar resultados de alta calidad, optimizando procesos y fomentando la colaboración. Apasionado por la tecnología, busco constantemente nuevas formas de mejorar y adaptarme a las tendencias del sector.
                </p>
                <button className={styles['card-button']}>
                    LEER MAS
                </button>
                </>

                <>
                <h3 className={styles['contact-title']}>Contactemos Creando el Futuro, juntos</h3>
                <p className={styles['contact-info']}> 
                Email:
                Linkedin:
                Github:
                Twitter:
                </p>
                </>

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
        </body>
    )

}