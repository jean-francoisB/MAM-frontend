
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



function Navbar2() {
    const styles = {
        black: "#000",
        backgroundColor: "#F0C3B9",
        textColor: 'dark',
        noUnderline: 'none'
    }

    return (
        // <div style={{ backgroundColor: styles.backgroundColor }} className="px-2">
        //     <Link to="/"><img src="/papillon.jpg" alt='logo' width="40" height="40" /></Link>
        //     <Link className={styl.navbarLink} to="/">Accueil</Link>
        //     <Link className={styl.navbarLink} to="/pedagogie/">Notre pédagogie</Link>
        //     <Link className={styl.navbarLink} to="/qui/">Qui sommes nous ?</Link>
        //     <Link className={styl.navbarLink} to="/modalites/">Nos modalités d'accueil</Link>
        //     <Link className={styl.navbarLink} to="/contact/">Contact</Link>
        //     <Link to="https://www.facebook.com/groups/302636787251962"><img src="/Logo-Facebook.png" alt='LogoFacebook' width="30" height="30"></img></Link>
        //     <Link  className={styl.navbarLink} to="/login/">Connexion/inscription</Link>
        // </div>
        <Navbar expand="lg" style={{ backgroundColor: styles.backgroundColor }} className="px-2" >
            {/* <Container> */}
                <Navbar.Brand href="/"><img src="/papillon.jpg" alt='logo' width="40" height="40" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-around ">                    
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="/pedagogie/">Notre pédagogie</Nav.Link>
                        <Nav.Link href="/qui/">Qui sommes nous ?</Nav.Link>
                        <Nav.Link href="/modalites/">Nos modalités d'accueil</Nav.Link>
                        <Nav.Link href="/contact/">Contact</Nav.Link>
                        <Nav.Link href="https://www.facebook.com/groups/302636787251962"><img src="/Logo-Facebook.png" alt='LogoFacebook' width="30" height="30"></img></Nav.Link>
                        <Nav.Link href="/login/">Connexion/inscription</Nav.Link>
                </Navbar.Collapse>            
        </Navbar>
    );
}

export default Navbar2;