var nameVar='Aditi'
var nameVar='adddddddiititit'
console.log('nameVar',nameVar)

let nameLet='adoto'
nameLet='addd'
console.log('nameLet',nameLet)

const nameConst='Frank'
console.log('nameconst',nameConst)

//block scoping
const fullName='Aditi Jaja'
let firstName
if(fullName){
   firstName=fullName.split(" ")[0]
    console.log(firstName)
}

console.log(firstName)