

class Car{
    constructor(options){
        this.doors=options.doors || 4;
        this.state=options.state || "brand new";
        this.color=options.color || "silver";
    }

}

class Truck{
    constructor(options){
        this.wheelSize=options.wheelSize || "large";
        this.state=options.state || "used";
        this.color=options.color || "blue";
        
    }
}

class VehicleFactory{
    constructor(){
        this.vehicleClass=Car;
    }
    createVehicle(options){
        switch(options.vehicleType){
            case "car":
                this.vehicleClass=Car;
                break;
            case "truck":
                this.vehicleClass=Truck;
                break;

        }
        return new this.vehicleClass(options)

    }

}

const carFactory=new VehicleFactory();
const car=carFactory.createVehicle({
    vehicleType:"car",
    color:"red",
    doors:2
});

console.log(car);

const truck=carFactory.createVehicle({
    vehicleType:"truck",
    color: "black",
    wheelSize:"small",
    state:"like new"
});

console.log(truck);

class TruckFactory extends VehicleFactory{
    constructor(){
        super();
        this.vehicleClass=Truck;

    }
}

const truckFactory=new TruckFactory();
const MyBigtruck =truckFactory.createVehicle({
    state: "omg..so bad.",
    color: "pink",
    wheelSize: "so big"

});

console.log(MyBigtruck);












