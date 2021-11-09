export const style = `
@import url("https://fonts.googleapis.com/css2?family=Jost:wght@100&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.product_card {
  font-family: Jost sans-serif;
  position: relative;
  /* margin-top: 100px;
  margin-left: 100px; */
  width: 320px;
  cursor: pointer;
}
.product_image img {
  object-fit: contain;
  height: 320px;
  width: 320px;
}
.product_card:hover .hover_right {
  background-color: #fff;
  z-index: 1;
  color: #222222;
  right: 5%;
}
.product_card:hover .hover_right .icon_container {
  border: 1px solid #222222;
}
.product_card:hover .hover_left {
  z-index: 1;
  color: #222222;
  left: 5%;
}
.product_infomation {
  margin-top: 10px;
}
.product_infomation a {
  text-decoration: none;
  text-transform: capitalize;
  color: #777777;
  font-weight: 400;
  font-size: 17px;
}
.product_infomation a:hover {
  color: #222222;
}
.price_rating {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}
.price_rating .price h3 {
  font-family: Jost bold;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin: 0 5px 0 0;
}
.price_rating .rating svg {
  color: #ffb503;
  font-size: 15px;
}
.hover_right {
  color: #fff;
  position: absolute;
  right: 0;
  z-index: -1;
  margin-top: 20px;
  transition: 0.5s;
  font-size: 10px;
  border-radius: 1px solid black;
  cursor: pointer;
}
.hover_right .icon_container {
  padding: 5px 10px;
}
.hover_right .icon_container a {
  color: #222222;
  font-size: 15px;
}
.hover_right .icon_container:hover {
  background-color: #222222;
}
.hover_right .icon_container:hover a {
  color: #fff;
}
.hover_left {
  color: #fff;
  position: absolute;
  left: 0;
  top: 70%;
  z-index: -1;
  transition: 0.5s;
  font-size: 10px;
  cursor: pointer;
}
.hover_left h2 {
  position: relative;
  text-transform: uppercase;
  font-weight: 50;
  font-size: 14px;
  color: #222222;
}
.hover_left::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.1px;
  left: 0;
  bottom: 0;
  background: #222222;
}
.hover_left::after {
  transform: scale(0, 1);
  transform-origin: 0% 100%;
  transition: transform 0.3s ease;
}
.hover_left:hover::after {
  transform: scale(1, 1);
}
.tooltips {
  position: relative;
  z-index: 1000;
}
.tooltips::after,
.tooltips::before {
  content: "";
  position: absolute;
  background-color: black;
  height: auto;
  width: max-content;
  top: 0;
  left: 50%;
  transform: translate(-50%, -100%);
  transition: 0.05s ease-in-out transform;
}
.tooltips::before {
  font-size: 12px;
  content: attr(data-tooltips);
  color: white;
  padding: 10px;
  line-height: 20px;
  top: -10px;
  border-radius: 8px;
  transform: translate(-50%, -100%) scale(0);
  transform-origin: bottom;
}
.tooltips::after {
  height: 10px;
  width: 10px;
  transform: translate(-50%, -150%) rotate(45deg) scale(0);
  transform-origin: top;
}
.tooltips:hover::after {
  transform: translate(-50%, -150%) rotate(45deg) scale(1);
}
.tooltips:hover::before {
  transform: translate(-50%, -100%) scale(1);
}

/* For screen with max width 1100px */
@media only screen and (max-width: 1024px) {
  .product_card {
    width: 230px;
  }
  .product_image img {
    width: 230px;
    height: 230px;
  }
  .product_infomation {
    text-align: center;
  }
  .product_infomation a {
    font-size: 14px;
  }
  .price_rating {
    display: contents;
  }
  .price_rating h3 {
    padding: 3px 0;
  }
  .hover_right .icon_container {
    margin-top: 5px
    padding: 0px 5px;
  }
  .hover_left {
    margin-top: -30px;
  }
  .hover_left h2 {
    font-size: 13px;
  }
}


`;