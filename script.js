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

// console.log('I am the first guy')

// setTimeout(()=>{
//     console.log('I am the second guy')
// }, 2000)

// console.log('I am the third guy')


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


// const fetchData = async()=>{
//     try{
//         let response = await fetch('https://jsonplaceholder.typicode.com/posts')
//         let data =await response.json()
//         console.log(data)

//     }catch (error) {
//         console.log('Error getting data', error)
//     }
// }
// fetchData()

// Asynchronous js

// console.log('first to display')
//  setTimeout(()=>{
//     console.log('last person to display')
// },1000)
// console.log('second persn to display')

// synchronous

// function fetchData(callback){
//     setTimeout(()=>{
//         console.log('first')
//         callback()
//     },2000)
// }
// fetchData(()=>{
//     console.log('second display')
//     setTimeout(()=>{
//         console.log('last to display')
//     },1000)
// })

// const myPromise =new Promise((resolved, reject)=>{
//     let success = false
//     setTimeout(()=>{
//         if(success){
//             resolved('promse rsolved')
//         }else{
//             reject('promise rejected')
//         }
//     },2000)
// })

// myPromise.then((result)=>{return console.log(result)})
// myPromise.catch((error)=>{return console.log(error)})

const fetchData= async ()=>{
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()
    console.log(data)
    } catch (error) {
        console.log('Error fetching Data', error)

         }
}
fetchData()