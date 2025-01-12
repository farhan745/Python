// Sample product data
const products = [
  { id: 1, name: "Sony TV", price: 500, image: "images/product1.jpg" },
  { id: 2, name: "Samsung", price: 1000, image: "images/product2.jpg" },
  { id: 3, name: "LG", price: 300, image: "images/product3.jpg" },
];

// Initialize cart
let cart = [];

// Display product catalog
function displayProductCatalog() {
  const productCatalog = document.getElementById("productCatalog");
  products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("col-md-4", "product");
    productElement.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>Price: $${product.price}</p>
          <button class="btn btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
      `;
    productCatalog.appendChild(productElement);
  });
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  cart.push(product);
  displayCart();
}

// Display cart
function displayCart() {
  const cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
  let subtotal = 0;

  cart.forEach((product) => {
    subtotal += product.price;
    const cartItem = document.createElement("li");
    cartItem.textContent = `${product.name} - $${product.price}`;
    cartItems.appendChild(cartItem);
  });

  document.getElementById("subtotal").innerText = subtotal.toFixed(2);
  applyPromoCode();
}

// Promo code integration
const validPromoCodes = {
  "ostad10": 0.1,
  "ostad5": 0.05,
};

function applyPromoCode() {
  try {
    const promoCode = document.getElementById("promoCode").value;
    const subtotal = parseFloat(document.getElementById("subtotal").innerText);
    let discount = 0;

    // Ensure the promo code is valid
    if (validPromoCodes[promoCode]) {
      discount = subtotal * validPromoCodes[promoCode];
      document.getElementById("promoMessage").innerText =
        "Promo code applied successfully!";
      document.getElementById("promoCode").disabled = true;
      document.querySelector(".promo-code-section button").disabled = true;
    } else {
      document.getElementById("promoMessage").innerText = "Invalid promo code.";
    }

    const finalTotal = subtotal - discount;
    document.getElementById("discount").innerText = discount.toFixed(2);
    document.getElementById("finalTotal").innerText = finalTotal.toFixed(2);
  } catch (error) {
    console.error("An error occurred while applying the promo code:", error);
    document.getElementById("promoMessage").innerText =
      "An error occurred. Please try again.";
  }
}

// Initialize product catalog on page load

displayProductCatalog();
