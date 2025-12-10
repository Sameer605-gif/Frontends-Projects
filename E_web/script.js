$(document).ready(function () {
    let cart = [];

    $('.add-to-cart').click(function () {
        let name = $(this).data('name');
        let price = $(this).data('price');
        let img = $(this).data('img');
        let existingItem = cart.find(item => item.name === name);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ name, price, img, quantity: 1 });
        }
        updateCart();
    });

    function updateCart() {
        let cartDropdown = $('#cart-items');
        cartDropdown.empty();

        if (cart.length === 0) {
            cartDropdown.append('<li><span class="dropdown-item">Cart is empty</span></li>');
        } else {
            cart.forEach((item, index) => {
                cartDropdown.append(`
                    <li class="dropdown-item d-flex justify-content-between align-items-center">
                        <div>
                            <img src="${item.img}" alt="${item.name}" width="50" class="me-2">
                            ${item.name} - $${item.price} (x${item.quantity})
                        </div>
                        <button class="btn btn-danger btn-sm remove-from-cart" data-index="${index}">✖</button>
                    </li>
                `);
            });
        }
        
        $('#cart-count').text(cart.reduce((total, item) => total + item.quantity, 0));
    }

    $(document).on('click', '.remove-from-cart', function () {
        let index = $(this).data('index');
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        updateCart();
    });
});
const gallery = document.getElementById('gallery');
        const popup = document.getElementById('popup');
        const popupImg = document.getElementById('popup-img');

        gallery.addEventListener('wheel', (e) => {
            e.preventDefault();
            gallery.scrollLeft += e.deltaY;
        });

        document.querySelectorAll('.product-gallery img').forEach(img => {
            img.addEventListener('click', function () {
                popupImg.src = this.src;
                popup.style.display = 'flex';
            });
        });

        function closePopup() {
            popup.style.display = 'none';
        }