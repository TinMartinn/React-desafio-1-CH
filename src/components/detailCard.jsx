import React from 'react';
import { useState } from 'react';

const DetailCard = ({dato}) => {
    const [cantidad, setcantidad] = useState(0);
    const subir = () => {
        if (cantidad < 5) {
            setcantidad(cantidad + 1)
        }
    }
    const bajar = () => {
        if (cantidad > 0) {
            setcantidad(cantidad - 1)
        }
    }
    
    return (
        <div className='cardDetallada'>
            <div>
            <img className='imagen' src= {dato.imagen} alt=""/>
            </div>
            <div>
                <h2>{dato.nombre}</h2>
                <p>{dato.detalles}</p>
                <p>{dato.descripcion}</p>
                <p>${dato.precio}</p>
                <div  className='boxGeneral'>
                <button className='boton' onClick={subir}>+</button>{cantidad}
                <button className='boton' onClick={bajar}>-</button>
                <button className='agregarCarrito'>Agregar al carrito</button>
            </div>
            </div>
        </div>
    );
}


export default DetailCard;
