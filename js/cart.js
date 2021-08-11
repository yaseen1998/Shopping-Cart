/* global Cart */
'use strict';
let remo = 0;
// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;
let tbody = document.querySelector('tbody')
  let c ;
function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
  console.log(cart)
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
}
}
let rem = []
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  
  for (let j = 0 ;j< cart.items.length ;j++){
  
  let tr = document.createElement('tr')
  tr.id = "row"+j
  tbody.appendChild(tr)
  
  let td= document.createElement('td')
  td.textContent =`remove `
  td.id ="delete"+j
  tr.appendChild(td)
  rem.push(td.id)
    let td1= document.createElement('td')
    td1.textContent =cart.items[j].product
    
    tr.appendChild(td1)
    let td2= document.createElement('td')
    td2.textContent =cart.items[j].quantity
    tr.appendChild(td2)
  }
  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}


function removeItemFromCart(event) {
  console.log(c)

  console.log(event.target.id)
  
  
    if(rem.includes(event.target.id)){
    let i = rem.indexOf(event.target.id)
    rem.splice(i,1)
    table.deleteRow(i+1)
    console.log(rem)
  cart.removeItem(i)
  cart.saveToLocalStorage()
  
     }
    
  }
    

  

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table



// This will initialize the page and draw the cart on screen
renderCart();

  
 