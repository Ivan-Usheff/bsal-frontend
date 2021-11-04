import { getProducts, findProductsByCategoria } from './js/products.js';
import { createElement } from './components/products.component.js';

let container = document.getElementById('products-container');
let filtro = document.getElementById('buscador');
let lista = await getProducts();

filtro.addEventListener('input', printBuscador)


async function printBuscador(e) {
    let value = e.srcElement.value;
    if (value != ''){
        loadProducts(await findProductsByCategoria(value))
    }else{
        loadProducts(await getProducts())
    }
}

function loadProducts(miLista) {

    container.innerHTML = '';
    miLista.forEach(prod => {
        container.innerHTML += createElement(prod);
    })
}



loadProducts(lista)
