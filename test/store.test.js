import store from '../src/data/store.js';
import productData from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('basic get and save', assert => {
    // arrange
    const key = 'cat';
    const cat = { name: 'Freddie' };
    
    // act
    store.save(key, cat);
    const got = store.get(key);
    
    // assert
    assert.deepEqual(got, cat);
});

test('gets products using bootstrapped products', assert => {
    // arrange
    
    
    // act
    const products = store.getProducts();
   
    
    // assert
    assert.deepEqual(products, productData);
});