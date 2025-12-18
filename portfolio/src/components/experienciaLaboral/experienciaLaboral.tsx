//vedors
import React from "react";
import { Reveal } from "react-awesome-reveal";

//styles
import styles from "./experiencia.module.css";

//utils
import { ExperienciaUtils } from "./utils";
import {
    ANIMATION_DURATION, 
    TRIGGER_ONCE,
    titleSlideInCentered, 
    cardFadeInUp,
    CASCADE_DAMPING,
} from "@/config/animaciones.ts"

export const ExperienciaComponent: React.FC = () => {
    return (

        <section className={styles['experiencia-section']}>
            <Reveal
                keyframes={titleSlideInCentered}
                duration={ANIMATION_DURATION}
                triggerOnce={TRIGGER_ONCE}
            >    
                <h2 className={styles['titulo']}>
                    EXPERIENCIAS
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
                {ExperienciaUtils.map((experiencia) => (
                    <div 
                        key={experiencia.id} 
                        className={styles[`experiencia-${experiencia.id === 1 ? 'reparaciones' : 'Ministerio'}`]} 
                    >
                        <h3>
                            {experiencia.title}
                        </h3>
                        <p>
                            {experiencia.description}
                        </p>
                    </div>
                ))}
            </Reveal>
            </div>
        </section>
    )
}

export default ExperienciaComponent;