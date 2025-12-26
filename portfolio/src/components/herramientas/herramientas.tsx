//vendors
import React from 'react';
import {Reveal} from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

//styiles
import styles from "./herramientas.module.css";

//utils
import {topTools, bottomTools, allToolsNames} from "./utils";
import{
    ANIMATION_DURATION,
    TRIGGER_ONCE,
    titleSlideInCentered,
    cardFadeInUp,
    CASCADE_DAMPING
} from "@/config/animaciones";


export const HerramientasComponent: React.FC = () => {
    return (
        <section className={styles['herramientas-section']}>

            <Reveal
            keyframes={cardFadeInUp}
            duration={ANIMATION_DURATION}
            triggerOnce={TRIGGER_ONCE}
            cascade
            damping={CASCADE_DAMPING}
            >
            <Marquee speed={90} direction='left' pauseOnHover={true} gradient={false}>
                {topTools.map((tool, index) => (
                    <div key={index} className={styles.glassCard}>
                        <img src={tool.icon} alt="tool" className={styles.marqueeImg}/>
                    </div>
                ))}
            </Marquee>
                        <Marquee speed={50} direction='right' pauseOnHover={true} gradient={false}>
                {bottomTools.map((tool, index) => (
                    <div key={index} className={styles.glassCard}>
                        <img src={tool.icon} alt="tool" className={styles.marqueeImg}/>
                    </div>
                ))}
            </Marquee>

            </Reveal>
            <Reveal
                keyframes={titleSlideInCentered}
                duration={ANIMATION_DURATION}
                triggerOnce={TRIGGER_ONCE}
            >
            <div className={styles.centerContent}>
                <h2 className={styles.title}>HERRAMIENTAS</h2>
                <div className={styles.textGrid}>
                    {allToolsNames.map((name, index) => (
                        <span key={index} className={styles.toolName}>{name}
                        </span>
                    ))}
                </div>
            </div>
            </Reveal>

            <Reveal
            keyframes={cardFadeInUp}
            duration={ANIMATION_DURATION}
            triggerOnce={TRIGGER_ONCE}
            cascade
            damping={CASCADE_DAMPING}
            >
            <Marquee speed={90} direction='right' pauseOnHover={true} gradient={false}>
                {bottomTools.map((tool, index) => (
                    <div key={index} className={styles.glassCard}>
                        <img src={tool.icon} alt="tool" className={styles.marqueeImg}/>
                    </div>
                ))}
            </Marquee>
                        <Marquee speed={50} direction='left' pauseOnHover={true} gradient={false}>
                {topTools.map((tool, index) => (
                    <div key={index} className={styles.glassCard}>
                        <img src={tool.icon} alt="tool" className={styles.marqueeImg}/>
                    </div>
                ))}
            </Marquee>
            </Reveal>
        </section>
    )

};

export default HerramientasComponent;