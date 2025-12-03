// src/custom.d.ts

declare module '*.css' {
    const content: Record<string, string>;
    export default content;
}

// Allow importing Swiper's CSS entry points like 'swiper/css'
declare module 'swiper/*';