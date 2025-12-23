//vendors

import React from 'react';
import { Reveal } from 'react-awesome-reveal';

//styles
import styles from './educacion.module.css';

//utils
import { useEducacion } from './useEducacion';

import {
    ANIMATION_DURATION, 
    TRIGGER_ONCE,
    titleSlideInCentered, 
    cardFadeInUp,
    CASCADE_DAMPING,
} from "@/config/animaciones.ts"



export const EducacionComponent: React.FC = () => {
    const {educacionVisibles, cambiarPagina, esUltimaPagina, pagina} = useEducacion(3);
    
    return (
        <section className={styles['educacion-section']}>
            <Reveal
                keyframes={titleSlideInCentered}
                duration={ANIMATION_DURATION}
                triggerOnce={TRIGGER_ONCE}
            >    
                <h2 className={styles['titulo']}>
                    EDUCACIÒN
                </h2>
            </Reveal>
            <div className={styles['cards']}>
            <Reveal
            key={pagina}
            keyframes={cardFadeInUp}
            duration={ANIMATION_DURATION}
            triggerOnce={TRIGGER_ONCE}
            cascade
            damping={CASCADE_DAMPING}
            >
                {educacionVisibles.map((edu)=>(
                    <div key={edu.id} className={styles[`educacion-card`]}>
                        <h3>{edu.title}</h3>
                        <p>{edu.description}</p>
                    </div>
                ))}
                <div className={styles['container-boton']}>
                    <button 
                        className={styles['boton-cambiar-pagina']} onClick={cambiarPagina}>
                        {esUltimaPagina ? 'Volver al inicio' : 'Ver más'}
                    </button>
                </div>
            </Reveal>
            </div>

        </section>
    );
}

export default EducacionComponent;