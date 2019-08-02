/* eslint-disable no-console */
import store from '../src/data/store.js';
import ProductSet from './product-set.js';

const productButton = document.querySelectorAll('.product-button');



const products = store.getProducts();
let masterProductSet = new ProductSet(products);
const displayedProducts = {};
let selectedProduct = {};
let productToDisplay;

// let turns = 0;

// add event listener to buttons....
for(let button of productButton){
    button.addEventListener('click', event => {
        event.preventDefault();
        tally(selectedProduct, button.value);
        console.log(selectedProduct);
        renderProducts();
    });
}

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
        let button = productButton[i];
        button.value = renderProduct.id;
        let img = button.querySelector('img'); 
        img.src = renderProduct.image;
        img.alt = renderProduct.id;
    }
}

// leftButton.addEventListener('click', event => {
//     event.preventDefault();
//     console.log('Left Button Clicked!');
// });

// centerButton.addEventListener('click', event => {
//     event.preventDefault();
//     console.log('Center Button Clicked!');
// });

// rightButton.addEventListener('click', event => {
//     event.preventDefault();
//     console.log('Right Button Clicked!');
// });


renderProducts();
