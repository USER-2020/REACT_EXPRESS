import React, { useState } from 'react';
import blanca from '../../assets/imgs/camisetas/COLOR BLANCO copia.png';
import amarilla from '../../assets/imgs/camisetas/COLOR AMARILLO .png';
import roja from '../../assets/imgs/camisetas/COLOR ROJO.png';
import './header.css';

const Header = () => {

    const [colorShirt, setColorShirt] = useState('#FDFDFD');
    const [shirtSelected, setShirtSelected] = useState(blanca);

    // Función para cambiar el color
    const cambiarColor = (nuevoColor) => {
        console.log(nuevoColor);
        if (nuevoColor === '#FFBF00') {
            setShirtSelected(amarilla);
            setColorShirt(nuevoColor);
        }
        if (nuevoColor === '#FDFDFD') {
            setShirtSelected(blanca);
            setColorShirt(nuevoColor);
        }
        if (nuevoColor === '#9A1423') {
            setShirtSelected(roja);
            setColorShirt(nuevoColor);
        }

    };

    /* Lista de colores que se manejaran */
    const colorShirts = [
        '#FFBF00',
        '#141414',
        '#FDFDFD',
        '#149A8D',
        '#9A1423',
    ]

    return (
        <div className="container">
            <div className='contenedor'>
                <div className="title">
                    {/* <h1>VISTE </h1>
                <h1>SIEMPRE CON</h1>
                <h1>ELEGANCIA</h1> */}
                </div>
                <div className="imagenCamisa">
                    <img src={shirtSelected} alt="" />
                </div>
                <div className="colores">
                    {colorShirts.map((color, index) => (
                        <button
                            key={index}
                            className="circulo"
                            style={{ backgroundColor: color, width: 10, height: 10, borderRadius: 100 }}
                            onClick={() => cambiarColor(color)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
