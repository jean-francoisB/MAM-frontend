
import React, { useState, useEffect } from 'react';


const styles = {
    backgroundColor: "#DCED91",

}

function Footer() {
    const [mentionsData, setMentionsData] = useState([]);

    useEffect(() => {
        fetch("https://127.0.0.1:8000/api/mentions_legales/")
        .then((response) => response.json())
        .then((data) => setMentionsData(data["hydra:member"]))
        .catch((error) => {
            console.log(error);
        });
    }, []);


return (

<footer className="page-footer font-small blue pt-4 order-4" style={{ backgroundColor: styles.backgroundColor }}>
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">Footer</h5>
                <p>Informations du footer</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Liens</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>

                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Liens2</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>

                </ul>
            </div>
        </div>
    </div>
    { /** Mettre un lien vers les mentions légales */ }
    <div className="footer-copyright text-center py-3">Mentions légales :
    {mentionsData.map((item) => (
        <a key={item.id} href="https://www.google.fr/"> {item.nom}</a>))
    }
    </div>

</footer>
)

}
export default Footer