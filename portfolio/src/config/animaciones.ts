
import { keyframes } from '@emotion/react';

// --- A. CONSTANTES DE CONFIGURACIÓN ---
export const ANIMATION_DURATION = 800; // Duración en milisegundos para todas las animaciones
export const CASCADE_DAMPING = 0.2;    // Retraso entre elementos en secuencia (cascade)
export const TRIGGER_ONCE = true;      // Controla si la animación se ejecuta solo una vez

// --- B. DEFINICIÓN DE KEYFRAMES ---

// 1. Título (Slide In desde Izquierda)
export const titleSlideInCentered = keyframes`
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

// 2. Tarjetas (Fade In Up)
export const cardFadeInUp = keyframes`
    from {
        opacity: 0;
        transform: scale(1) translateY(30px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
        visibility: visible;
    }
`;