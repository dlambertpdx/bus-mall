import productData from './products.js';
import { findProduct } from '../utils.js';

const PRODUCT_KEY = 'products';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get(PRODUCT_KEY);
        if(!products) {
            store.save(PRODUCT_KEY, productData);
            products = productData;
        }
        return products;
    },
    // testing
    selectedProduct(id) {
        const selectedRate = store.getSelectedRate();
        const product = findProduct(selectedRate, id);

        if(product) {
            product.quantity += 1;
        } else {
            const item = {
                id: id,
                quantity: 1,
            };
            selectedRate.push(item);
        }
        store.save('selected-rate', selectedRate);
    },
    displayProduct(id) {
        const productDisplays = store.getProductDisplays();
        const product = findProduct(productDisplays, id);

        if(product) {
            product.displays += 1;
        } else {
            const order = {
                id: id,
                displays: 1,
            };
            productDisplays.push(order);
        }
        store.save('product-displays', productDisplays);
    },
    // getAllTimeHistory() {
    //     let history = store.get('all-time-history');

    //     if(!history) {
    //         history = [];
    //     }
    //     return history;
    // },
    // getAllTimeDisplays() {
    //     let displays = store.get('all-time-displays');
    //     if(!displays) {
    //         displays = [];
    //     }
    //     return displays;
    // },
    getDisplayRate() {
        let displays = store.get('display-rate');
        if(!displays) {
            displays = [];
        }
        return displays;
    },
    // testing
    getSelectedRate() {
        let selected = store.get('selected-rate');

        if(!selected) {
            selected = [];
        }
        return selected;
    },
    getId(product) {
        let id = product.id;
        return id;
    },

};

export default store;