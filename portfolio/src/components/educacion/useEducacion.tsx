import { useState } from "react";
import { EducacionUtils } from "./utils";

export const useEducacion = (cartasPorPaginas: number = 3) => {
    const[pagina, setpaginas] = useState(0);

    const inicio = pagina * cartasPorPaginas;
    const fin = inicio + cartasPorPaginas;

    const educacionVisibles = EducacionUtils.slice(inicio, fin);
    
    const esUltimaPagina = fin >= EducacionUtils.length;
    
    const cambiarPagina = () => {
        if(esUltimaPagina){
            setpaginas(0);
        } else {
            setpaginas(pagina + 1);
        }
    };
    return {
        educacionVisibles,
        cambiarPagina,
        esUltimaPagina,
        pagina
    };
};