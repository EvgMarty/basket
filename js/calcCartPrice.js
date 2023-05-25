//Подсчет общей стоимости корзины


//создаем функию пересчет общей стоимости заказа
function calcCartPrice(){
   
   //Находим все товарды добавленые в корзину 
   const cartItem = document.querySelectorAll('.cart-item');
   //Находим стоимость доставки
   const free = document.querySelector('.free');
   //Найдем цену на странице
   const totalPriceEl = document.querySelector('.total-price');

   //Создадим переменую общей стоимости
   let totalPrice = 0;



   //Методом forEach обращаемся каждому елементу внутри корзины 
   cartItem.forEach((item)=>{

      //Находим количество заказа
      const amountEl = item.querySelector('[data-counter]');
      //Находим стоимость заказа
      const priceEl = item.querySelector('.price__currency');


      //Преобразуем наши данные в целые числа и перемножим кол-во на стоимость 
      const cuurentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
      //Добавим перемноженые числа  в общую стоимость 
      totalPrice = totalPrice + cuurentPrice;

   });

   //Отображаем цену на странице
   totalPriceEl.innerText = totalPrice;

   //Если стоимость больше 800 грн то доставка бесплатная
   if(totalPrice >= 800){
      free.classList.add('green');
      free.innerText = 'безкоштовно';
   }else{
      free.classList.remove('green');
      free.innerText = '250 грн';
   }

};

