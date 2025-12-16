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
} from "@/config/animaciones.ts"

export const ExperienciaComponent: React.FC = () => {
    return (
        <section className={styles['experiencia-section']}>
            
            <div className="cards">
                <h2 className={styles['titulosobremi']}>
                    EXPERIENCIAS
                </h2>

                {ExperienciaUtils.map((experiencia) => (
                    <div 
                        key={experiencia.id} 
                        className={`experiencia-${experiencia.id === 1 ? 'reparaciones' : 'Ministerio'}`} 
                    >
                        <h3>
                            {experiencia.title}
                        </h3>
                        <p>
                            {experiencia.description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    )
}

export default ExperienciaComponent;