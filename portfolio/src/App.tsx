
import PortadaComponent from './components/Header/Portada/portada';
import SobremiComponent from './components/sobreMi/Tarjetas';
import './index.css';

function App() {
  
  return(
    <main className='scroll-snap-container'>
      <PortadaComponent/>
      <SobremiComponent/>
    </main>

  )
}

export default App
