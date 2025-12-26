//vendors
import React from 'react';
import {Reveal} from "react-awesome-reveal";
import Marquee from "react-fast-marquee";

//styiles
import styles from "./herramientas.module.css";

//utils
import {topTools, bottomTools, allToolsNames} from "./utils";
import { div } from 'framer-motion/client';


export const HerramientasComponent: React.FC = () => {
    return (
        <section className={styles['herramientas-section']}>
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

            <div className={styles.centerContent}>
                <h2 className={styles.title}>HERRAMIENTAS</h2>
                <div className={styles.textGrid}>
                    {allToolsNames.map((name, index) => (
                        <span key={index} className={styles.toolName}>{name}
                        </span>
                    ))}
                </div>
            </div>

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
        </section>
    )

};

export default HerramientasComponent;