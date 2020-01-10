if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready);
}else{
    ready();
}

function ready(){

    var removeBtn = document.getElementsByClassName('btn-danger');


    for( var i = 0; i < removeBtn.length; i++){
        var button = removeBtn[i];
        button.addEventListener('click', function(event){
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove();
            cartTotal();
        });
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChange);
    }

    var addToCart = document.getElementsByClassName('shop-item-button');
    for(var i= 0; i < addToCart.length; i++){
        var button = addToCart[i];
        button.addEventListener('click', addButton);
    }

    var buttonP = document.getElementsByClassName('btn-purchase')[0];
    buttonP.addEventListener('click', purchaseClicked);

}

function purchaseClicked(){
    alert('Thank you for your purchase');
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild);
    }
    cartTotal();
}

function addButton(event){
    var button = event.target;
    var shopItem = button.parentElement;
    var productInfo = shopItem.getElementsByClassName('product-info')[0].innerText;
    var priceItem = shopItem.getElementsByClassName('product-price')[0].innerText;
    var image = shopItem.getElementsByClassName('product-image')[0].src;

    addItemToCart(productInfo, priceItem, image);
}

function addItemToCart(productInfo, priceItem, image){
    var cartRow = document.createElement('div');
    cartRow.innerText = productInfo;
    var cartItems  = document.getElementsByClassName('product-container')[0];
    cartItems.append(cartRow);
}


function quantityChange(event){
    var input = event.target;
    if(isNaN(input.value)){
        input.value = 1;
    }
    cartTotal(); 
}

function cartTotal() {
    var cartItem = document.getElementsByClassName("cart-items")[0];
    var cartRows = cartItem.getElementsByClassName("cart-row");
    var total = 0;
    for( var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];
        var price = cartRow.getElementsByClassName('cart-price')[0];
        var quantity = cartRow.getElementsByClassName('cart-quantity-input')[0];

        var itemPrice = price.innerText;
        var itemQuantity = quantity.value;

        total = total + (itemPrice * itemQuantity);
    }
    document.querySelector(".cart-total-price").innerText = total;
}