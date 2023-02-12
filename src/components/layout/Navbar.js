import {Link} from 'react-router-dom'
import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logo.png'

function Navbar(){
return (

   <nav className={styles.navbar}>
    <Container>
    <Link to="/">
    <img src={logo} alt="carmo" />
    
    </Link>
    <h1> Requisição de Transporte de Carga</h1>
<ul className={styles.list}>
  

    <li className={styles.item}>  
    <Link to="/Admin">Administração  </Link>
    </li> 
    <li className={styles.item}>
    <Link to="/Relatorio">  Relatórios </Link>
    </li>
   
    <li className={styles.item}>
    <Link to="/Ajuda">Ajuda</Link>
    </li>
    {/* <li className={styles.item}>
    <Link to="/contact">Contact</Link>
    </li> */}
    
    
 
    
</ul>

    </Container>
   </nav>
)

}

export default Navbar