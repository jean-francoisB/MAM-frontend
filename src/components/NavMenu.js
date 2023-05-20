import React,{useState} from 'react';

import {
   Nav,
   NavItem,
   NavLink,
 
 } from 'reactstrap';

 function NavMenu() {
  const styles = {
    backgroundColor : "#F0C3B9",
    textColor : 'dark',
  }
  const [isOpen, setIsOpen] = useState(false);
  const displayMenu = () => {
    setIsOpen(!isOpen);
  }

  // Faire une croix pour fermer le menu burger

    return (
   
         <Nav style={{ backgroundColor: styles.backgroundColor ,color:styles.textColor}}>
          <a href="/" className={'d-md-none'} onClick={displayMenu}><img src='/menu.png' alt='menuBurger' width="30" height="30" /></a>

          <NavItem className={isOpen ? '' : 'd-none d-md-flex w-100 justify-content-between'} >
            <NavLink href="/"><img src="/logo_ilot.jpg" alt='logo' width="30" height="30" /></NavLink>
            <NavLink className='text-dark' href="/">Accueil</NavLink>
            <NavLink className='text-dark' href="/pedagogie/">Notre pédagogie</NavLink>
            <NavLink className='text-dark' href="/qui/">Qui sommes nous ?</NavLink>
            <NavLink className='text-dark' href="/modalites/">Nos modalités d'accueil</NavLink>
            <NavLink className='text-dark' href="/contact/">Contact</NavLink>
            <NavLink href="https://www.facebook.com/groups/302636787251962"><img src="/Logo-Facebook.png" alt='LogoFacebook' width="30" height="30"></img></NavLink>
            <NavLink className='text-dark' href="/login/">Connexion/inscription</NavLink>

          </NavItem>

        </Nav>
    )
   }

export default NavMenu;