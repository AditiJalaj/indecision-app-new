// const square=function(x){
//     return x*x}
// console.log(square(8))
// const sq=(x)=>{
//     return x*x
// }
// const sqa =(x)=>x*x
// console.log(sqa(4))

// const getFirstName=x=>x.split(" ")[0]
// console.log(getFirstName('Aditi sinha cool'))


//Arguments
// const add=(a,b)=>{
//     console.log(arguments)
//     return a+b
// }
// console.log(add(22,33))



//this
// const user={
//     name:"Aditi",
//     cities:['pat','blr','dub'],
//     printPlacesLived:function(){
//         const cityMessages=this.cities.map((city)=>{
//             return this.name + " has lived in "+city
//         })
//         return cityMessages
        
//     }
// }
// console.log(user.printPlacesLived())


const multiplier={
    numbers:[1,2,23,45],
    multiplyby:2,
    multiply(){
        return this.numbers.map((n)=>{
            return n*this.multiplyby
        })
    }
}

console.log(multiplier.multiply())