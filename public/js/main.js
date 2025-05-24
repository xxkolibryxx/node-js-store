document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart')
    const cartCountBadge = document.querySelector('.cart-button-badge')
    addToCartButtons.forEach((btn) => {
        const productId = btn.dataset.productId
        btn.addEventListener('click', async () => {
            const response = await fetch('/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId, quantity: 1 })
            })

            if (response.ok) {
                const cartData = await fetch('/api/cart')
                const cart = await cartData.json()
                cartCountBadge.innerHTML = cart.cartCount
            }
        })
    })

    const deleteCartItemBtn = document.querySelectorAll('.delete-cart-item')
    deleteCartItemBtn.forEach((btn) => {
        const productId = btn.dataset.productId
        btn.addEventListener('click', async () => {
            const response = await fetch(`/api/cart/${productId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            })
            window.location.href = '/cart';
        })
    })
})