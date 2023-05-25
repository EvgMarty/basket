//Добавляем товар в корзину


//Находим корзину
const cartWraper = document.querySelector('.cart-wraper');


// Добавляем прослушку на всем окне
window.addEventListener('click', (event)=>{
   //Проверяем чтоб клик был совершон по кнопке "+ В Кошик"
   if(event.target.hasAttribute('data-cart')){
      //Находим карточку с товаром внутри которой был совершон клик
      const card = event.target.closest('.product__card');
      // Собираем данные с карточки и запишем их в обьект productInfo
      const productInfo = {
         id: card.dataset.id,
         img: card.querySelector('.product__card-img').getAttribute('src'),
         title: card.querySelector('.title-2').innerText,
         itemInBox: card.querySelector('[data-item-in-box]').innerText,
         price: card.querySelector('.price__currency').innerText,
         counter: card.querySelector('[data-counter]').innerText,

      };

      //Проверяем есть ли такой товар в корзине или нет
      const itemInCart = cartWraper.querySelector(`[data-id='${productInfo.id}']`);
      //Если товар есть в корзине
      if(itemInCart){
         const counterElement = itemInCart.querySelector('[data-counter]');
         counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter);
         
      }else{
         //Если товара нет в корзине
         //Создаем шаблоную строку и собраные данные подставляем в шаблон для корзины
         const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
              <div class="cart-item__top">
                <div class="cart-item__img">
                  <img src="${productInfo.img}" alt="">
                </div>
                <div class="d">
                  <div class="h5">${productInfo.title}</div>
                  <div class="small" data-item-in-box>${productInfo.itemInBox}</div>
                </div>
              </div>
              
              <div class="cart-item__bot">
                <div class="items counter-wrapper">
                  <div class="items__control" data-action="minus">-</div>
                  <div class="items__current" data-counter="">${productInfo.counter}</div>
                  <div class="items__control" data-action="plus">+</div>
                </div>

                <div class="price">
                  <div class="price__currency">${productInfo.price}</div>
                </div>
              </div>
            </div>`
      
         //Отобразим товар в корзине методом insertAdjacentHTML
         cartWraper.insertAdjacentHTML('beforeend', cartItemHTML);

      };

      //Сбросить счетчик товара на 1
      card.querySelector('[data-counter]').innerText = '1';

      //Функия отображения статуса корзины
      toggleCartStatus();

      //Запуск функию пересчета общей стоимости заказа
      calcCartPrice();

   };
});