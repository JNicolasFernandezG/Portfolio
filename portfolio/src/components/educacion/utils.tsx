import React from "react";
import "@/index.css";
import { type Educacion } from "./Educacion";


const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="highlight-orange">{children}</span>
);

const titulo1 = (
    <>
    Henry | Full Stack Developer
    <br />
    Marzo - Julio 2025
    </>
);

const desc1 = (
    <>
    Descripción: Durante mi formación en el bootcamp de Henry, transformé la teoría en práctica construyendo aplicaciones web completas. Aprendí a integrar <Highlight>tecnologías de backend y frontend</Highlight> para resolver problemas complejos y crear soluciones digitales funcionales.
    </>
);   

const titulo2 = (
    <>
    UAI | Desarrollo de Videojuegos y Gestión de Proyectos
    <br />
    2019 - 2020
    </>
);

const desc2 = (
    <>
    Descripción: Durante mi paso por la UAI, cursé la carrera de Desarrollo de Videojuegos, perfeccioné mis habilidades en programación orientada a objetos, adquirí conocimientos clave en la gestión de proyectos, desde la <Highlight>identidad de marca hasta el análisis estratégico de negocios.</Highlight>
    </>
);

const titulo3 = (
    <>
    Da Vinci | Carrera de Videojuegos
    <br />
    2017 - 2019
    </>
);

const desc3 = (
    <>
    Descripción: En Da Vinci, mi formación se centró en el desarrollo integral de videojuegos. Adquirí conocimientos en <Highlight>programación orientada a objetos, animación, modelado 3D, diseño e ilustración</Highlight>, lo que me proporcionó una base sólida para entender la creación de proyectos digitales complejos desde múltiples perspectivas.
    </>
);

const titulo4 = (
    <>
    Técnico Superior en Seguridad Pública
    <br />
    Escuela de Policía "Juan Vucetich"
    <br />
    Marzo - Diciembre 2023
    </>
);

const desc4 = (
    <>
    Enfoque en la planificación y ejecución de estrategias complejas, desarrollando una <Highlight>mentalidad analítica y de resolución de problemas bajo presión.</Highlight>
    </>
);

const titulo5 = (
    <>
    Auxiliar en Seguridad Pública
    <br />
    Escuela de Policía "Juan Vucetich"
    <br />
    Marzo - Diciembre 2021
    </>
);  

const desc5 = (
    <>
    Formación en protocolos, operaciones y toma de decisiones rápidas. Adquirí experiencia en la <Highlight>ejecución de tareas de forma metódica</Highlight> y en el <Highlight>trabajo en equipo</Highlight> en entornos de alta demanda.
    </>
);  

const titulo6 = (
    <>
    Curso de Operaciones Tácticas
    <br />
    Superintendencia de Fuerzas de Operaciones Especiales
    <br />
    Abril - Julio 2022
    </>
);

const desc6 = (
    <>
    Entrenamiento en la gestión de situaciones críticas y la respuesta rápida. Mi aprendizaje se centró en la <Highlight>ejecución precisa de estrategias y en la adaptabilidad a nuevos desafíos.</Highlight>
    </>
);  


export const EducacionUtils: Educacion[] = [
    {id: 1, title: titulo1, description: desc1},
    {id: 2, title: titulo2, description: desc2},
    {id: 3, title: titulo3, description: desc3},
    {id: 4, title: titulo4, description: desc4},
    {id: 5, title: titulo5, description: desc5},
    {id: 6, title: titulo6, description: desc6},
];