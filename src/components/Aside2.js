import React from 'react'

function Aside2() {

    const styles = {
        backgroundColor: "#FFF69A",
        textColor: 'dark',
    }


    return (

        <div className='w-30' style={{ backgroundColor: styles.backgroundColor }} >
            <div className='w-30'>
                <h2>Informations</h2>
            </div>

            <li href="https://www.pajemploi.urssaf.fr/">Pajemploi</li>
            <li href="https://www.caf.fr/">Caf</li>
            <li href="https://monenfant.fr/">Monenfant.fr</li>

            <h2>Météo</h2>

            <h4>Vidéo signée</h4>
            <img></img>
        </div>
    )

}

export default Aside2;