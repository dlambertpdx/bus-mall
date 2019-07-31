import { getRandomInt } from './utils.js';


class ProductSet {
    constructor(products) {
        this.list = products.slice();
    }

    getRandomProduct() {
        const index = getRandomInt(this.list.length);
        const product = this.list[index];
        return product;
    }

    removeById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(product.id === productId) {
                list.splice(i, 1);
                return;
            }
        }
    }


}


export default ProductSet;