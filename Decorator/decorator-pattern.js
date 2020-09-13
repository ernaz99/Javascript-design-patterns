

class Vehicle{
    constructor(vehicleType){
        this.vehicleType=vehicleType || "car";
        this.model="default";
        this.license="00000-000";
    }
}

const testInstance=new Vehicle("car");
console.log(testInstance);


const truck=new Vehicle("truck");

truck.setModel=function(modelName){
    this.model=modelName;

}

truck.setColor=function(color){
    this.color=color;

}

truck.setColor("blue");
truck.setModel("CAT");

console.log(truck)

const secondInstance=new Vehicle();
console.log(secondInstance);



// The constructor to decorate

class MackBook{
    constructor(){
        this.cost=997;
        this.screenSize=11.6;
    }
    getCost(){
        return this.cost

    }
    getScreenSize(){
        return this.screenSize;
    }
}

// Decorator 1

class Memory extends MackBook{
    constructor(mackbook){
        super();
        this.mackbook=mackbook;
        
    }

    getCost(){
        return this.mackbook.getCost()+75;
    }

}

// Decorator 2

class Engraving extends MackBook{
    constructor(mackbook){
        super();
        this.mackbook=mackbook;
    }
    getCost(){
        return this.mackbook.getCost()+200;
    }
}

// Decorator 3

class Insurance extends MackBook{
    constructor(mackbook){
        super();
        this.mackbook=mackbook;
    }
    getCost(){
        return this.mackbook.getCost()+250;
    }

}

let mb=new MackBook();
mb=new Memory(mb);
mb=new Engraving(mb);
mb=new Insurance(mb);
console.log(mb);

console.log(mb.getScreenSize())


