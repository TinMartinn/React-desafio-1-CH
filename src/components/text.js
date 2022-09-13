import React from 'react';
import { useState } from 'react';



const Text = () => {
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
        <div>
            <h1>
                Todos nuestros productos estaran disponibles muy pronto
            </h1>
            <div  className='boxGeneral'>
                <button className='boton' onClick={subir}>+</button>{cantidad}
                <button className='boton' onClick={bajar}>-</button>
            </div>
        </div>
    );
}

export default Text;
