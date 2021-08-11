'use strict';

let coun = 0

// Set up an empty cart for use on this page.
const cart = new Cart(JSON.parse(localStorage.getItem('cart')) || []);
console.log(cart)
let Contents = document.getElementById('cartContents');

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

    //TODO: Add an <option> tag inside the form's select for each product
    const selectElement = document.getElementById('items');
    for (let i in Product.allProducts) {
        let optionItem = document.createElement('option');
        selectElement.appendChild(optionItem);
        optionItem.textContent = Product.allProducts[i].name;
    }
        for (let i = 0; i< cart.items.length;i++){
            console.log("hello")
        let li2 = document.createElement('li');
        li2.innerHTML = `you pick ${cart.items[i].product} and your quantity  ${cart.items[i].quantity}`;
        Contents.appendChild(li2);
        coun ++
        }
    

}

let item = []
// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
    // TODO: Prevent the page from reloading
    event.preventDefault();
    // Do all the things ...

    item = [event.target.items.value, event.target.quantity.value]

    addSelectedItemToCart();
    console.log(cart)
    cart.saveToLocalStorage();
    console.log(localStorage.cart)
    updateCounter();
    updateCartPreview();


    catalog.reset();


}
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  cart.addItem(item[0],item[1])
    // TODO: suss out the item picked from the select list
    // TODO: get the quantity
    // TODO: using those, add one item to the Cart


}
let counter;
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    counter = document.getElementById('itemCount');
    counter.textContent = coun+1;
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  
    // TODO: Get the item and quantity from the form
    // TODO: Add a new element to the cartContents div with that information
    
    let li = document.createElement('li');
    li.innerHTML = `you pick ${item[0]} and your quantity  ${item[1]}`;
    Contents.appendChild(li);
    coun ++
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);


// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();


