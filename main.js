



// let imt1 = +prompt("1ci imtahan daxil edin ");
// let imt2 = +prompt("2ci imtahan daxil edin ");
// let final = +prompt("final daxil edin ");

// let average = imt1 * 0.3 + imt2 * 0.3 + final * 0.4;


// if (average >= 90 && average <= 100) {

//     console.log(`siz ${average}  uygun olaraq "A" almisiniz`);
// } 
// else if (average >= 80 && average <= 90) {

//     console.log(`siz ${average}  uygun olaraq "B" almisiniz`);
// }
// else if (average >= 70 && average <= 80) {

//     console.log(`siz ${average}  uygun olaraq "C" almisiniz`);
// }
// else if (average >= 60 && average <= 70) {

//     console.log(`siz ${average}  uygun olaraq "C" almisiniz`);
// }
// else {

//     console.log(`siz ${average}  uygun olaraq imtahandan kesildiniz`);
// }


// tasks

// 1.1 Dəyişən yaradın və dəyərini prompt vasitesi ilə userdan alın


// const user = +prompt(`Bir eded daxil edin`);

// console.log(user);



// 1.2 O dəyişənə nəzərən şərt strukturu yaradın və yaşa görə şərtlər qurun.
//Məs - 6 yaçdan 10 yaşa qdərə iptidai, 10-14 yaş orta , 15- 17 yaş tam orta ,
//   17 - 21 uni, 21 dən sonra iş həyatı

// let  age = +prompt(`Yas daxil edin`);


// if(age >=6 && age <= 10){
//     console.log(`${age}  yasa uygun olaraq  "Ibtidai "`);
// } else if(age >10 && age <= 14) {
//     console.log(`${age}  yasa uygun olaraq  "Orta "`);
// }  else if(age >=15 && age <= 17) {
//     console.log(`${age}  yasa uygun olaraq  "Tam orta"`);
// } else if(age >17 && age <= 21) {
//     console.log(`${age}  yasa uygun olaraq  "Universitet telebesi"`);
// } else if(age > 21 && age <=65) {
//     console.log(`${age}  yasa uygun olaraq  "Is heyati"`);
// } else if(age <= 0 ||    age >65 ){
//     console.log(` yas  menfi  ve ya 65den boyuk ola bilmez`); 
// }

// verilmis n ededinin 3-e ve 7-e bolunub bolunmemesini tapin

// let usr = +prompt(` Eded daxil edin`);

// if( usr % 3 ===0 && usr % 7 ===0){
//     console.log(`Eded 3 ve 7 ye bolunur`);
// } else {
//     console.log(`Eded 3 ve 7 ye bolunmur`);
// }


// userden mail ve pass qebul edin. Mail beraberdise user@gmail.com'a pass beraberdise
// pass12345'e giris olunsun. eks halda olunmasin


// const mail = prompt(`Username daxil edin `);
// const password = prompt(`Password daxil edin`);

// if(mail === "user@gmail.com" && password === "pass12345"){
//     console.log(`Giris edildi`);
// } else{
//     console.log(`username ve ya password yanlisdir`);
// }


// sade ve murekkeb


// let usr = +prompt(` Eded daxil edin`);
// let k = 0;

// for(let i =2; i< usr - 1; i++){
//     if(usr % i === 0){
//         k=k+1;
//         break;
//     }
// }

// if (k> 0){
//     console.log(`murekkeb eded`);
// } else{
//     console.log(`sade`);
// }




// pozitiv ve neqativ



// const eded = +prompt(`Eded daxil edin`);

// if(eded > 0 ){
//     console.log(`eded pozitivdir`);
// }  else if (eded < 0 ) {
//     console.log(`eded neqativdir`);
// } else if (eded === 0) {
//     console.log(`eded ne pozitiv ne neqativdir`);
// }


// user chekisini ve boyunu daxil etsin ve ona uygun kutle indexi geri donsun


// let height = +prompt(`Boyunuzu daxil edin`);
// let  weight = +prompt(`Cekinizi daxil edin`);

// height = height * height;
// weight = weight / height;



// if(weight < 18){
//     console.log(`Kutle indexsiniz "Ariq"`);
// } else if(weight >= 18 && weight <= 25) {
//     console.log(`Kutle indexsiniz "Normal"`);
// } else if(weight > 25 && weight <= 30) {
//     console.log(`Kutle indexsiniz "Hafif sisman"`);
// } else if(weight > 30 && weight <= 40) {
//     console.log(`Kutle indexsiniz "Sisman"`);
// }  else if( weight > 40){
//     console.log(`Kutle indexsiniz "Obez"`); 
// }


// İstifadəçidən reqem daxil etməyi xahiş edin. Daxil edilmiş rəqəm 10-dan böyükdürsə,
// "10-dan böyük rəqəm", 10-a bərabərdirsə,
// "10-a bərabər rəqəm", əks halda "10-dan kiçik rəqəm" alert edin.




// let usr = +prompt(`Eded daxil edin`);

// if( usr > 10){
//    alert(`10-dan böyük rəqəm`)
// } else if( usr === 10 ) {
//     alert(`10-a bərabər`);
// } else {
//     alert(`10-dan kiçik rəqəm`);
// }


//İstifadəçidən ay yazmağı xahiş edin. Yazılı ay "Yanvar", "Fevral" və ya "Martdırsa, ekranda "Qış" yazın.
//"Aprel", "May" və ya "İyun" olduqda "Bahar mövsümü", "İyul", "Avqust" və ya "Sentyabr" olduqda "Yay",
//"Oktyabr", "Noyabr" və ya "Dekabr" olduqda "Payız" çap edin.




// const user = prompt(` Ay daxil edin `);

// if( user ==="Yanvar" || user === "Fevral"  || user === "Mart"){
//     console.log(`Qis`)
// } else if( user ==="Aprel" || user === "May"  || user === "İyun"){
//     console.log(`Bahar mövsümü`)
// }  else if( user ==="İyul" || user === "Avqust"  || user === "Sentyabr"){
//     console.log(`Yay`)
// }  else if( user ==="Oktyabr" || user === "Noyabr"  || user === "Dekabr"){
//     console.log(`Payız`)
// } else{
//     console.log(`Duzgun variant daxil edin`);
// }


//İstifadəçidən "Hansı ayda doğulmusan?" soruş. İstifadəçinin daxil etdiyi dəyər 1 olarsa "Yanvar",
//2 olarsa "Fevral", 3 olarsa "Mart" kimi ay adları olan mesaj qutusunu açın.

// const user = +prompt(`Hansı ayda doğulmusan?`);

// if( user === 1){
//     console.log(`Yanvar`)
// } else if( user === 2){
//     console.log(`Fevral`)
// }  else if( user === 3){
//     console.log(`Mart`)
// }  else if( user === 4){
//     console.log(`Aprel`)
// }  else if( user === 5){
//     console.log(`May`)
// }  else if( user === 6){
//     console.log(`Iyun`)
// }  else if( user === 7){
//     console.log(`Iyul`)
// }  else if( user === 8){
//     console.log(`Avqust`)
// }   else if( user === 9){
//     console.log(`Sentyabr`)
// }     else if( user === 10){
//     console.log(`Oktyabr`)
// }     else if( user === 11){
//     console.log(`Noyabr`)
// }   else if( user === 12){
//     console.log(`Dekabr`)
// }    



//1-12 arasında etibarlı dəyər daxil edilmədikdə, "Yanlış giriş!" mesajınızı göstərin.

// const usr = +prompt(`Eded daxil edin`);

// if(!(usr>= 1 && usr < 12)){
//     console.log(`Yanlis giris`);
// } else {
//     console.log(`Etirbarli giris`);
// }





//  const arr = [1,2,3,4,5,6,7,8,9,10];

// for(let i=0; i< arr.length; i++){
//     console.log(i);
// }

// const n = 10;
// const m = 20;
// let sum = 0;
// let count = 0;

// for( let i=n; i<m; i++){
//     if(i % 2 === 0){
     
//       count ++;

     
//     }

// }
// console.log(count);





// let  a = +prompt(`eded  daxil et`);


// let fac;

// for(let i =1; i<=a; i++){

//    fac *= i;

// }

// console.log(fac);


// const arr = [1,2,3,4,5,6,7,8,9,10]

// let sum=0;

// for(let i=0; i<arr.length+1; i++){
//     // console.log(i);
//     if( arr[i] % 2 == 0){
//         sum+= arr[i]**2;
//     }
// }

// console.log(sum);


//  let people = [
//         {
//           name: "Alex",
//           country: "Russia",
//         },
//         {
//           name: "Fernando",
//           country: "Brazil",
//         },
//         {
//           name: "Hans",
//           country: "Germany",
//         },
//         {
//           name: "Mutallim",
//           country: "Iran",
//         },
//         {
//           name: "Zohre",
//           country: "Iran",
//         },
//         {
//           name: "Adil",
//           country: "Azerbaijan",
//         },
//         {
//           name: "Namjoo",
//           country: "Iran",
//         },
//       ];

     
      
//       for(let i =0; i<people.length; i++){
//         if(people[i].country ==="Iran"){
//             console.log(`${people[i].name} siz ${people[i].country} girdiyiniz ucun viza ala bilmersiz`);
          
//         }else{
//             console.log(`${people[i].name} siz ${people[i].country} girdiyiniz ucun viza ala bilersiz`);
//         }
//       }


// 10 user object array icinde name, age 
// ekran yasi 20den boyuk yazilsin 






// let user = [
//   {
//     name:"Anar",
//     age:20,
//   },
//   {
//     name:"Anar",
//     age:20,
//   },
//   {
//     name:"Behruz",
//     age:23,
//   },
//   {
//     name:"Cavid",
//     age:15,
//   },
//   {
//     name:"Davud",
//     age:32,
//   },
//   {
//     name:"Elshen",
//     age:40,
//   },
//   {
//     name:"Ferid",
//     age:17,
//   },
//   {
//     name:"Huseyn",
//     age:45,
//   },
//   {
//     name:"Ismayil",
//     age:50,
//   },
//   {
//     name:"Nuran",
//     age:30,
//   }
// ]

// for(let i=0; i<user.length; i++){
//   if(user[i].age > 20){
//    console.log(`${user[i].name} sizin yasiniz ${user[i].age}`); 
//   } 
// }


// kitab array 10  name, bestseller(true, false)
// true olanlar adla gelsin ekrana 


// let book = [
//   {
//     name:"A Tale of Two Cities  ",
//     bestsller:true,
//     number:1,
//   },
//   {
//     name:"The Little Prince (Le Petit Prince)",
//     bestsller:true,
//     number:2,
//   },
//   {
//     name:"The Hobbit",
//     bestsller:true,
//     number:3,
//   },
//   {
//     name:"Lolita",
//     bestsller:false,
//     number:4,
//   },
//   {
//     name:"Black Beauty",
//     bestsller:true,
//     number:5,
//   },
//   {
//     name:"The Ginger Man",
//     bestsller:true,
//     number:6,
//   },
//   {
//     name:"Heidi",
//     bestsller:true,
//     number:7,
//   },
//   {
//     name:"Call of the Wild",
//     bestsller:false,
//     number:8,
//   },
//   {
//     name:"The Bridges of Madison County",
//     bestsller:true,
//     number:9,
//   },
//   {
//     name:"The Kite Runner",
//     bestsller:true,
//     number:10,
//   },
// ];

// for(let i=0; i<book.length; i++){
//   if(book[i].bestsller === true){
//     console.log(`${book[i].number} - ${book[i].name}`)
//   }
// }

// const movie1 = {
//     name: "Hobit",
//     imbd: 8.2,
//   };
// const movie2 = {
//     name: "Lord of The Rings",
//     imbd: 9,
//   };
// const movie3 = {
//     name: "Silence of the Sea",
//     imbd: 6,
//   };
// const movie4 = {
//     name: "Caribbean Pirates",
//     imbd: 8,
//   };
// const movie5 = {
//     name: "Call of the Wild",
//     imbd: 8,
//   };
// const movie6 = {
//     name: "A Tale of Two Cities",
//     imbd: 8.8,
//   };
// const movie7 = {
//     name: "Lolita",
//     imbd: 6,
//   };
// const movie8 = {
//     name: "The Little Prince (Le Petit Prince)",
//     imbd: 7.2,
//   };
// const movie9 = {
//     name: "Forsaj",
//     imbd: 8.9,
//   };
// const movie10 = {
//     name: "Barbie",
//     imbd: 7.8,
//   };
  

// let array = [movie1, movie2,  movie3, movie4, movie5, movie6, movie7, movie8, movie9, movie10];

// console.log(array);

// for(let i=0; i< array.length; i++){
//   if(array[i].imbd > 8){
//     console.log(`${array[i].name}`);
//   }
// }


// function cem(m, n){

// console.log(m+n);
// }
// cem(7,6);

// const m=8;
// const n=9;

// function  cem(x, y){
//   console.log(x+y)

// }

// cem()











