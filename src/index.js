import createItem from "./services/item.js";
import * as cartService from "./services/cart.js";

const cart = [];

console.log("Welcome to Shopee!");

// create item
const item1 = await createItem("Iphone 15", 4588.87, 2);
const item2 = await createItem("S24 Ultra", 5309, 2);
const item3 = await createItem("Remdmi Note 13", 1350, 1);

// add item
await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);

// remove item
await cartService.removeItem(cart, item1);

// delete item
await cartService.deleteItem(cart, item3.name);

// display item
await cartService.displayCart(cart);

// calculate item
await cartService.calculateCart(cart);