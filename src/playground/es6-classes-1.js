class Person{
    constructor(name='Anonymous',age=0){
        this.name=name
        this.age=age
    }
    getGreeting(){
        return `Hi I am ${this.name}.`
    }
    getDescription(){
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name,age,major){
        super(name,age)
        this.major=major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let d=super.getDescription()
        
        if(this.hasMajor()){
            d+= ` Their major is ${this.major}`
        }
        return d
    }
}
const person1=new Student('Aditi',22,'tce')
console.log(person1.getDescription())

const person2=new Student()
console.log(person2.getDescription())

class Traveller extends Person{
  
    constructor(name,age,place){
       super(name,age)
       this.place=place
    }
    
    getGreeting(){
        let g=super.getGreeting()
        if(this.place){
            g+=` I am visiting from ${this.place}`
        }
        return g
    }
}
const person4=new Traveller('Aditit',22,'patna')
console.log(person4.getGreeting())