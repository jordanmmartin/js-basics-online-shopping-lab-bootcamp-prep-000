var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newItem = {}
 newItem.itemName = item
 newItem.itemPrice = Math.floor(Math.random() * 100) + 1
 cart.push(newItem)
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  var cartContents = 'In your cart, you have '
  if(cart.length === 1) {
    let item = cart[0]
    cartContents = cartContents + `${item.itemName} at $${item.itemPrice}.`
    return cartContents
  }
  else if(cart.length > 1){
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i]
      if(i < cart.length - 1){
      cartContents = cartContents + `${item.itemName} at $${item.itemPrice}, `
      } else {
        cartContents = cartContents + `and ${item.itemName} at $${item.itemPrice}.`
      }
    }
    return cartContents
  } else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  // write your code here
  var totalCost = 0
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i]
    totalCost = totalCost + item.itemPrice
  }
  return totalCost
}

function removeFromCart(item) {
  // write your code here
  for(i= 0; i < cart.length; i++) {
    var currentItem = cart[i]
    if(item === cart.itemName) {
      cart = []
    } else {
      
    }
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber > 0) {
    let message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
    cart = []
    return message
  } else{
    let message = "Sorry, we don't have a credit card on file for you."
    return message
  }
}
