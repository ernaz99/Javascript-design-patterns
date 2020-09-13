
const myCar={
    name:"Ford Escort",
    
    drive(){
        console.log("Weee. I'm driving!");
    },
    panic(){
        console.log("Wait. How do you stop this things?");

    }
}
const yourCar=Object.create(myCar);

console.log(yourCar.name);





class VehiclePrototype{
    constructor(carModel){
        this.model=carModel;

    }
    getModel(){
        console.log(`The model of this vehicle is..${this.model}`)
    }

}

class Vehicle extends VehiclePrototype{
    constructor(model){
        super(model);
    }
    Clone(){
        return new Vehicle(this.model);
    }

}

const car=new Vehicle("Toyoto Camry");
const car2=car.Clone();
car2.getModel();


const beget=(()=>{
    class F{
        constructor();
    }
    return proto=>{
        F.prototype=proto;
        return new F();
    }

});