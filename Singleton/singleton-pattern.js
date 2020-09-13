//******************************* 
// Singleton Pattern
//*******************************

import MySingleton from "./singleton-pattern-2.js"
class Singleton{
    constructor(options){
        options=options || {};
        this.name="SingletonTester";
        this.pointX=options.pointX;
        this.pointY=options.pointY || 10;

    }

}

let instance

const SingletonTester={
    name:"SingletonTester",
    getInstance(options){
        if(instance===undefined){
            instance=new Singleton(options);
        }
        return instance;
    }
}

const SingletonTest=SingletonTester.getInstance({pointX:5});
console.log(SingletonTest.pointX);
const mySingleton=new MySingleton();
const mySingletons=new MySingleton();
console.log(mySingleton.getRandomNumber());
console.log(mySingletons.getRandomNumber());



export default Singleton;