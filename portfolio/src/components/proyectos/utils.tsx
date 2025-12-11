import React from 'react';

import proyectoImage4 from '@/assets/proyectoImage4.png';
import proyectoImage3 from '@/assets/proyectoImage3.png';
import proyectoImage2 from '@/assets/proyectoImage2.png';
import proyectoImage1 from '@/assets/proyectoImage1.png';


interface Project {
    id: number;
    title: string;
    image: string;
    description: React.ReactNode;
}

export const ProjectsUtils = [
    {id: 1, title: "Kassap.", image: proyectoImage4 , description: descripcionProyecto},
    {id: 2, title: "Kassap.", image: proyectoImage3 , description: "El diseño se centra en la simplicidad y la eficiencia, y esto comienza desde el primer contacto. Entendemos que su tiempo es valioso, por eso hemos creado una sencilla forma de crear una cuenta que le garantiza un acceso casi instantáneo a todas las herramientas de la plataforma."},
    {id: 3, title: "Kassap.", image: proyectoImage2 , description: "simplificar la gestión de inventario. Nuestro diseño está optimizado para eliminar la complejidad de la administración de propiedades, permitiendo a los agentes invertir su tiempo en cerrar ventas, no en trámites digitales."},
    {id: 4, title: "Kassap.", image: proyectoImage1 , description: "Entendemos que la marca de cada agente inmobiliario es única. Nuestra plataforma no solo le proporciona un sitio web, sino una herramienta completamente personalizable diseñada para adaptarse a su identidad, su inventario específico y la forma en que usted interactúa con sus clientes."},
];

const descripcionProyecto = (
    
    Desarrollador Full Stack certificado,&nbsp;
                Desarrollador&nbsp;
                <span className={styles['highlight-orangeT']}>Full Stack</span>&nbsp;
                | Del&nbsp;
                <span className={styles['highlight-orangeT']}>Liderazgo</span>&nbsp;
                a la&nbsp;
                <span className={styles['highlight-orangeT']}>Innovacion</span>&nbsp;
                en&nbsp;
                <span className={styles['highlight-orangeT']}>Código</span>
);