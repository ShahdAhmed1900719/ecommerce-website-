//img swiper
var swiper = new Swiper(".slide-swp", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullests:true,
      clickable:true
    },
    autoplay:{
      delay:2500,
    },
    loop:true,
  });

  //products swiper
  var swiper2 = new Swiper(".sale_sec", {
   
    slidesPerView:5,
    spaceBetween:30,
    autoplay:{
      delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
  });

  //second swiper
  var swiper2 = new Swiper(".product_swip", {

    slidesPerView:4,
    spaceBetween:30,
    autoplay:{
      delay:3000,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    },
    loop:true,
  });