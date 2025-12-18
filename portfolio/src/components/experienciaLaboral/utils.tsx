import React from "react";
import "@/index.css"
import { type Experiencia } from "./Experiencia";

const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="highlight-orange">{children}</span>
);


const titulo1 = (
    <>
    Oficial de Servicio | Ministerio de Seguridad
    <br />
    Mar 2021 - Dic 2025
    </>
);

const desc1 = (
    <>
    Logro Principal: <Highlight> Liderazgo en la resolución de problemas complejos y gestión de equipos a gran escala. </Highlight> Tomé decisiones estratégicas en entornos de alta presión para asegurar la eficiencia y el cumplimiento de objetivos.
    </>
);

const titulo2 = (
    <>
    Técnico de Soporte | Independiente
    <br />
    Feb 2017 - Oct 2019
    </>
);

const desc2 = (
    <>
    Logro Principal: <Highlight> Diagnóstico y reparación integral de hardware y software. </Highlight> Brindé soluciones técnicas personalizadas y mantuve una alta satisfacción del cliente, enfocándome en la optimización del rendimiento de los equipos
    </>
);

export const ExperienciaUtils: Experiencia[] = [
    {id: 1, title: titulo1, description: desc1},
    {id: 2, title: titulo2, description: desc2},
];

