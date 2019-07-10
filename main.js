class Animal {
    constructor(type, gander, name, age){
        this.type = type;
        this.gander = gander;
        this._name = name;
        this._age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        if (value === undefined)
            this._age = 0;
        else
            this._age = value;

    }

    get name(){
        return this._name;
    }
    set name(value){
            this._name = value;
    }
    static checkAge(age){
         age >= 20 ? console.error("Critical age") : console.log("It's ok");
    }
}

class Dog extends Animal{
    constructor(type, gender, name, age){
        super(type, gender, name, age);
    }
}

class Cat extends Animal{
    constructor(type, gender, name, age){
        super(type, gender, name, age);
    }
}

class Parrot extends Animal{
    constructor(type, gender, name, age){
        super(type, gender, name, age);
    }
}

let dog1 = new Dog('Dog','Male', 'Rex', '5');
console.log(dog1._age, dog1._name);
Dog.checkAge(50);


let cat1 = new Cat();
cat1.name = "Meow";
cat1.age = 27;
console.log(cat1.name, cat1.age);
