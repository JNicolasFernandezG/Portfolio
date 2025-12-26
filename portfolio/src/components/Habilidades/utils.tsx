import React from "react";
import "@/index.css";
import { type Habilidad } from "./Habilidades";

const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="highlight-orange">{children}</span>
);

const titulo1 = (
    <Highlight>Liderazgo Estratégico</Highlight>
)

const titulo2 = (
    <Highlight>Disciplina y Ejecución Metódica</Highlight>
)

const titulo3 = (
    <Highlight>Resolución Crítica de Conflictos</Highlight>
)

const titulo4 = (
    <Highlight>Adaptabilidad Operacional</Highlight>
)

const titulo5 = (
    <Highlight>Integridad y Control</Highlight>
)

const titulo6 = (
    <Highlight>Comunicación Clara</Highlight    >
)

export const habilidadesData: Habilidad[] = [
    {id:1, title: titulo1, description: "Dirigir y controlar equipos numerosos, asegurando el cumplimiento de objetivos de alto impacto. "},
    {id:2, title: titulo2, description: "Aplicación de una metodología rigurosa para garantizar la precisión y la calidad en la implementación de código y estrategias."},
    {id:3, title: titulo3, description: "Capacidad probada para tomar decisiones rápidas y efectivas bajo presión en situaciones críticas."},
    {id:4, title: titulo4, description: "Facilidad para adaptarse rápidamente a nuevos entornos, protocolos o tecnologías, incluso en situaciones de alta demanda."},
    {id:5, title: titulo5, description: "Compromiso con la seguridad del sistema y capacidad para establecer altos estándares de control y verificación de tareas."},
    {id:6, title: titulo6, description: "Habilidad para comunicar información crítica de manera concisa y directa."}
]