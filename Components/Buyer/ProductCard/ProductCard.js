import { style } from "./style.js";
const template = document.createElement('template');
template.innerHTML = `
    <Style>
        ${style}
    </style>
    <div class='product_card'>
        <div class='hover_right'>
            <div class="icon_container tooltips" data-tooltips='Add to WishList'>
                <i class="far fa-heart"></i>
            </div>
            <br>
            <div class="icon_container tooltips" data-tooltips='QuickView'>
                <i class="far fa-eye"></i>
            </div>
        </div>
        <div class='product_image'>
            <img src="https://opencart.mahardhi.com/MT04/noriva/01/image/cache/catalog/products/11-415x415.jpg">
        </div>
        <div class='hover_left'>
            <h2 title='Add to cart'>Add to cart</h2>
        </div>
        <div class='product_infomation'>
            <a href="#">Arnold & Son</a>
            <div class='price_rating'>
                <div class='price'><h3>$86.00</h3></div>
                <div class='rating'>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            </div>
        </div>
    </div>
`;

class ProductCard extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

window.customElements.define('product-card', ProductCard);