import React from 'react';
import promesa from '../utils/itemPromise';
import datos from "../components/datos";
import Cards from '../components/cards';
import { useState, useEffect } from 'react';




const Productos = () => {
    const [info, setinfo] = useState([]);
    useEffect(() => {  promesa(datos)         
        .then (resolve=>setinfo(resolve))         
        .catch (error=>console.log(error))     
    }, []);
    
    return (
        <div className='containerCards'>
            {
                info.map((parametro) => ( 
                    <Cards 
                    key={parametro.id}
                    imagen={parametro.imagen}
                    nombre={parametro.nombre}
                    descripcion={parametro.descripcion}
                    precio={parametro.precio}
                    />
                ))
            }
            
        </div>
    );
}

export default Productos;
