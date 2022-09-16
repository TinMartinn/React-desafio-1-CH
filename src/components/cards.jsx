import React from 'react';

const Cards = ({imagen, nombre, precio, descripcion}) => {
    return (
        <div className='card'>
            <div>
            <img className='imagen' src= {imagen} alt=""/>
            </div>
            <div>
                <p>{nombre}</p>
                <p>{descripcion}</p>
                <p>${precio}</p>
            </div>
        </div>
    );
}

export default Cards;
