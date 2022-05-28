// var menager = {
//     name: "daniel",
//     last_Name: "malede",
//     Age: 24,
//     Payment: 10000
// };
// var emplueid = {
//     Fall_Name: "daniel malede",
//     date_of_birth: 02/08/97,
//     email: "danielmalede@gmail.com",
//     address: "ben gavriel"
// }
// var fruit = {
//     name: "orange",
//     color: "orange",
//     type: "vagtable"
// }
// document.write(fruit.name)
// document.write(fruit.color)
// document.write(fruit.type)
// var techClass = {
//     classNum:2,
//     studentNum: 5,
//     studentsName: ["yosu","lior","david","yonatan","or"]
// }
// for (var i = 0; i < techClass.studentsName.length; i++) {
//     document.write(techClass.studentsName[i])
// }
// var kindergarten = {
//     kindergarten_teacher: "Michal",
//     childernNum: 10,
//     childrenName: ["Gal","Bar","Or","Dolev","Shimon","josh","Stav","David","Ester","Micael"]
// }
// for (var i = 0; i < kindergarten["childrenName"].length; i++) {
//     document.write(kindergarten["childrenName"][i]+"<br>")   
// }
// var userkey = prompt("enter a key")
// document.write(kindergarten[userkey])


// var techClass = {}
// techClass.techClassnumbers = prompt("enter number of class")
// techClass.studentsNumber = prompt("enter number of students")
// techClass.studentAge = prompt("enter students age")
// console.log(techClass["studentAge"]);
// console.log(techClass["studentsNumber"]);
// console.log(techClass["techClassnumbers"]);


// var manager = {}
// for (var i = 0; i < 4; i++) {
//     var managerkey = prompt("enter key")
//     var managervalue = prompt("enter your value")
//     manager[managerkey] = managervalue
// }
// console.log(manager);

// function userinfo() {
//     var userOb = {
//         firstName: prompt("enter your name"),
//         lastName: prompt("enter your last name"),
//         email: prompt("enter your email"),
//         password: +prompt("enter your password")
//     }
//     document.write("div"+userOb.firstName+"div"+userOb.lastName+"div"+userOb.email+"div"+userOb.password)
// }
// userinfo()

// for (var i = 0; i < 4; i++) {
//     var carUser = {
//         company:prompt("enter your company"),
//         color:prompt("enter car color"),
//         SMK:prompt("enter SMK car"),
//         year:prompt("enter car year"),
//     }    
//     document.write("<div>"+carUser.company+"</div>"+"<div>"+carUser.color+"</div>"+"<div>"+carUser.SMK+"</div>"+"<div>"+carUser.year+"</div>")
// }

// function catyy() {
//     for (var i = 0; i < 3; i++) {
//         var cat = {
//             catName:prompt("enter your cat name"),
//             catBirthYear:prompt("enter your cat birth"),
//             catType:prompt("enter your cat type"),
//             catwigth:prompt("enter your cat wigth")
//         }   
//     }
//     document.write("<h1>"+cat.catName+"</h1>"+"<h1>"+cat.catBirthYear+"</h1>"+"<h1>"+cat.catType+"</h1>"+"<h1>"+cat.catwigth+"</h1>")
// }
// catyy()

// function nevsu(params) {
//     var userNumber = +prompt("enter Number")
//     for (var i = 0; i < userNumber; i++) {
//         var dog = {
//             dogName:prompt("enter your dog name"),
//             dogAge:prompt("enter your dog age"),
//             dogType:prompt("enter your dog type"),
//             dogOwner:prompt("enter your dog owner"),
//         }        
//     }
//     document.write("<p>"+dog.dogName+"</p>"+"<p>"+dog.dogAge+"</p>"+"<p>"+dog.dogOwner+"</p>"+"<p>"+dog.dogType+"</p>")
// }
// nevsu()

// function bugdetails() {
//     var userNumber = +prompt("enter a number")
//     for (var i = 0; i < userNumber; i++) {
//         var bug ={
//             bugName:prompt("enter bug name"),
//             scienceBug:prompt("enter bug science"),
//             NumberBugLegs:+prompt("enter bug legs number"),
//             doseHaveWings:confirm("dose the bug have wings? Yes/No")
//         } 
//         if (bug.doseHaveWings==true) {
//             document.write("<h3>"+bug.bugName+"</h3>"+"<h3>"+bug.scienceBug+"</h3>"+"<h3>"+bug.NumberBugLegs+"</h3>"+"<h3>"+bug.doseHaveWings+"</h3>")     
//         }
//     } 
// }
// bugdetails()

// function printchildren() {
//     var userNumber = +prompt("enter number")
//     for (var i = 0; i < userNumber; i++) {
//         var child = {
//             fallName:prompt("enter your full name"),
//             age:+prompt("enter your age"),
//             doseHeInKinderGarden:confirm("dose he in kinder Garden")
//         }  
//         if (child.age>4) {
//             document.write("<p>"+child.fallName+"</p>"+"<p>"+child.age+"<p>"+"<p>"+child.doseHeInKinderGarden+"</p>") 
//         }  
//     }
// }
// printchildren()

// function printcomputerdetails(Number) {
//     var Number = +prompt("enter a number")
//     for (var i = 0; i <Number; i++) {
//         var computer ={
//             company:prompt("enter computer company"),
//             modele:prompt("enter modele company"),
//             weight:+prompt("enter weight company"),
//             stock:confirm("dose the computer in stock"),
//         }
//         if (computer.stock==true&computer.weight>2) {
//             document.write("<p>"+computer.company+" "+computer.modele+" "+computer.weight+" "+computer.stock+"</p>")
//         }
//     }
// }
// printcomputerdetails()

// function printTeacherDetails(Number) {
//     var Number = +prompt("enter a Number")
//     for (var i = 0; i < Number; i++) {
//         var Teacher = {
//             fullName:prompt("enter your full name"),
//             payment:prompt("enter your payment"),
//             email:prompt("enter your email"),
//             yearbirth:prompt("enter your year birth"),
//         }        
//         if (Teacher.payment>100||Teacher.yearbirth<1990) {
//             document.write("<span>"+Teacher.fullName+Teacher.payment+Teacher.payment+Teacher.email+Teacher.yearbirth+"</span>"+"<br>")   
//         }
//     }
// }
// printTeacherDetails()

// function printFurniture(Number) {
//     var Number = +prompt("enter a number")
//     for (var i = 0; i < Number; i++) {
//         var furniture = {
//             furnitureName:prompt("enter furniture name"),
//             furnitureBrand:prompt("enter furniture brand"),
//             furnitureStores:[prompt("enter furniture store avilabele")],
//             furniturePrice:prompt("enter furniture price"),
//         }
//         document.write(furniture.furnitureName+"<br>"+furniture.furnitureStores+"<br>")
//     }
// }
// printFurniture()

// function printApparment(myNumber) {
//     var myNumber = +prompt("enter a number")
//     for (var i = 0; i < myNumber; i++) {
//         var apparment = {
//             apparmentAddress:prompt("enter apparment address"),
//             apparmentRentPrice:+prompt("enter apparment rent price"),
//             apparmentBuyPrice:+prompt("enter apparment buy price"),
//             apparmentIntrestedPeople:[prompt("enter the names of poeple who intrested in the apparment")],
//             apparmentMediation:confirm("dose have mediation?")
//         } 
//         if (apparment.apparmentMediation==false) {
//             document.write(apparment.apparmentAddress+"<br>"+apparment.apparmentIntrestedPeople+"<br>")
//         }       
//     }
// }
// printApparment()

// function printStates() {
//     var userNumber = +prompt("enter a number")
//     for (var i = 0; i < userNumber; i++) {
//         var state ={
//             stateName:prompt("enter state name"),
//             stateResidents:prompt("enter state residents"),
//             stateCities:[prompt("enter state cities")],
//             doseItHaveBietHabad:confirm("Dose it heve Biet habad"),
//         }        
//         if (state.doseItHaveBietHabad==true) {
//             document.write("<br>"+state.stateName+"<br>"+state.stateCities+"<br>")
//         }
//     }
// }
// printStates()

function printMovie() {
    var userNumber = +prompt("enter a number")
    for (var i = 0; i < userNumber; i++) {
        var movies = {
            movieName:prompt("enter movie name"),
            movieNumberViews:prompt("enter movie VIEWS"),
            movieYear:prompt("enter movie year"),
            moviepicture:img,
        }        
    }
    
}

