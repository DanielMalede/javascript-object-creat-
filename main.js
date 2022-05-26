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

