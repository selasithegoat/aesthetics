// hamburger menu
document
  .getElementById("hamburger")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("menu").classList.toggle("openMenu");
    document.getElementById("menu").classList.toggle("closeMenu");
  });

document.querySelector(".closeMenuBtn").addEventListener("click", function () {
  document.getElementById("menu").classList.toggle("openMenu");
  document.getElementById("menu").classList.toggle("closeMenu");
});


// add to cart

document.addEventListener("DOMContentLoaded", function() {
  const plusButton = document.querySelectorAll('.fa-solid.fa-plus');
  const cartCounter = document.querySelector('.cartCounter');

  let itemCount = 0;

  plusButton.forEach(function(button) {
    button.addEventListener('click', function() {
      itemCount++;
      const cartCounter =  document.querySelector('.cartCounter');
      cartCounter.textContent = itemCount;
    });
  });
});


// document.addEventListener("DOMContentLoaded", function() {
//   const plusButtons = document.querySelectorAll('.fa-solid.fa-plus');
//   let itemCount = localStorage.getItem('itemCount') ? parseInt(localStorage.getItem('itemCount')) : 0;
//   const cartCounter = document.querySelector('.cartCounter');
  
//   cartCounter.textContent = itemCount;

//   plusButtons.forEach(function(button) {
//     button.addEventListener('click', function() {
//       itemCount++;
//       cartCounter.textContent = itemCount;
//       localStorage.setItem('itemCount', itemCount);
//     });
//   });
// });


// add to cart

document.addEventListener("DOMContentLoaded", function() {
  const cartItemsContainer = document.getElementById('cart-items');
  let totalPrice = 0;

  // Event listener for adding items to the cart
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('fa-plus')) {
      const productCard = event.target.closest('.card');
      const productName = productCard.querySelector('h3').textContent;
      const productSize = productCard.querySelector('select[name="color"]').value;
      const productPrice = parseFloat(productCard.querySelector('h4').textContent.split(' ')[1]);
      const productImageSrc = productCard.querySelector('img').src;
      
      // Update total price
      totalPrice += productPrice;

      // Create a new cart item element
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${productImageSrc}" alt="${productName}" width="100">
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Size:</strong> ${productSize}</p>
        <p><strong>Price:</strong> GHS ${productPrice.toFixed(2)}</p>
        <hr>
      `;
      
      // Append the cart item to the cart items container
      cartItemsContainer.appendChild(cartItem);
    }
  });

  // Function to update total price display
  function updateTotalPrice() {
    document.getElementById('total-price').textContent = `Total Price: GHS ${totalPrice.toFixed(2)}`;
  }

  // Initial update of total price
  updateTotalPrice();
});



// // Get the first element with the class "fa-solid.fa-cart-plus"
// const cartButton = document.querySelector(".fa-solid.fa-cart-plus");

// // Attach click event listener to the cart button
// cartButton.addEventListener("click", function () {
//     // Get the first element with the class "cart-page"
//     const cartPage = document.querySelector("#cart");
    
//     // Toggle visibility by toggling between the "showCart" and "closeCart" classes
//     cartPage.classList.toggle("showCart");
//     cartPage.classList.toggle("closeCart");
// });

document
  .querySelector(".cart")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cart").classList.add("showCart");
    document.getElementById("cart").classList.remove("closeCart");
  });

  document
  .querySelector("#cart")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cart").classList.remove("showCart");
    document.getElementById("cart").classList.add("closeCart");
  });