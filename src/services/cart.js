// Use cases

// -> add iten on the cart
async function addItem(userCart, item) {
    userCart.push(item);
}
// -> remove item on the cart
async function removeItem(userCart, item) {
    const indexFound = userCart.findIndex((product) => product.name === item.name);

    if (indexFound == -1) {
        console.log("Not found item!");
        return;
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        return;
    }

    if (userCart[indexFound].quantity == 1) {
        userCart.splice(indexFound, 1);
        return;
    }

}
// -> delete item on the cart
async function deleteItem(userCart, nameItem) {
    const index = userCart.findIndex((item) => item.name === nameItem);

    if (index !== -1) {
        userCart.splice(index, 1);
    }
}
// -> calculate price
async function calculateCart(userCart) {
    console.log("\nTotal cart: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`$${result.toFixed(2)}`);
}

async function displayCart(userCart) {
    console.log("\nShopee cart list: ");
    console.log("ID        NAME       PRICE     QTDS      TOTAL")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}      ${item.name}   $${item.price.toFixed(2)}     ${item.quantity}x     $${item.subtotal().toFixed(2)}`);
    })
}

export {
    addItem,
    removeItem,
    deleteItem,
    calculateCart,
    displayCart
}