
class Person{
    constructor(firstname,lastname){
        this.firstname=firstname;
        this.lastname=lastname;
        this.gender="male"
    }
}

const clark=new Person("Clark","Kent");

class Superhero extends Person{
    constructor(firstname,lastname,powers){
        super(firstname,lastname);
        this.powers=powers;    
    }
}

const superman=new Superhero("Clark","Kent",["flight","heat-vision"]);
console.log(superman);



const myMixins={
    moveUp(){
        console.log("move up");
    },
    moveDown(){
        console.log("move down");
    },
    stop(){
        console.log("stop! in the name of love");
    }
}


class CarAnimator{ 
        moveLeft(){
            console.log("move left");

        
    }
}

class PersonAnimator{
        moveRandomly(){
            /*..*/
        
    }
}
Object.assign(CarAnimator.prototype,myMixins)
Object.assign(PersonAnimator.prototype,myMixins);


const myAnimator=new CarAnimator();
myAnimator.moveLeft();
myAnimator.moveDown();
myAnimator.stop();



class Car{
    constructor(settings){
        this.model=settings.model || "no model provided";
        this.color=settings.color || "no color provided";
    }

}

class Mixin{
    driveForward(){
        console.log("drive forward")
    }
    driveBackward(){
        console.log("drive backward")
    }
    driveSideways(){
        console.log("drive sideways")
    }

}

const augment=(receivingClass,givingClass,...methodName)=>{
    if(methodName.length!==0){
        methodName.map(methodsName=>{    
            receivingClass.prototype[methodsName]=givingClass.prototype[methodsName];
    
        })

}
    
    else{
        Object.getOwnPropertyNames(givingClass.prototype).map(methodName=>{
            if(Object.hasOwnProperty.call(receivingClass.prototype,methodName)){
                receivingClass.prototype[methodName]=givingClass.prototype[methodName];
            }
        })
    }

}


augment(Car,Mixin,"driveForward","driveBackward");



const mycars=new Car({
    model: "Ford",
    color: "blue"
});

mycars.driveBackward();
mycars.driveForward();

augment(Car, Mixin);

const mySportsCar = new Car({
    model: 'Porsche',
    color: 'red',
});

mySportsCar.driveSideways();


