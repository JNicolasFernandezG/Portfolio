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

                <div className="experiencia-reparaciones">
                    <h3>
                        Técnico de Soporte | Independiente 
                        <br />
                        Feb 2017 - Oct 2019
                    </h3>
                    <p>
                        Logro Principal: Diagnóstico y reparación integral de hardware y software. Brindé soluciones técnicas personalizadas y mantuve una alta satisfacción del cliente, enfocándome en la optimización del rendimiento de los equipos.
                    </p>
                </div>

                <div className="experiencia-Ministerio">
                    <h3>
                        Oficial de Servicio | Ministerio de Seguridad 
                        <br />
                        Mar 2021 - Actualidad
                    </h3>
                    <p>
                        Logro Principal: Liderazgo en la resolución de problemas complejos y gestión de equipos a gran escala. Tomé decisiones estratégicas en entornos de alta presión para asegurar la eficiencia y el cumplimiento de objetivos.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default ExperienciaComponent;