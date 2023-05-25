// Увеличить или уменьшить кол-во товара



// Добавляем прослушку на всем окне
window.addEventListener('click', (event)=>{
   //Обьявляем переменую для счетчика
   let counter;

   //Проверяем чтоб нажатие произошло строго  по кнопке + Или -
   if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
      //Нашли родителя кнопки минус
      const counterWrapper = event.target.closest('.counter-wrapper');
      //Нашли дочерний єлемент с цифрой и присвоили его переменной счетчику
      counter = counterWrapper.querySelector('[data-counter]');
   }



   // Проверяем является ли єлемент кнопкой плюс 
   if(event.target.dataset.action === 'plus' ){
      //Плюсуем счетчик
      counter.innerText ++;
      
   }

   // Проверяем является ли єлемент кнопкой минус 
   if(event.target.dataset.action === 'minus' ){
      // Приобразовали счетчик в число  и проверяем записано ли в счетчик число больше 1  
      if(parseInt(counter.innerText) > 1){
         //Минусуем счетчик
         counter.innerText --;

      //Проверим если нажали на кнопку  - в корзине!
      }else if (event.target.closest('.cart-wraper') && parseInt(counter.innerText) === 1){
         //Удаляем товар из корзины
         event.target.closest('.cart-item').remove();

         //Функия отображения статуса корзины
         toggleCartStatus();

         //Запуск функию пересчета общей стоимости заказа
         calcCartPrice();

      }

   }

   //Проверим если нажали на кнопку  - или + в корзине!
   if( event.target.hasAttribute('data-action') && event.target.closest('.cart-wraper')){
      //Запуск функию пересчета общей стоимости заказа
      calcCartPrice();
   }

});