


// function isAdult(){
//     let  age =15;
//     if(age >15){
//         console.log("18den boyukdur")
//     } else{
//         console.log("18den kicikdir");
//     }
// }

// isAdult();

// function  getUser(name, surName){
//     console.log(`${name}  ${surName}`);
// };

// getUser("Sema","Babayeva");

// function cem(m,n) {

//     console.log(m + n);
// }

// cem();

// let m = +prompt("1ci Eded daxil edin");
// let n= +prompt("2ci Eded daxil edin");

// function cem(x,y){
//     console.log(x+y);
// }

// cem(m,n);


// Perimetr hesablama

// function kv(x, y, type) {
//     if (type === "Perimetr") {
//         let perimetr = (x + y) * 2;
//         console.log(perimetr);
//     }
//     if (type === "Sahe") {
//         let sahe = x * y;
//         console.log(sahe);
//     }
// }

// kv(5, 4, 'Perimetr');

//  return 

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function kv(array) {
//   for (let i = 0; i < array.length; i++) {
//     array[i] **= 2;

//   }
//   return array;
// }

// let result = kv(arr);
// console.log(result);



// function cube(a) {
//     let result = a ** 3;
//     return result;
// }

// let result = cube(3);
// console.log(result);


// function  cube(a){
//     let result = a*3;
// }

//  let result = cube(3);
// console.log(result);


//   ev tapsiriqlari


//1.1 Dəyişən yaradın və dəyərini prompt vasitesi ilə userdan alın


// let m = +prompt("1ci eded daxil edin");
// let n = +prompt("2ci eded daxil edin");


// function cem(x,y){
//     console.log(x+y);
// }

// cem(m,n);

// 1.2 O dəyişənə nəzərən şərt strukturu yaradın və yaşa görə şərtlər qurun.
//Məs - 6 yaçdan 10 yaşa qdərə iptidai, 10-14 yaş orta , 15- 17 yaş tam orta , 17 - 21 uni, 21 dən sonra iş həyatı

// let age = +prompt("yas daxil edin")

// function yas(){
//     if(age >6 && age <10){
//         console.log(`Sizin yasiniz ${age} oldugu ucun "Ibtidai tehsil "`);
//     } else  if (age >=10 && age <=14){
//         console.log(`Sizin yasiniz ${age} oldugu ucun "Orta tehsil "`);
//     } else if (age >=15 && age <=17){
//         console.log(`Sizin yasiniz ${age} oldugu ucun "Tam Orta tehsil"`);
//     } else if (age >=17 && age <=21){
//         console.log(`Sizin yasiniz ${age} oldugu ucun "Universitet"`);
//     } else if (age > 21){
//         console.log(`Sizin yasiniz ${age} oldugu ucun "Is heyati"`);
//     } else if(age < 0  || age >70) {
//         console.log(`6 - 70 yas  araligi yas qeyd edin `); 
//     }
// }

// yas();


// verilmis n ededinin 3-e ve 7-e bolunub bolunmemesini tapin

// let user = +prompt("Eded daxil edin")

// function number(){
//     if (user % 3 === 0 && user % 7 ===0){
//         console.log(`${user} ededi 3 ve 7ye bolenendir`);
//     } else{
//         console.log(`${user} ededi 3 ve 7 yen bolunmur`);
//     }
// }

// number();



// userden mail ve pass qebul edin. Mail beraberdise user@gmail.com'a pass beraberdise
// pass12345'e giris olunsun. eks halda olunmasin


// let usr = prompt("Username daxil edin");
// let pass = prompt("Password daxil edin");

// function login(){
//     if ( usr ==="user@gmail.com" && pass === "pass12345"){
//         console.log(`Giris ugurla tamamlandi`);
//     } else{
//         console.log(`mail yaxud password duzgun deyil`);
//     }
// }

// login();

// user chekisini ve boyunu daxil etsin ve ona uygun kutle indexi geri donsun


// let height = +prompt(`Boyunuzu daxil edin`);
// let  weight = +prompt(`Cekinizi daxil edin`);

// height = height * height;
// weight = weight / height;



// function size(){
//     if(weight < 18){
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
// }

// size();




// İstifadəçidən reqem daxil etməyi xahiş edin. Daxil edilmiş rəqəm 10-dan böyükdürsə,
// "10-dan böyük rəqəm", 10-a bərabərdirsə,
// "10-a bərabər rəqəm", əks halda "10-dan kiçik rəqəm" alert edin.




// let usr = +prompt(`Eded daxil edin`);

// function eded(){
//     if( usr > 10){
//    alert(`10-dan böyük rəqəm`)
// } else if( usr === 10 ) {
//     alert(`10-a bərabər`);
// } else {
//     alert(`10-dan kiçik rəqəm`);
// }

// }

// eded();



// const user = prompt(` Ay daxil edin `);

// function month(){
//     if( user ==="Yanvar" || user === "Fevral"  || user === "Mart"){
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
// }

// month();


//1-12 arasında etibarlı dəyər daxil edilmədikdə, "Yanlış giriş!" mesajınızı göstərin.

// const usr = +prompt(`Eded daxil edin`);

// function login(){
//     if(!(usr>= 1 && usr < 12)){
//     console.log(`Yanlis giris`);
// } else {
//     console.log(`Etirbarli giris`);
// }

// }



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


//       function viza(country){
        
//         for(let i =0; i<people.length; i++){
//             if(people[i].country ==="Iran"){
//                 console.log(`${people[i].name} siz ${people[i].country} girdiyiniz ucun viza ala bilmersiz`);
              
//             }else{
//                 console.log(`${people[i].name} siz ${people[i].country} girdiyiniz ucun viza ala bilersiz`);
//             }
//           }
           

//           return country;

//       }

//  let result = viza(people);


// const athletes = [
//     {
//       name: "Usain Bolt",
//       sport: "Track and Field",
//       hasWorldRecord: true,
//       gender: "Male",
//       age: 35,
//       totalMedals: 8,
//       country: "Jamaica",
//     },
//     {
//       name: "Simone Biles",
//       sport: "Gymnastics",
//       hasWorldRecord: false,
//       gender: "Female",
//       age: 25,
//       totalMedals: 12,
//       country: "United States",
//     },
//     {
//       name: "Michael Phelps",
//       sport: "Swimming",
//       hasWorldRecord: true,
//       gender: "Male",
//       age: 37,
//       totalMedals: 28,
//       country: "United States",
//     },
//     {
//       name: "Katie Ledecky",
//       sport: "Swimming",
//       hasWorldRecord: true,
//       gender: "Female",
//       age: 25,
//       totalMedals: 10,
//       country: "United States",
//     },
//     {
//       name: "Allyson Felix",
//       sport: "Track and Field",
//       hasWorldRecord: false,
//       gender: "Female",
//       age: 36,
//       totalMedals: 9,
//       country: "United States",
//     },
//     {
//       name: "Nadia Comăneci",
//       sport: "Gymnastics",
//       hasWorldRecord: true,
//       gender: "Female",
//       age: 60,
//       totalMedals: 9,
//       country: "Romania",
//     },
//     {
//       name: "Birgit Fischer",
//       sport: "Canoeing",
//       hasWorldRecord: true,
//       gender: "Female",
//       age: 60,
//       totalMedals: 12,
//       country: "Germany",
//     },
//     {
//       name: "Mariana Pajón",
//       sport: "Cycling",
//       hasWorldRecord: false,
//       gender: "Female",
//       age: 30,
//       totalMedals: 4,
//       country: "Colombia",
//     },
//     {
//       name: "Wayne Gretzky",
//       sport: "Ice Hockey",
//       hasWorldRecord: false,
//       gender: "Male",
//       age: 61,
//       totalMedals: 4,
//       country: "Canada",
//     },
//     {
//       name: "Yuna Kim",
//       sport: "Figure Skating",
//       hasWorldRecord: false,
//       gender: "Female",
//       age: 31,
//       totalMedals: 6,
//       country: "South Korea",
//     },
//   ];
 
//   function countryUSA(arr){
//     // const filteredCountry = arr.filter((item) => item.country === "United States");
//     const filteredCountry = arr.map((item) => item.country);
//     return filteredCountry;
//   }
// console.log(countryUSA(athletes));

