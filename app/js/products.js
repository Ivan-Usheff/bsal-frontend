let productsList = [];

let url = process.env.PRODUCTS_URL;

function getProducts(){

    const productsPromise = fetch(url);
    
    return productsList = productsPromise
    .then(data => data.json())
    .then(data => {
        return data;
    })
    .catch(err => {
        console.log(err);
    })
}

function findProductsByCategoria(categoria){
    
    const productsPromise = fetch(url+'/'+categoria);
    
    return productsList = productsPromise
    .then(data => data.json())
    .then(data => {
        return data;
    })
    .catch(err => {
        console.log(err);
    })

}

export {
    getProducts, 
    findProductsByCategoria
};