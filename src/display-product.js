function displayProduct(products, productDisplay) {
    // if(isSelected) {
    //     productDisplay.classList.add('selected');
    //     productDisplay.classList.remove('unselected');
    // }
    // else {
    //     productDisplay.classList.add('unselected');
    //     productDisplay.classList.remove('selected');
    // }
    // productDisplay.classList.remove('choice');

    const img = productDisplay.querySelector('img');
    img.src = products.image;
    img.alt = 'Product Choice';
}

export default displayProduct;

// DO I EVEN NEED THIS FILE???