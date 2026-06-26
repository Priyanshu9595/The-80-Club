const products = {
    'avocado-toast': {
        title: 'Gourmet Avocado Toast',
        price: '₹250',
        moreDesc: 'Our Gourmet Avocado Toast is crafted with locally sourced, organic avocados smashed to perfection. Served on a bed of freshly baked artisanal rustic sourdough bread, it is topped with a perfectly poached free-range egg, a sprinkle of Himalayan pink salt, and a dash of chili flakes for that extra kick. A healthy, conscious, and filling choice for any time of the day.',
        img: 'assets/menu_1.png'
    },
    'smoothie-bowl': {
        title: 'Artisan Smoothie Bowl',
        price: '₹300',
        moreDesc: 'A refreshing and vibrant blend of mixed forest berries, acai, and oat milk, creating a thick, creamy base. It is beautifully topped with house-made granola, toasted coconut flakes, chia seeds, and fresh seasonal fruits. Packed with antioxidants and essential nutrients, this bowl is the ultimate clean energy booster for a conscious start.',
        img: 'assets/menu_2.png'
    },
    'chicken-wrap': {
        title: 'Signature Chicken Wrap',
        price: '₹280',
        moreDesc: 'Tender, herb-marinated grilled chicken breast wrapped in a warm, freshly pressed whole wheat tortilla. Inside, you will find crisp romaine lettuce, organic cherry tomatoes, sliced cucumbers, and a drizzle of our special low-calorie yogurt-based dressing. A satisfying, protein-packed meal that does not compromise on taste.',
        img: 'assets/menu_3.png'
    },
    'quinoa-salad': {
        title: 'Protein Quinoa Salad',
        price: '₹220',
        moreDesc: 'A light yet filling bowl of organic quinoa, tossed with roasted chickpeas, diced cucumbers, cherry tomatoes, and fresh parsley. Drizzled with a zesty lemon-herb vinaigrette, it is the perfect protein-packed meal for a clean, conscious diet.',
        img: 'assets/menu_4.png'
    },
    'cold-brew': {
        title: 'Signature Cold Brew',
        price: '₹180',
        moreDesc: 'Our artisanal cold brew is steeped for 18 hours using premium, ethically sourced Arabica beans. Served over ice, it delivers a deeply smooth, naturally sweet flavor with zero bitterness. The perfect refreshing energy boost.',
        img: 'assets/menu_5.png'
    },
    'keto-brownie': {
        title: 'Keto Dark Chocolate Brownie',
        price: '₹150',
        moreDesc: 'Indulge your sweet tooth without the guilt. This rich, fudgy brownie is baked with 100% almond flour, premium dark chocolate, and naturally sweetened with stevia. It is completely gluten-free and keto-friendly.',
        img: 'assets/menu_6.png'
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const container = document.getElementById('product-container');

    if (productId && products[productId]) {
        const product = products[productId];
        const message = encodeURIComponent(`Hi, I would like to order the ${product.title} from The 80 Club`);

        container.innerHTML = `
            <div class="product-img-wrapper">
                <img src="${product.img}" alt="${product.title}">
            </div>
            <div class="product-info-wrapper">
                <a href="index.html#menu" class="back-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Back to Menu
                </a>
                <h1 class="product-title">${product.title}</h1>
                <div class="product-price">${product.price}</div>
                <p class="product-desc">${product.moreDesc}</p>
                
                <div class="order-section">
                    <h4>Choose Delivery Partner</h4>
                    <div class="order-buttons">
                        <a href="https://www.swiggy.com" target="_blank" class="btn-order swiggy-btn">
                            Order on Swiggy
                        </a>
                        <a href="https://www.zomato.com" target="_blank" class="btn-order zomato-btn">
                            Order on Zomato
                        </a>
                        <a href="https://wa.me/1234567890?text=${message}" target="_blank" class="btn-order whatsapp-btn">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                            Order via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div style="padding: 3rem; text-align: center; width: 100%;">
                <h2>Product not found.</h2>
                <p>Sorry, we couldn't find the product you're looking for.</p>
                <a href="index.html#menu" class="back-btn" style="margin-top: 2rem;">← Back to Menu</a>
            </div>
        `;
    }
});
