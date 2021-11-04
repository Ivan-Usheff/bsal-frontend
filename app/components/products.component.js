function createElement(product){

    let productsComponnet = `
    <div class="card m-3" style="width: 18rem;" id="modelo">
        <img id="product-image" style="max-width: 15rem;" src="${product.url_image}" class="card-img-top p-2 m-1" alt="Foto Producto">
        <div class="card-body">
            <h5 class="card-title position-relative w-75" id="name">
            ${product.name}`

    if(product.discount > 0){
        productsComponnet +=`
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" id="discount">- ${product.discount} %</span>
        `
    }
    
    
    productsComponnet +=`
            </h5>
            <hr>
            <div class="d-flex justify-content-evenly">
                <p class="card-text" id="price">$ ${product.price}</p>
                <button class="btn btn-secondary">
                   <i class="fas fa-cart-plus"></i>
                </button>
            </div>
        </div>
    </div>
    `;

    return productsComponnet;
}

export {createElement};