// let students = ['Aziz','Saidbek','Shaxzod','muhhamadAmin','Odilbek']
// alert(`
//     ${students[0]},
//     ${students[1]},
//     ${students[2]},
//     ${students[3]},
//     ${students[4]},
// `) 
// let name = prompt('Напишите имя котого вы хотите удалить: ')

// if(students.includes(name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase())){
//     name = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
//     let index = students.indexOf(name)
//     console.log(students);
//     students.splice(index, 1)
//     console.log(students);
// }else{
//     console.log('we have not this name in our array');
// }   



// let arr = [4,1,2,5,4,46,11,9,27,8,33,0,9]

// let even = []
// let odd = []

// arr.filter(num =>{
//     if(num % 2 === 0){
//         even.push(num)
//     }
//      else{
//     odd.push(num)
// } 
// })
// // 3
//  let students = ['Aziz', 'Saidbek', 'Shaxzod', 'Emil', 'Ozod']
// let name = prompt('Кого удалить, напишите имя')
// let index = students.indexOf(name)

// if(index !== -1){
//     console.log(students);
//     console.log(students.splice(index, 1));
// } else{
//     console.log('We have not this name in our array');
// }


let word = ['Bob', 'Jane', "Leo", 'Alex', 'Dick','Roma', 'Antony',"Leo"]
let names = ['Aziz','Saidbek','Shaxzod','MuhhamadAmin','Odilbek']

let obj = {
  name1:'Aziz',
  name2:'Saidbek',
  name3:'Shaxzod',
  name4:'MuhhamadAmin',
  name5:'Odilbek,Maxa,Abbos'
}
word = word.concat(names)
word.unshift(obj)

