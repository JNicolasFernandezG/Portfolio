import { type ReactNode } from 'react';

import proyectoImage4 from '@/assets/proyectoImage4.png';
import proyectoImage3 from '@/assets/proyectoImage3.png';
import proyectoImage2 from '@/assets/proyectoImage2.png';
import proyectoImage1 from '@/assets/proyectoImage1.png';

import "@/index.css"

import { type Project} from './Project';



const Highlight = ({ children }: { children: ReactNode }) => (
    <span className="highlight-orange">{children}</span>
);

const Text = ({ children }: { children: ReactNode }) => (
    <span className="text">{children}</span>
);

const desc1 = (
    <>
        <Text>Nuestra plataforma está diseñada específicamente para empoderar a agentes y corredores inmobiliarios a establecer una fuerte presencia digital de manera autónoma y profesional. El núcleo de nuestro servicio es permitirle </Text>
        <Highlight> crear y gestionar su propio sitio web personalizado </Highlight> 
        <Text>sin requerir ningún tipo de </Text>
        <Highlight> conocimiento técnico avanzado </Highlight> 
        <Text>en programación o diseño web.</Text>
    </>
);

const desc2 = (
    <>
        <Text>El diseño se centra en la </Text> <Highlight>simplicidad y la eficiencia</Highlight><Text>, y esto comienza desde el primer contacto. Entendemos que su tiempo es valioso, por eso hemos creado una </Text><Highlight> sencilla forma de crear una cuenta </Highlight> <Text>que le garantiza un </Text><Highlight> acceso casi instantáneo </Highlight> <Text>a todas las herramientas de la plataforma.</Text>
    </>
);

const desc3 = (
    <>
        <Highlight>Simplificar la gestión de inventario</Highlight><Text>. Nuestro diseño está optimizado para eliminar la complejidad de la </Text><Highlight>administración de propiedades</Highlight><Text>, permitiendo a los agentes invertir su tiempo en </Text><Highlight>cerrar ventas</Highlight><Text>, no en trámites digitales.</Text>
    </>
);

const desc4 = (
    <>
        <Text>Entendemos que la </Text><Highlight>marca de cada agente inmobiliario es única</Highlight><Text>. Nuestra plataforma no solo le proporciona un sitio web, sino una herramienta </Text><Highlight> completamente personalizable </Highlight><Text> diseñada para adaptarse a su identidad, su </Text><Highlight>inventario específico</Highlight><Text> y la forma en que usted interactúa con sus clientes.</Text>
    </>
);

export const ProjectsUtils: Project[] = [
    {id: 1, title: "Kassap.", image: proyectoImage4 , description: desc1},
    {id: 2, title: "Kassap.", image: proyectoImage3 , description: desc2},
    {id: 3, title: "Kassap.", image: proyectoImage2 , description: desc3},
    {id: 4, title: "Kassap.", image: proyectoImage1 , description: desc4},
];