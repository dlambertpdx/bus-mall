/* eslint-disable no-console */
import store from '../src/data/store.js';
import ProductSet from './product-set.js';

const productButton = document.querySelectorAll('.product-button');
const leftButton = document.getElementById('left-button');
const centerButton = document.getElementById('center-button');
const rightButton = document.getElementById('right-button');

const products = store.getProducts();
const masterProductSet = new ProductSet(products);

let selectedProduct;
let productToDisplay;
let displayedProducts = {};

function tally(products, id) {
    if(products[id]) {
        products[id] += 1;
    }
    else {
        products[id] = 1;
    }
}

function renderProducts() {
    let productSet = masterProductSet;
    
    if(selectedProduct && masterProductSet.list.length > 3) {
        productSet = new ProductSet(masterProductSet.list);
        productSet.removeById(selectedProduct.id);
    }
    
    productToDisplay = [];

    // generate 3 random product imgs to display
    for(let i = 0; i < 3; i++) {
        let renderProduct = productSet.getRandomProduct();
        productToDisplay.push(renderProduct);
        tally(displayedProducts, renderProduct.id);
        productSet.removeById(renderProduct.id);
    
        // displaying image
        let img = productButton[i].querySelector('img'); 
        img.src = renderProduct.image;
    }
}

leftButton.addEventListener('click', event => {
    event.preventDefault();
    console.log('Left Button Clicked!');
});

centerButton.addEventListener('click', event => {
    event.preventDefault();
    console.log('Center Button Clicked!');
});

rightButton.addEventListener('click', event => {
    event.preventDefault();
    console.log('Right Button Clicked!');
});

renderProducts();
