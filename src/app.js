import store from '../src/data/store.js';
import ProductSet from './product-set.js';

const displayProducts = document.querySelectorAll('.product-image');

const products = store.getProducts();
const masterProductSet = new ProductSet(products);
let selectedProduct = null;

renderProducts();

function renderProducts() {
    let productSet = masterProductSet;

    if(selectedProduct && masterProductSet.list.length > 1) {
        productSet = new ProductSet(masterProductSet.list);
        productSet.removeById(selectedProduct.id);
    }
    selectedProduct = productSet.getRandomProduct();
    const otherProducts = new ProductSet(products);
    otherProducts.removeById(selectedProduct.id);
}