let bien = true

const promesa = (productos) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(bien){
                resolve(productos)
            } else {
                reject("productos no disponibles")
            }
        }, 2000); 
    })
}

export default promesa;