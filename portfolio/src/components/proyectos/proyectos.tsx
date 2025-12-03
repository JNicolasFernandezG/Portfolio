// vendors
import type React from "react";
import { Reveal } from "react-awesome-reveal"; 


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";


// styles
import styles from "./proyectos.module.css";


// utils

export const proyextosComponent: React.FC = () => {
    return (
        <section className={styles['proyectos-section']}>
            <h2 className={styles['tituloProyectos']}>
                Proyectos
            </h2>
            <div className={styles['imagenesProyectos']}>
                
            </div>


        </section>
    )

}




export default proyextosComponent;



