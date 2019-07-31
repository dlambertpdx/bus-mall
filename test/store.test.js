import store from '../src/data/store.js';

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