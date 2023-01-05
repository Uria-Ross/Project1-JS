function pow(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  let task = prompt('Введіть номер завдання: ')
  switch(+task){
      case 1:{
          let x = prompt("x?");
          let n = prompt("n?");
          
          if (n < 0) {
            alert("Степень " + n + " не підтримується, введіть цілий степінь, більший 0");
          } else {
            alert(pow(x, n));
          }
      }break;
      case 2:{
          let userName = prompt(`Введіть ваше ім'я: `)
          alert(`Ваше ім'я: ${userName}`)
      }break;
      case 3:{
          let subtask = prompt('Введіть номер підзавдання: ')
          switch(+subtask){
              case 1:{
                  const CURRENT_YEAR = 2022;
                  let yearBirthUser = prompt('Введіть рік народження: ')
                  alert(`Вам : ${CURRENT_YEAR - yearBirthUser} років!`)
              }break;
              case 2:{
                  let sideLength = prompt('Введіть довжину сторони квадрата: ')
                  if(sideLength < 0){
                      alert('Помилка, сторона повинна бути більше 0 см!')
                      break;
                  }
                  else{
                      alert(`Периметр вашого квадрата: ${sideLength*4}`)
                  }
              }break;
              case 3:{
                  let distance = prompt('Введіть відстань між містами: ')
                  let time = prompt('Введіть час: ')
                  alert(`Ваша швидкість повинна бути: ${distance/time} км/год`)
              }break;
              case 4:{
                  let index = 0
                  let hardDisk = prompt('Введіть обсяг вашого жорстокого диску у ГБ: ')
                  hardDisk *= 1000;
                  while(hardDisk>=850){
                      hardDisk=hardDisk-850;
                      index++
                  }
                  alert(`Кількість можливих установок програми: ${index}; Залишок: ${hardDisk} МБ`)
              }break;
              case 5:{
                  let moneyUser = prompt('Введіть кількість грошей: ')
                  let priceChockolate = prompt('Введіть ціну за шоколадку: ')
                  let index = 0
  
                  while(+moneyUser>=+priceChockolate){
                      moneyUser=moneyUser-+priceChockolate
                      index++
                  }
                  alert(`Ви купите: ${index} шт; У вас залишиться: ${moneyUser} грн.`)
                  
              }break;
              case 6: {
                  let numberUser = prompt('Введіть трьохзначне число: ')
                  if(+numberUser>99 && +numberUser<1000){
                      numberUser=numberUser+''
                      numberUser=numberUser.split('').reverse().join('')
                      alert(numberUser)
                  }
                  else{
                      alert('Помилка!')
                  }
              }break;
              case 7:{
                  let numberUser = prompt('Введіть число: ')
                  if(+numberUser%2===0){
                      alert('Ваше число парне!')
                  }
                  else{
                      alert('Ваше число непарне!')
                  }
              }break;
              default:{
                  alert('Помилка!')
              }break;
          }
      }break;
      case 4:{
          let subtask = prompt('Введіть номер підзавдання: ')
          switch(+subtask){
              case 1:{
                  let yearUser = prompt('Введіть ваш вік: ')
  
                  if(+yearUser>=0 && +yearUser<=2)
                      alert('Ви ще дитина!')
  
                  if(+yearUser>=12 && +yearUser<18)
                      alert('Ви є підліиком!')
  
                  if(+yearUser>=18 && +yearUser<60)
                      alert('Ви є дорослим!')
  
                  if(+yearUser>=60)
                      alert('Ви вже старий :(')
  
                  else
                      alert('Помилка!')
              }break;
              case 2:{
                  let symbol = prompt('Введіть число (0-9): ')
                  switch(+symbol){
                      case 1:{
                          alert('!')
                      }break;
                      case 2:{
                          alert('@')
                      }break;
                      case 3: {
                          alert('#')
                      }break;
                      case 4:{
                          alert('$')
                      }break;
                      case 5:{
                          alert('%')
                      }break;
                      case 6:{
                          alert('^')
                      }break;
                      case 7:{
                          alert('&')
                      }break;
                      case 8:{
                          alert('*')
                      }break;
                      case 9:{
                          alert('(')
                      }break;
                      case 0:{
                          alert(')')
                      }break;
                      default:{
                          alert('Помилка!')
                      }break;
                  }
              }break;
              case 3:{
                  let year = prompt('Введіть рік: ')
                  if(+year%4===0 && +year%100!==0){
                      alert('Ваш рік є високосним!')
                  }
                  else{
                      alert('Ваш рік не є високосним!')
                  }
              }break;
              case 4:{
                  let numberUser = prompt(`Введіть п'ятирозрядне число: `)
                  if(+numberUser>9999 && +numberUser<99999){
                      let reverseNumberUser = numberUser.split('').reverse().join('')
                      if(numberUser===reverseNumberUser){
                          alert('Ваше число є паліндромом.')
                      }
                      else{
                          alert('Ваше число не є паліндромом.')
                      }
                  }
                  else{
                      alert(`Ваше число не п'ятирозрядне!`)
                  }
              }break;
              case 5:{
                  let pricePurchase = prompt('Введіть суму покупки: ')
                  let discount=0;
                  if(+pricePurchase>=200 && pricePurchase<300){
                      discount = (pricePurchase*3)/100
                  }
                  if(+pricePurchase>=300 && +pricePurchase>500){
                      discount = (pricePurchase*5)/100
                  }
                  if(+pricePurchase>=500){
                      discount = (pricePurchase*5)/100
                  }
                  pricePurchase=pricePurchase-discount
                  alert(`Знижка: ${discount}, Ціна: ${pricePurchase}`)
              }break;
              case 6:{
                  let D = prompt('Введіть діаметр кола: ')
                  let P = prompt('Введіть периметр квадрату: ')
  
                  let len = P/4;
                  if(len>=D){
                      alert('Ваше коло поміститься в квадрат!')
                  }
                  else{
                      alert('Ваше коло не поміститься в квадрат!')
                  }
              }break;
              case 7:{
                  let questionOne = prompt('Скільки буде 2+2=') 
                  let questionTwo = prompt('Скільки буде 8*7=')
                  let questionThree = prompt('Скільки буде 1*0=')
                  
                  let result = 0
  
                  if(+questionOne===4){
                      result=result+2
                  }
                  if(+questionTwo===56){
                      result=result+2
                  }
                  if(+questionThree===0){
                      result=result+2
                  }
                  alert('Ви набрали: ' + result + ' очок!')
              }break;
              default:{
                  alert('Помилка!')
              }
          } 
      }break;
      default:{
          alert('Помилка!')
      }break;
  }
  
  