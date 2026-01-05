import {type ReactNode} from 'react';
import { type Description} from "./Description";
import styles from"./Tarjetas.module.css";

const Highlight = ({ children }: { children: ReactNode }) => (
    <span className={styles['highlight-orange']}>{children}</span>
);
const text = ({ children }: { children: ReactNode }) => (
    <span className={styles.text}>{children}</span>
);

const desc = (
    <>
        <text>Desarrollador Full Stack certificado,</text>
        <Highlight>especializado en crear sistemas robustos y eficientes utilizando TypeScript, Next.js, NestJS y PostgreSQL.</Highlight>
        <text>Mi experiencia no se limita al código; mi pasado como líder de equipos me ha enseñado a gestionar proyectos, verificar tareas y</text>
        <Highlight>resolver problemas complejos con una visión integral.</Highlight>
    </>
)

export const descriptionText: Description = {description: desc};
