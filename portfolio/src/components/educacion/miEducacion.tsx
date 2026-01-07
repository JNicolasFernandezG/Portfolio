//vendors

import React from 'react';
import { Reveal } from 'react-awesome-reveal';

//styles
import styles from './educacion.module.css';

//utils

import {
    ANIMATION_DURATION, 
    TRIGGER_ONCE,
    titleSlideInCentered, 
    cardFadeInUp,
    CASCADE_DAMPING,
} from "@/config/animaciones.ts"
import { EducacionUtils } from './utils';



export const EducacionComponent: React.FC = () => {
    
    return (
        <section id='educacion' className={styles['educacion-section']}>
            <Reveal
                keyframes={titleSlideInCentered}
                duration={ANIMATION_DURATION}
                triggerOnce={TRIGGER_ONCE}
            >    
                <h2 className={styles['titulo']}>
                    EDUCACIÓN
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
                {EducacionUtils.map((edu)=>(
                    <div key={edu.id} className={styles[`educacion-card`]}>
                        <h3>{edu.title}</h3>
                        <p>{edu.description}</p>
                    </div>
                ))}

            </Reveal>
            </div>

        </section>
    );
}

export default EducacionComponent;