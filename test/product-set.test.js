import ProductSet from '../src/product-set.js';
import productData from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('Product Set');


test('copies master list', assert => {
    // arrange
    
    // act
    const productSet = new ProductSet(productData);
    
    // assert
    assert.deepEqual(productSet.list, productData);
    assert.notEqual(productSet.list, productData);
});

test('get random product image', assert => {
    // arrange
    const productSet = new ProductSet(productData);
    
    // act
    const product = productSet.getRandomProduct();
    
    // assert
    assert.ok(productData.includes(product));
});

test('remove product from list', assert => {
    // arrange
    const productSet = new ProductSet(productData);
    const productToRemove = productData[0];
    
    // act
    productSet.removeById(productToRemove.id);
    
    // assert
    assert.notOk(productSet.list.includes(productToRemove));
});