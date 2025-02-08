// import { Greet, sayHello}  from "./library.js"


// class representation
// class User{
//     constructor(name, email){
//         this.name =name
//         this.email =email
//     }

//     greet(){
//         return `Hi ${this.name}`
//     }
// }

// const UserOne =new User('olumide', 'olujide@yahoo.com')
// console.log(UserOne.greet())

// // Another Way(function display)

// function myUser(name, email){
//     return `Hello function ${name} and my email is ${email}`
// }
// const viewUser =myUser('olumy','olumy@gmail.com')
// console.log(viewUser)

    // static method

// class mathUtil{
//     static add(a, b){
//         return a + b
//     }
// }
// console.log(mathUtil.add(4,6))

// getter and setter:::

// class User{
//     constructor(name){
//         this._name =name
//     }

//     get name(){
//         return this._name
//     }

//     set name (newName){
//         this._name =newName;
//     }
// }

// const user =new User('olumide')
// console.log(user.name)
// user.name ='jyde'
// console.log(user.name)

// inheritance in javascript

// class Admin extends User{
//     constructor(name,email, role){
//         super(name, email)
//         this.role = role
//     }
//     getRole(){
//         return `Your role is ${this.role}`
//     }
// }

// const admin =new Admin('wiliam', 'willy@gmail.com','superAdmin')
// console.log(admin.getRole())
// console.log(admin.greet())

// console.log(Greet('Tommy'))
// console.log(sayHello('Olumide'))

// try and catch
// try{
//     let num =JSON.parse('invalid JASON')
//     console.log('my god code', num)
// }catch(error){
//     console.log('an error occured:my error',error)
// }finally{
//     console.log('Error handlig complete')
// }

console.log('I am the first guy')

setTimeout(()=>{
    console.log('I am the second guy')
}, 2000)

console.log('I am the third guy')


// function fetchData(callback){
//     setTimeout(()=>{
//         console.log('data has been fetched')
//         callback()
//     }, 2000)
// }

// fetchData(()=>{
//     console.log('data is processing...')
//     setTimeout(()=>{
//         console.log('data has been dispayed')
//     }, 1000)
// })
