document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart')
    addToCartButtons.forEach((btn) => {
        const productId = btn.dataset.productId
        btn.addEventListener('click', async () => {
            const response = await fetch('/cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ productId, quantity: 1 })
            })
            const data = await response.json()
            if (data.success) console.log('All is good');

        })

    })
})