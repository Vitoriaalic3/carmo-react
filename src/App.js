import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Admin from './components/pages/Admin'
import Carga from './components/pages/Carga'
import Ajuda from './components/pages/Ajuda'
import Relatorio from './components/pages/Relatorio'
import Requisitante from './components/pages/Requisitante'



import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
     <Navbar />

    <Container customClass="min-height">
        <Routes>
          <Route path="/" element={ < Requisitante />}></Route>
          {/* <Route path="/Carga" element={<Carga/>}></Route>
          <Route path="/Relatorio" element={<Relatorio/>}></Route>
          <Route path="/Ajuda" element={<Ajuda/>}></Route>
          <Route path="/Admin" element={<Admin/>}></Route> */}
        </Routes>
    </Container>

     {/* <Footer /> */}
    </Router>
  );
}

export default App;
