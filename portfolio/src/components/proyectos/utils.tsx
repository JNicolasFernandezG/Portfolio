import React, { type ReactNode } from 'react';

import proyectoImage4 from '@/assets/proyectoImage4.png';
import proyectoImage3 from '@/assets/proyectoImage3.png';
import proyectoImage2 from '@/assets/proyectoImage2.png';
import proyectoImage1 from '@/assets/proyectoImage1.png';

import "@/index.css"

import { type Project} from './Project';



const Highlight = ({ children }: { children: ReactNode }) => (
    <span className="highlight-orange">{children}</span>
);

const desc1 = (
    <>
        Nuestra plataforma está diseñada específicamente para empoderar a agentes y corredores inmobiliarios a establecer una fuerte presencia digital de manera autónoma y profesional. El núcleo de nuestro servicio es permitirle 
        <Highlight> crear y gestionar su propio sitio web personalizado </Highlight> 
        sin requerir ningún tipo de 
        <Highlight> conocimiento técnico avanzado </Highlight> 
        en programación o diseño web.
    </>
);

const desc2 = (
    <>
        El diseño se centra en la <Highlight>simplicidad y la eficiencia</Highlight>, y esto comienza desde el primer contacto. Entendemos que su tiempo es valioso, por eso hemos creado una <Highlight> sencilla forma de crear una cuenta </Highlight> que le garantiza un <Highlight> acceso casi instantáneo </Highlight> a todas las herramientas de la plataforma.
    </>
);

const desc3 = (
    <>
        <Highlight>Simplificar la gestión de inventario</Highlight>. Nuestro diseño está optimizado para eliminar la complejidad de la <Highlight>administración de propiedades</Highlight>, permitiendo a los agentes invertir su tiempo en <Highlight>cerrar ventas</Highlight>, no en trámites digitales.
    </>
);

const desc4 = (
    <>
        Entendemos que la <Highlight>marca de cada agente inmobiliario es única</Highlight>. Nuestra plataforma no solo le proporciona un sitio web, sino una herramienta <Highlight> completamente personalizable </Highlight> diseñada para adaptarse a su identidad, su <Highlight>inventario específico</Highlight> y la forma en que usted interactúa con sus clientes.
    </>
);

export const ProjectsUtils: Project[] = [
    {id: 1, title: "Kassap.", image: proyectoImage4 , description: desc1},
    {id: 2, title: "Kassap.", image: proyectoImage3 , description: desc2},
    {id: 3, title: "Kassap.", image: proyectoImage2 , description: desc3},
    {id: 4, title: "Kassap.", image: proyectoImage1 , description: desc4},
];