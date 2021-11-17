export const style = `
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.product__detail {
  width: 1530px;
  height: 1400px;
  font-family: Jost;
  overflow-x: hidden;
}
.product__detail__container {
  display: flex;
  justify-content: center;
}
.product__name h2 {
  font-size: 26px;
  color: #222222;
  margin-left: 180px;
  margin-bottom: 20px;
}
.product__detail__image img,
.product__detail__booking {
  width: 37vw;
  height: auto;
}
.product__detail__image {
  margin-right: 20px;
}
.product__detail__booking {
  margin-left: 20px;
}
.booking__top {
  border-bottom: 1px solid #777777;
}
.booking__top h1 {
  font-size: 24px;
  color: #777777;
  margin: 0 0 15px;
}
.booking__top .product__rating {
  font-size: 14px;
  color: #ffb503;
}
.booking__product__detail {
  border-bottom: 1px solid #777777;
}
.booking__product__detail p {
  margin-bottom: 5px;
  font-size: 14px;
  color: #222222;
}
.booking__price {
  border-bottom: 1px solid #777777;
}
.booking__price h2 {
  font-size: 24px;
}
.booking__adjust {
  display: flex;
  margin-top: 15px;
}
.booking__adjust .reduce__qty,
.booking__adjust .add__qty,
.booking__adjust input {
  height: 40px;
  width: 40px;
  padding: 10px;
}
.booking__adjust .reduce__qty,
.booking__adjust .add__qty {
  cursor: pointer;
  background-color: #222222;
  color: #ffffff;
  border: 1px solid #222222;
}
.booking__adjust .reduce__qty:hover,
.booking__adjust .add__qty:hover {
  background-color: #ffffff;
  color: #222222;
}
.booking__adjust input {
  width: 40px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  padding: 0 8px;
  border: 1px solid #222222;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.add__to__cart button {
  margin-left: 20px;
  height: 40px;
  width: 150px;
  cursor: pointer;
  background-color: #222222;
  color: #ffffff;
  border: 1px solid #222222;
}
.add__to__wishlist .add__wishlist {
  margin-left: 20px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  font-size: 16px;
  background-color: #ffffff;
  border: 1px solid #222222;
}
.add__to__wishlist .add__wishlist:hover {
  background-color: #e31b23;
  color: white;
}

.add__to__cart button:hover,
.add__to__wishlist button:hover {
  background-color: #ffffff;
  color: #222222;
}
.product__description {
  margin-top: 100px;
  padding: 0 100px;
}
.product__description h2 {
  text-align: center;
}
.product__description p {
  border-top: 1px solid #777777;
  margin-bottom: 20px;
  border-bottom: 1px solid #777777;
}
`