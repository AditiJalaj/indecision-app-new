export class OldSyntax{
constructor(){
this.name='mike'
}
getGreeting(){
return `hi my name is ${this.name}`
}
}
const oldSyntax=new OldSyntax()
console.log(oldSyntax.getGreeting()) 
    
 
export class NewSyntax{
name="Jen"
    }
const newSyntax=new NewSyntax()
 console.log(newSyntax)
