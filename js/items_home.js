var all_products_json;
var items_in_cart= document.querySelector(".items_in_cart");
let product_cart=[];

function addToCart(id,btn)
{
    product_cart.push(all_products_json[id])
    btn.classList.add("active")
    getCartItems()
}


let count_item=document.querySelector('.count_item');
let price_cart_head= document.querySelector('.price_cart_head')
let count_item_cart=document.querySelector('.count_item_cart');
let price_cart_total=document.querySelector('.price_cart_total');




function getCartItems(){
    let total_price=0;
   let items_c="";
   for(let i=0;i< product_cart.length;i++)
    {
        items_c+=`

                    <div class="items_cart">
                <img src="${product_cart[i].img}" alt="">
                <div class="content">
                    <h4>${product_cart[i].name}</h4>
                    <p class="price_cart">$${product_cart[i].price}</p>
                </div>
                <button onclick="remove_from_cart(${i}) " class="delet_item"><i class="fa-regular fa-trash-can"></i></button>
            </div>
        `
        total_price+=product_cart[i].price

    } 
    items_in_cart.innerHTML=items_c
    price_cart_head.innerHTML= "$" +total_price
    count_item.innerHTML=product_cart.length

    price_cart_total.innerHTML= "$" +total_price
    count_item_cart.innerHTML= `${product_cart.length} Item in Cart`
}

function remove_from_cart(index){
    product_cart.splice(index,1)
    getCartItems()

    let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
    for(let i=0;i<addToCartButtons.length;i++)
    {
        addToCartButtons[i].classList.remove("active") 
        product_cart.forEach(product =>{
            if(product.id == i)
            {
                addToCartButtons[i].classList.add("active") 
            }
        })
    }
}
// back to top with js
function back(){
    window.scrollTo({
        top:0,
        behavior:"smooth"

    })

}

//open menu
var menu=document.querySelector('#menu');
function open_menu()
{
    menu.classList.add("active");
}
function close_cart()
{
    menu.classList.remove("active");
}













/************************************************************/ 
fetch('js/items.json')
        .then(response => response.json())
        .then(data => {
            const swiper_items_sale =document.getElementById("swiper_items_sale")

            const other_product_swiper=document.getElementById("other_product_swiper")

            const other_product_swiper2=document.getElementById("other_product_swiper2")

            all_products_json=data
            
            data.forEach(product => {
                if(product.old_price)
                {
                    const percent_disc=Math.floor((product.old_price - product.price)/product.old_price*100)
                    swiper_items_sale.innerHTML +=`

                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        
                        <span class="sale_percentage">%${percent_disc}</span>
                        
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                
                        <h3 class="name_product"><a href="#">${product.name}</a></h3>
                        
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                            <p class="old_price">$${product.old_price}</p>
                        </div>
                    </div>
                `
                } 
            });

            data.forEach(product => {
                
                   
                    other_product_swiper.innerHTML +=`

                    <div class="product swiper-slide">
                        <div class="icons">
                            <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                            <span><i class="fa-solid fa-heart"></i></span>
                            <span><i class="fa-solid fa-share"></i></span>
                        </div>
                        

                        
                        <div class="img_product">
                            <img src="${product.img}" alt="">
                            <img class="img_hover" src="${product.img_hover}" alt="">
                        </div>
                
                        <h3 class="name_product"><a href="#">${product.name}</a></h3>
                        
                        <div class="stars">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                        
                        <div class="price">
                            <p><span>$${product.price}</span></p>
                        </div>
                    </div>
                `
                
            })

            data.forEach(product => {
                
                   
                other_product_swiper2.innerHTML +=`

                <div class="product swiper-slide">
                    <div class="icons">
                        <span><i onclick="addToCart(${product.id},this)" class="fa-solid fa-cart-plus"></i></span>
                        <span><i class="fa-solid fa-heart"></i></span>
                        <span><i class="fa-solid fa-share"></i></span>
                    </div>
                    

                    
                    <div class="img_product">
                        <img src="${product.img}" alt="">
                        <img class="img_hover" src="${product.img_hover}" alt="">
                    </div>
            
                    <h3 class="name_product"><a href="#">${product.name}</a></h3>
                    
                    <div class="stars">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    
                    <div class="price">
                        <p><span>$${product.price}</span></p>
                    </div>
                </div>
            `
            
        })
        })