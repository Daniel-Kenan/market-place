const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartPopup = document.getElementById('cart-popup');
const cartItems = document.getElementById('cart-items');
const productButtons = document.querySelectorAll('.add-to-cart');

let cart = [];
let cartTotal = 0;

function updateCart() {
    cartCount.innerText = cart.length;
}

function updateCartPopup() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item.name;
        cartItems.appendChild(li);
    });
}

cartIcon.addEventListener('click', () => {
    cartPopup.style.display = cartPopup.style.display === 'none' ? 'block' : 'none';
});

productButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product-name');
        cart.push({ name: productName });
        updateCart();
        updateCartPopup();
    });
});