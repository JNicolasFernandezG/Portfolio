//vendors
import type React from "react";
import {Reveal} from "react-awesome-reveal";

//styles
import styles from"./Tarjetas.module.css";
import "@/index.css";

//utils
import {descriptionText} from"./utils";
import {
    ANIMATION_DURATION, 
    CASCADE_DAMPING, 
    TRIGGER_ONCE,
    titleSlideInCentered, 
    cardFadeInUp
} from "@/config/animaciones";

export const SobremiComponent: React.FC = () => {
    return (
        <section id="sobreMi" className={styles['sobremi-section']}>
            <Reveal
                keyframes={titleSlideInCentered}
                duration={ANIMATION_DURATION}
                triggerOnce={TRIGGER_ONCE}
            >
            <h2 className={styles['tituloSobreMi']}>
                Desarrollador&nbsp;
                <span className='highlight-orangeT'>Full Stack</span>&nbsp;
                | Del&nbsp;
                <span className='highlight-orangeT'>Liderazgo</span>&nbsp;
                a la&nbsp;
                <span className='highlight-orangeT'>Innovacion</span>&nbsp;
                en&nbsp;
                <span className='highlight-orangeT'>Código</span>
            </h2>
            </Reveal>
            <div className={styles['cards']}>
            <Reveal
                keyframes={cardFadeInUp} 
                duration={ANIMATION_DURATION} 
                triggerOnce={TRIGGER_ONCE}
                cascade
                damping={CASCADE_DAMPING}
            >

                <div className={styles['card-description']}>
                <p className={styles['description']}>
                    {descriptionText.description}
                </p>
                </div>

                <div className={styles['aptitudes-card']}>
                    <p className={styles['aptitudes']}>
                        Experiencia trabajando en metodologías ágiles. Creo en la comunicación asertiva y el feedback constructivo como motores para el éxito del equipo.
                    </p>
                </div>

                <div className={styles['aptitudes-card']}>
                    <p className={styles['aptitudes']}>
                    100% resiliencia
                    <br />
                    "Superando desafíos con persistencia."
                    </p>
                </div>

                <div className={styles['aptitudes-card']}>
                    <p className={styles['aptitudes']}>
                    Agilidad y Adaptabilidad
                    <br />
                    "Aprendizaje continuo en entornos dinámicos."
                    </p>
                </div>
            </Reveal>
            </div>
        </section>
    )

}

export default SobremiComponent;