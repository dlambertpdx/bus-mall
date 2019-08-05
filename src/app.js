import store from '../src/data/store.js';
import ProductSet from './product-set.js';
import { resultChart } from './results.js';

const productButton = document.querySelectorAll('.product-button');
const buttonContainer = document.getElementById('product-options');
const resultButton = document.getElementById('result-button');
const resultsContainer = document.getElementById('results-container');
const resetButton = document.getElementById('reset-button');
const chart = document.getElementById('myChart');

const products = store.getProducts();
let masterProductSet = new ProductSet(products);
let selectedProduct = {};
let productToDisplay;
let turns = 0;

function renderProducts() {
    let productSet = masterProductSet;

    if(turns >= 25) {
        buttonContainer.classList.add('hidden');
        resultButton.classList.remove('hidden');
    }


    if(selectedProduct && masterProductSet.list.length > 3) {
        productSet = new ProductSet(masterProductSet.list);
        productSet.removeById(selectedProduct.id);
    }

    productToDisplay = [];

    // generate 3 random product imgs to display
    for(let i = 0; i < 3; i++) {
        let renderProduct = productSet.getRandomProduct();
        renderProduct.id;
        productToDisplay.push(renderProduct);
        productSet.removeById(renderProduct.id);

        // displaying image
        let button = productButton[i];
        button.value = renderProduct.id;
        let img = button.querySelector('img');
        img.src = renderProduct.image;
        img.alt = renderProduct.id;
    }

    // add event listener to buttons....
}
for(let button of productButton) {
    button.addEventListener('click', event => {
        event.preventDefault();
        let id = event.currentTarget.value;
        store.selectedProduct(id);
        turns++;
        renderProducts();
        // eslint-disable-next-line no-console
        console.log(id);
    });
}

resultButton.addEventListener('click', event => {
    event.preventDefault();
    resultChart();
    resultButton.classList.add('hidden');
    chart.classList.remove('hidden');
    resultsContainer.classList.remove('hidden');
    return;
});

resetButton.addEventListener('click', event => {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
});

renderProducts();
