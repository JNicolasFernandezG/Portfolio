// vendors
import type React from "react";
import { Reveal } from "react-awesome-reveal"; 


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation} from "swiper/modules";


// styles
import styles from "./proyectos.module.css";


// utils
import { ProjectsUtils } from "./utils";

export const proyextosComponent: React.FC = () => {
    return (
        <section className={styles['proyectos-section']}>
            <h2 className={styles['tituloProyectos']}>
                Proyectos
            </h2>

            <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={20}
            loop={true}
            navigation
            className={styles['proyectos-swiper-container']}
            >    
                {ProjectsUtils.map((project) => (
                    <SwiperSlide key={project.id}>

                        <div className={styles['slide-content']}>
                            <img src={project.image} 
                            alt={project.title} 
                            className={styles['slide-image']}
                            /> 
                        <div className={styles['slide-details']}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                        </div>
                    </SwiperSlide>
                ))}            
            </Swiper>


        </section>
    )

}




export default proyextosComponent;



