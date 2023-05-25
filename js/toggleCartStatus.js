//Делаем проверку на наличие елементов в корзине 

//Eсли пустая ставим плашку козрина пустая и убираем форму
// Если в корзине есть елементы убираем плашку корзина пустая и добавляем форму


function toggleCartStatus(){
   //Находим корзину
   const cartWraper = document.querySelector('.cart-wraper');
   //Находим плашку корзина пустая
   const cartEmptyBadge = document.querySelector('[data-cart-empty]');
   //Нахлодим форму
   const orderForm = document.querySelector('#order-form');
   //Нахлодим стоимость заказа
   const cartDelivery = document.querySelector('[data-cart-delivery]');


   // Делаем проверку на наличие елементов
   if(cartWraper.children.length > 0){
      cartEmptyBadge.classList.add('none');
      orderForm.classList.remove('none');
      cartDelivery.classList.remove('none');
   }else{
      cartEmptyBadge.classList.remove('none');
      orderForm.classList.add('none');
      cartDelivery.classList.add('none');
   }
}