//******************************* 
// Singleton Pattern-2
//*******************************

let instance;

const privateVariable="I am private";

const privateMethod=()=>{
    console.log("Private Method")
}
const randomNumber=Math.random();



class MySingleton{
    constructor(){
        if(!instance){
        this.publicProperty="I am also public"
        instance=this
    
      
    }
        return instance

    }

    publicMethod(){
        console.log("Public method");
    }
    getRandomNumber(){
        return randomNumber;
    }

}
export default MySingleton;