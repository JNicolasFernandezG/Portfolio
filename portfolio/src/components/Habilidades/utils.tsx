import React from "react";
import "@/index.css";
import { type Habilidad } from "./Habilidades";

const Highlight = ({ children }: { children: React.ReactNode }) => (
    <span className="highlight-orange">{children}</span>
);

const titulo1 = (
    <Highlight>Liderazgo e iniciativa</Highlight>
)

const titulo2 = (
    <Highlight>Resolución Crítica de Conflictos</Highlight>
)

const titulo3 = (
    <Highlight>Adaptabilidad Operacional</Highlight>
)

const titulo4 = (
    <Highlight>Integridad y Control</Highlight>
)

const titulo5 = (
    <Highlight>Capacidad de Planificación y Organización</Highlight>
)

const titulo6 = (
    <Highlight>Toma de decisiones</Highlight>
)

const titulo7 = (
    <Highlight>Orientación a resultados</Highlight>
)

const titulo8 = (
    <Highlight>Pensamiento analítico / creativo</Highlight>
)

const titulo9 = (
    <Highlight>Trabajo en equipo y Comunicación eficaz</Highlight>
)


export const habilidadesData: Habilidad[] = [
    {id:1, title: titulo1},
    {id:2, title: titulo2},
    {id:3, title: titulo3},
    {id:4, title: titulo4},
    {id:5, title: titulo5},
    {id:6, title: titulo6},
    {id:7, title: titulo7},
    {id:8, title: titulo8},
    {id:9, title: titulo9}
]