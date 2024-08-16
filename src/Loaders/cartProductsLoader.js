import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('http://localhost:5000/products');
    const products = await loadedProducts.json();
    const savedCart = [];

    const storedCart = getShoppingCart();
    for(const id in storedCart){
        const addedProduct = products.find(product => product._id === id);
        if(addedProduct){
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    console.log(savedCart);
    return savedCart;
}

export default cartProductsLoader;