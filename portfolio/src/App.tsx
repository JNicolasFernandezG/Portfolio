
import PortadaComponent from './components/Header/Portada/portada';
import SobremiComponent from './components/sobreMi/Tarjetas';
import ProyectosComponent from './components/proyectos/proyectos';
import ExperienciaComponent from './components/experienciaLaboral/experienciaLaboral';
import EducacionComponent from './components/educacion/miEducacion';

import './index.css';

function App() {
  
  return(
    <main className='scroll-snap-container'>
      <PortadaComponent/>
      <SobremiComponent/>
      <ProyectosComponent/>
      <ExperienciaComponent/>
      <EducacionComponent/>
    </main>

  )
}

export default App
