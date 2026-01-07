
import PortadaComponent from './components/Header/Portada/portada';
import SobremiComponent from './components/sobreMi/Tarjetas';
import ProyectosComponent from './components/proyectos/proyectos';
import ExperienciaComponent from './components/experienciaLaboral/experienciaLaboral';
import EducacionComponent from './components/educacion/miEducacion';
import HerramientasComponent from './components/herramientas/herramientas';
import HabilidadesComponent from './components/Habilidades/habilidates';

import ScrollNavbar from './components/ScrollNavbar/ScrollNavbar'
import './index.css';

function App() {
  const sections = ['inicio','sobreMi', 'proyectos', 'experiencia', 'educacion', 'herramientas', 'habilidades'];

  return(

    <>
    <ScrollNavbar sectionIds={sections} />
    <main className='scroll-snap-container'>
        <section id="inicio"><PortadaComponent/></section>
        <section id="sobremi"><SobremiComponent/></section>
        <section id="proyectos"><ProyectosComponent/></section>
        <section id="experiencia"><ExperienciaComponent/></section>
        <section id="educacion"><EducacionComponent/></section>
        <section id="herramientas"><HerramientasComponent/></section>
        <section id="habilidades"><HabilidadesComponent/></section>
    </main>
    </>

  )
}

export default App
