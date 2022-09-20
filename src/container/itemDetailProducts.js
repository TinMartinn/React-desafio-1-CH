import React from 'react';
import { useState, useEffect } from 'react';
import DetailCard from '../components/detailCard';
import promesa from '../utils/itemPromise';
import datos from '../components/datos';

const ItemDetailProducts = () => {
    const [dato, setDato] = useState({});
    
    useEffect(() => {
        promesa(datos)
        .then(result => setDato(result[0]))
        .catch(error => console.log(error))
    }, []);
    return (
        <div>
            <DetailCard 
            dato={dato}

            />          
        </div>
    );
}

export default ItemDetailProducts;
