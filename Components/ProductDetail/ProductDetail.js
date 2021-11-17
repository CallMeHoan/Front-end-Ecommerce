import { style } from "./style.js";
const template = document.createElement('template');
template.innerHTML = `
    <Style>
        ${style}
    </style>
    <div class="product__detail">
        <div class="product__name">
            <h2></h2>
        </div>
        <div class="product__detail__container">
            <div class="product__detail__image">
                <img>
            </div>
            <div class="product__detail__booking">
                <div class="booking__top">
                    <h1></h1>
                    <div class="product__rating">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                        </svg>
                    </div>
                    <br>
                </div>
                <div class="booking__product__detail">
                    <br>
                    <p>Brand: <span id='brand'></span></p>
                    <p>Product Model: <span id='model'></p>
                    <p>Availability: <span id='stock'></p>
                    <br>
                </div>
                <div class="booking__price">
                    <br>
                    <p>Price:</p>
                    <h2><span id='price'></span></h2>
                    <br>
                </div>
                <div class="booking">
                    <br>
                    <label>Quantity</label>
                    <div class="booking__adjust">
                        <div class="quantity__adjust">
                            <div class='quantity__container'>
                                <button class='reduce__qty' id='reduce'><span>-</span></button>
                                <input value='1' class='qty__value' id='qty__value'></input>
                                <button class='add__qty' id='add'><span >+</span></button>
                            </div>
                        </div>
                        <div class="add__to__cart">
                            <button class="add__cart__btn">ADD TO CART</button>
                        </div>
                        <div class="add__to__wishlist">
                            <button class="add__wishlist" title="Add to wishlist">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product__description">
            <h2>DESCRIPTION</h2>
            <br>
            <p>
                <br>
                <span id='description'></span>
                <br>
            </p>
        </div>
    </div>
`;

class ProductDetail extends HTMLElement {
    constructor() {
        super();
        
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('h2').innerText = this.getAttribute('productName');
        this.shadowRoot.querySelector('h1').innerText = this.getAttribute('productName');
        this.shadowRoot.querySelector('#price').innerText = this.getAttribute('productPrice');
        this.shadowRoot.querySelector('#brand').innerText = this.getAttribute('brand');
        this.shadowRoot.querySelector('#model').innerText = this.getAttribute('model');
        this.shadowRoot.querySelector('#stock').innerText = this.getAttribute('stock');
        this.shadowRoot.querySelector('#description').innerText = this.getAttribute('description');
        this.shadowRoot.querySelector('img').src = this.getAttribute('productImage');
    }
    reduceQty() {
        // var value = this.shadowRoot.getElementById('qty__value').value;
        // value -= 1;
        // document.getElementById('qty__value').value = value;
        console.log('123');
    }
    addQty() {
        // var value = this.shadowRoot.getElementById('qty__value').value;
        // value -= 1;
        // document.getElementById('qty__value').value = value;
        console.log('123');
    }
    connectedCallBack() {
        this.shadowRoot.querySelector('#reduce').addEventListener('click', () => this.reduceQty());
        this.shadowRoot.querySelector('#add').addEventListener('click', () => this.addQty());
    }
}

window.customElements.define('product-detail', ProductDetail);