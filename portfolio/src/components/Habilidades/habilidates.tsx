//vendors
import React from "react";
import { Reveal } from "react-awesome-reveal";

//styles
import styles from "./habilidades.module.css";

//utils
import { habilidadesData } from "./utils";
import {
    ANIMATION_DURATION, 
    TRIGGER_ONCE,
    titleSlideInCentered, 
    cardFadeInUp,
    CASCADE_DAMPING,
} from "@/config/animaciones.ts"

export const HabilidadesComponent: React.FC = () => {
    return(
        <section className={styles["habilidades-section"]}>
            <Reveal
            keyframes={titleSlideInCentered}
            duration={ANIMATION_DURATION}
            triggerOnce={TRIGGER_ONCE}
            >    
            <h2>
                HABILIDADES
            </h2>
            </Reveal>


            <div className={styles["habilidades-list"]}>
                <Reveal
                keyframes={cardFadeInUp} 
                duration={ANIMATION_DURATION} 
                triggerOnce={TRIGGER_ONCE}
                cascade
                damping={CASCADE_DAMPING}            
                >

                {habilidadesData.map((habilidad) => (
                    <div key={habilidad.id} className={styles["habilidad-item"]}>
                        <h3>
                            {habilidad.title}
                        </h3>
                        <p>{habilidad.description}</p>
                    </div>
                ))}
                </Reveal>
            </div>
        </section>
    )
}

export default HabilidadesComponent;