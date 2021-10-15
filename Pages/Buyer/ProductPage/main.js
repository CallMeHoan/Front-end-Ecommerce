(function($) {

    "use strict";

    var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

})(jQuery);


const products = document.querySelector(".product_container");

function createCard(){
    let code = `
        <div class="item"><product-card id="card_item"/></div>
    `;
    products.innerHTML += code;
}
for(let i = 0; i < 12; i++){
    createCard();
};
function getProductItem(){
    var selectedValue = document.getElementById("show_value").value;
    var card = document.getElementById("card_item");
    switch(selectedValue){
        case 1:
            card.remove();
            for(let i = 0; i < 12; i++){
                createCard();
            };
            break;
        case 2:
            card.remove();
            for(let i = 0; i < 24; i++){
                createCard();
            };
            break;
        case 3:
            card.remove();
            for(let i = 0; i < 36; i++){
                createCard();
            };
            break;
        case 4:
            card.remove();
            for(let i = 0; i < 48; i++){
                createCard();
            };
            break;
        default:
            for(let i = 0; i < 12; i++){
                createCard();
            };
    }
}
