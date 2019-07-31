import store from '../src/data/store.js';
import ProductSet from './product-set.js';

const products = store.getProducts();
const masterProductSet = new ProductSet(products);
let selectedProduct = null;

loadProducts();

function loadProducts() {
    let productSet = masterProductSet;

    if(selectedProduct && masterProductSet.list.length > 1) {
        productSet = new ProductSet(masterProductSet.list);
        productSet.removeById(selectedProduct.id);
    }
    selectedProduct = productSet.getRandomProduct();
    const otherProducts = new ProductSet(products);
    otherProducts.removeById(selectedProduct.id);
}