let carts = document.querySelectorAll(".buy");


let products = [
    {
        name: 'wireless headphone',
        price: 20,
        inCart:0
    },
    {
        name: 'iphone 12',
        price: 50,
        inCart:0
    },
    {
        name: 'samsung',
        price: 30,
        inCart:0
    },
    {
        name: 'mouse',
        price: 10,
        inCart:0
    },
    {
        name: 'keyboard',
        price: 15,
        inCart:0
    },
    {
        name: 't shirt',
        price: 15,
        inCart:0
    }

]

for(let i =0;i<carts.length;i++){
    carts[i].addEventListener('click', function(event){
        cartNumbers(products[i]);
    })
}

function cartNumbers(product) {
    console.log("The product clicked is", product);
    let productNumbers=localStorage.getItem('cartNumbers');
    
    productNumbers=parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers+1);
    }

    else{
        localStorage.setItem('cartNumbers', 1);
    }

    setItems(product)
    
    // console.log(productNumbers);
    
}


function setItems(product) {
    console.log("Product is ", product);
    product.inCart=1;
    let cartItems={
        [product.name]:product
    }

    localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}