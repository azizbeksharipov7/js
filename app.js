// alert

// prompt

// confirm

// Foydalanuvchiga ma'lumot berish

// alert("hii");



// // Foydalanuvchidan ma'lumot olish

// prompt("ismingiz");
// confirm("Saytdan chiqmoqchimisiz?");

// // dasturchilar o'rtasidagi o'zaro muloqot
// console.log("123");

// // veriables
// // $primary

// var primary="lorem";
// let secondary=19112004;

// secondary = azizbek;

// const number = 1;

// console.log(primary);
// console.log(secondray);
// console.log(number);


// let userage = prompt ("yoshingizni kiriting");
// if (userage >7 && userage<18){
//     console.log("Siz o'quvchisiz");
// } else if (userage>=18 && userage<25){
//     console.log("Siz talabasiz");
// }
// else if (userage>25 && userage<60){
//     console.log("Siz ishlaysiz");
// }
// else if (userage>=60){
//     console.log("Siz nafaqadasiz");
// }
// else {
//     console.log("error");
// }

// let number = prompt("Son kiriting");

// if(number%2==0){
//     console.log("juft son");
// }
// else{
//     console.log("top son");
// }

// const userHeight = prompt("height");
// const userWeight = prompt("Weight");

// const bmi=userWeight/(userHeight*userHeight);
// console.log(bmi);

// if (bmi<18.5){
//     console.log("Underweight");
// }
// else if (bmi>=18.5){
//     console.log("NOrmal");
// }
// else if (bmi<=25 && bmi<29.9){
//     console.log("Overweight");
// }
// else if(bmi>=30){
//     console.log("Obesity");
// }
// else{
// console.log("error");
// }

// let num1=+prompt("BIrinchi son");
// let num2=+prompt("Ikkinchi son");
// let num3=+prompt("Uchinchi son");
// if(num1>num2 && num1>num3){
//     console.log(num1);
// }
// else if(num2>num1 && num2>num3){
//     console.log(num2);
// }
// else if(num3>num2 && num3>num1){
//     console.log(num3);
// }
// else if (num1>num2 && num1<num3) {
//   console.log(num3);
// }
// else if(num2>num1 && num2<num3){
//     console.log(num3);
// }

// else if (num3>num1 && num3<num2){
//     console.log(num2);
// }
// else if (num2>num1 && num3<num2){
//     console.log(num2);
// }
// else if(num1==num2 && num2==num3){
//     console.log(num1);
// }
// else if(num1==num2 && num2<num3){
//     console.log(num3);
// }
// else if(num1==num2 && num2>num3){
//     console.log(num2);
// }
// else if(num1>num2 && num2==num3){
//     console.log(num1);
// }
// else if(num1<num2 && num2==num3){
//     console.log(num1);
// }






//  let usermoney = prompt ("Pulingizni kiriting kiriting so'mda");
//  if (usermoney >1000 && usermoney <2000){
//      console.log("Siz talabasiz");
//  } else if (usermoney>=15000 && usermoney<25000){
//      console.log("Siz ishlaysiz");
//  }
// else if (usermoney>25000 && usermoney<60000){
//     console.log("Siz kattaroq joyda ishlaysiz");
//  }
//  else if (usermoney>=5600){
//      console.log("Siz boysiz");
//  }
//  else {
//      console.log("error");
//  }

// let word = prompt("So'z kiriting");


// if(word==word.split("").reverse().join("")){
//     console.log("palindrom so'z");

// }
//  else{
//     console.log("palindrom so'z emas");
//  }

// Strings
// 1. concat= ikki stringni bir-biriga qo'shadi
// 2. includes = string ichidan ma'lum so'zning bor yoki yo'qligini tekshiradi boolen qiymat qaytaradi
// 3. split = textni bo'laklarga ajratishb uchun
// 4. replace = textdagi ma'lum bir so'zni o'rnini almashitiradi
// 5. trim = textni boshi va oxiridagi bo'sh joylarni 
// 6. toUppercase = katta harf
// 7. toLOwercase = kichik harf
// 8. reverse = teskari qilish

// 9. join = birlashtirish
// 10.charAt=ma'lum harfni qirqib olish
// Data types 
// I Primitive data types
// 1.String- let text = "lorem";
// 2.Number- let number =7;
// 3.Bigint- katta sonlarda;
// 4.Boolean- let user =fasle;
// 5.Underfined - let foo; 
// 6.Null - num=null;
// 7.Symbol



// let comment = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium, sequi quidem repellat dolore dolorum deleniti nulla totam recusandae ipsum harum laudantium quaerat error mollitia officiis, in delectus doloremque assumenda a! Quidem unde non facilis voluptate. Libero atque cumque obcaecati voluptate eligendi minus veritatis inventore ea! Est, saepe! Optio harum eius placeat, nesciunt illum odit perspiciatis molestiae, voluptate maiores nihil, at quas in hic quis dolore soluta? Ad autem enim natus sint doloremque omnis voluptas officia laborum cupiditate aut dolorem repellat optio eos ut, quasi excepturi temporibus, quod officiis corrupti, nostrum sunt? Cumque beatae soluta libero sunt, sapiente odit nulla sint."

// console.log(comment.replaceAll("dolor", "dolorrr"));


// non primative 
// object => function, array, object
// function myfirstFunction(str){
//     if (str == str.split("").reverse().join("")){
//         console.log("palindrom");
//     } else{
//         console.log("NOt palindrom");
//     }
// }
// myfirstFunction("iiiii");


// function findsum(a){
//     console.log(Math.sqrt(a));

// }
// findsum(200);
// findsum(1000);

// function salom(name) {
//     return "hello, " + name + " how are you doing?";
// }
// salom("name");
// let username = "gfhbjnkml";
// function greeting(name) {
//     return "Hello," + "";
// }
// greeting("john");
// console.log(`Hello, ${username}, how are you doing today?`);
// greeting("John");

// function greeting(name){
//    if(name){
//      return `Hello, ${name}, how are you doing today?`;
// } else{ return "hello world";
// }
// }
// console.log(greeting("JOhn"));

// console.log(greeting());

//  function bmi(h,w){ 
//      const calcBmi=w/(h*h);



//      if (calcBmi<18.5){

//           console.log("Underweight" , calcBmi);
//       }
//       else if (calcBmi>=18.5 && calcBmi<=29.9){

//           console.log("NOrmal", calcBmi);
//       }
//       else if (calcBmi>=25 && calcBmi<29.9){

//           console.log("Overweight", calcBmi);
//       }
//       else if(calcBmi>=30){

//           console.log("Obesity",calcBmi);
//       }
//       else{
//           console.log("errror");


//       }


//  }

// bmi(1.5, 80);

// function userage(age){
//     console.log( new Date ().getFullYear()-age);

// }

// userage(19);
// // 1$=12310sum

// function dollortosum(dolor){
//      calcsum=(dolor*12310);

// }
// function sumtodollor(sum){
//      calcdollor=sum/12310;
// }
// dollortosum()

// const value = 12310;

// function cutNumbers(number){
//      return +number.toFixed(2);
// }
// let usereBudgetSUM=+prompt("Sum kiriting");
// let usereBudgetDollar=+prompt("USD kiriting");

// function convertUzstoUsd(money){
//      const sum =money/value;
//      const result =cutNumbers(sum);
//      alert(`$ ${result}`);
// }
// function convertUsdtosum(money){
//      const dollar=money*value;
//      const result = cutNumbers(dollar);
//      alert(`${result.toLocaleString()} sum`);
// }
// convertUzstoUsd(usereBudgetSUM);
// convertUsdtosum(usereBudgetDollar);

//  function mouth_size(animal){
//  let animalName=animal.toLowerCase();
// if (animal=="alligator"){
//    return "small";

// }

// else {
//   return "wide";
// }

//  }
//  mouth_size("alligator");

// //  Funksiya turlar



// //  1. Named function


// function nameOfFunction(a,b){
//   return a+b;
// }
// console.log(nameOfFunction(10,20));


// // 2.Anonymous fumction 


// const myFn=function(a,b){
//   console.log(a,b);
// }
// myFn(10,20)


// // 3. Arrow function 


// const arrFn=(a,b)=>{
//   console.log("Arrow function");
// }
// arrFn(50,60);


// // 4.Immediatly Invoked Function Expression IIFE


// (function(a){
//   console.log("IIFE", a);
// })("azizbek");


// // 5.Higher order function 

// function randomNumbers(min,max){
//   return Math.raund(Math.random()*(max-min)+min);
// }

// function higherOrderFn(a,b){
//   console.log(a,b,a+b);
// }

// higherOrderFn(randomNumbers(1,100), randomNumbers(1,20));

//  Named function

//  function greeting(name){
//     if(name){
//       return `Hello, ${name}, how are you doing today?`;
//  } else{ return "hello world";
//  }
//  }
//  console.log(greeting("JOhn"));

//  console.log(greeting());

//   // 2.Anonymous fumction 


//  const myFn=function(name){
//   if (name){ 
//     return `Hello ${name}, how are you doing today?`;
//     } else {return "hello world";}
//  }
// console.log( myFn("JOhn"));
// console.log(myFn());

// // 3. Arrow funtion

//  const arrFn=(name)=>{
//   if (name){ 
//     return `Hello ${name}, how are you doing today?`;
//     } else {return "hello world";}

//  }
//  console.log( arrFn("JOhn"));
//  console.log(arrFn());

// //  4.Immediatly Invoked Function Expression IIFE


// (function(name){
//   if (name){ 
//     console.log( `Hello ${name}, how are you doing today?`);
//     } else {console.log("hello world");}

//  })("Azizbek");





// function leo(oscar) {
//   if (oscar == 88) {
//     return `Leo nihoyat oskarni qo'lga kiritdi! Leo baxtli`;
//   }
//   else if (rank > 86 && rank < 88) {
//     return `Leoga qachon Oskar berasiz?`;
//   }
//   else if (rank = 86) {
//     return `Wolf of Wallstreet uchun ham emasmi?!`;
//   }
//   else if (rank > 88) {
//     return `Leo allaqachon bittasini olgan!`;
//   }

// }
// console.log(leo(88));

// console.log(leo(86));
// console.log(leo(23));
// console.log(leo(87));



// Switch case 

let str = "Monday";
switch (str) {
  case "Monday":
    console.log(1);
    break;
  case "Tuesday":
    console.log(2);
    break;
  case "Wednesday":
    console.log(3);
    break;
  case "Thursday":
    console.log(4);
    break;
  case "Friday":
    console.log(5);
    break;
  case "Saturday":
    console.log(6);
    break;
  case "Sunday":
    console.log(7);
    break;
  default:
    console.log("error");
}


// Non primativa=Object=> funtion, array, object

const array1=[1,2,3,4,5,6,7]

array1.push(10) //oxiriga narsa qoshadi
array1.pop()  //oxiridan narsa ochiradi

array1.unshift(-1) //boshiga narsa qoshadi
array1.shift()  // boshidan narsa ochiradi

console.log(array1);

const array2=[1,2,3,4,5,6,7]
const array3=["a", "b", "c"]
const arr4=array2.concat(array3)

console.log(arr4)

const foo=array1.filter(el=> el<5)
const abs=array1.find(el => el>2)
console.log(abs);



























