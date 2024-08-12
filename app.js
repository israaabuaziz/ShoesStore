let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick =() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});

document.querySelectorAll('.featured-image-4').forEach(image_4 =>{
  image_4.addEventListener('click', () =>{
      var src = image_4.getAttribute('src');
      document.querySelector('.big-image-4').src = src;
  });
});

document.querySelectorAll('.featured-image-5').forEach(image_5 =>{
  image_5.addEventListener('click', () =>{
      var src = image_5.getAttribute('src');
      document.querySelector('.big-image-5').src = src;
  });
})




//cart-code
if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready())
}
else{
    ready()
}

function ready(){
    ready1();
    ready2();
    ready3();
}


function ready1(){
    const cartbtn1=document.querySelectorAll('.cart-btn-slider');
    cartbtn1.forEach(function(btn){
        btn.addEventListener('click',function(add){

            //get-img
            const fullimgpath=add.target.parentElement.parentElement.children[1].childNodes[1].src;
            const slicedimg=fullimgpath.indexOf("imgs")+4;
            const partpath=fullimgpath.slice(slicedimg);
            const item={};
            item.img=`imgs-cart${partpath}`;
            
            //get-name

            const name=add.target.parentElement.children[1].textContent;
            item.name=name;

            //get-price

            const price=add.target.parentElement.children[3].textContent;
            const finalprice=price.slice(2);
            item.price=finalprice;
            
            //putting-item-in-cart

            const cartItems=document.createElement("div");
            cartItems.innerHTML=`
            <img src=${item.img} class="imgincart" id="item-img" alt="">
          <div class="cart-item-text">

            <p id="cart-item-title">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
          </div>
          <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fa fa-trash-o"></i>
          </a>
          </div>
            `;
            const cart=document.getElementById("cart");
            const carttotal=document.querySelector(".cart-total-container");
            cart.insertBefore(cartItems,carttotal);
            alert("ITEM ADDED TO CART");
            showtotal();

            //console.log(item);
            
        })
    })

}
function ready2(){
    const cartbtn2=document.querySelectorAll('.cart-btn-product');
    cartbtn2.forEach(function(btn){
        btn.addEventListener('click',function(add2){
            
            //get-img

            const fullimgpath=add2.target.parentElement.parentElement.children[1].childNodes[1].src;
            const slicedimg=fullimgpath.indexOf("imgs")+4;
            const partpath=fullimgpath.slice(slicedimg);
            const item={};
            item.img=`imgs-cart${partpath}`;

            //get-name

            const name=add2.target.parentElement.parentElement.children[1].childNodes[3].textContent;
            item.name=name;

            //get-price

            const price=add2.target.parentElement.parentElement.children[1].childNodes[5].childNodes[0].textContent;
            const finalprice=price.slice(2);
            item.price=finalprice;

            //adding-to-cart

            const cartitems=document.createElement("div");
            cartitems.innerHTML=`
            <img src=${item.img} class="imgincart" id="item-img" alt="">
          <div class="cart-item-text">

            <p id="cart-item-title">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
          </div>
          <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fa fa-trash-o"></i>
          </a>
          </div>
            `;
            const cart=document.getElementById("cart");
            const carttotal=document.querySelector(".cart-total-container");
            cart.insertBefore(cartitems,carttotal);
            alert("ITEM ADDED TO CART");
            showtotal();



            


           //console.log(item);

        })
    })
}

function ready3(){
    const cartbtn3=document.querySelectorAll('.cart-btn-featured');
    cartbtn3.forEach(function(btn){
        btn.addEventListener('click',function(add3){

            //get-img

            const fullimgpath=add3.target.parentElement.parentElement.children[0].children[1].childNodes[1].src;
            const slicedimg=fullimgpath.indexOf("imgs")+4;
            const partpath=fullimgpath.slice(slicedimg);
            const item={};
            item.image=`imgs-cart${partpath}`;

            //get-price

            const price=add3.target.parentElement.parentElement.children[1].children[3].children[0].textContent;
            const finalprice=price.slice(2);
            item.price=finalprice;

            //get-name

            const name=add3.target.parentElement.parentElement.children[1].children[0].textContent;
            item.name=name;

            //adding-items

            const CartItems=document.createElement("div");
            CartItems.innerHTML=`
            <img src=${item.image} class="imgincart" id="item-img" alt="">
            <div class="cart-item-text">

            <p id="cart-item-title">${item.name}</p>
            <span>$</span>
            <span id="cart-item-price" class="cart-item-price" class="mb-0">${item.price}</span>
            </div>
            <a href="#" id='cart-item-remove' class="cart-item-remove">
            <i class="fa fa-trash-o"></i>
            </a>
            </div>
            `;
            const cart=document.getElementById("cart");
            const cartTotal=document.querySelector(".cart-total-container");
            cart.insertBefore(CartItems,cartTotal);
            alert("ITEM ADDED TO CART");
            showtotal();

           

        })
    })

}
function showtotal(){
    const total=[];
    const items=document.querySelectorAll('.cart-item-price');
    items.forEach(function(item){
        total.push(parseInt(item.textContent))

    })
    const totalmoney=total.reduce(function(total , item){
        total += item ;
        return total;
    });
    const finalmoney=totalmoney;
    document.getElementById("cart-total").textContent=finalmoney;
}


    





