
//******************************* 
// Object Literals
//*******************************

const myModule ={
    
    myProperty:"someValue",

    myConfig:{
        useCaching: true,
        language: "en"
    },

    saySomething(){
        console.log("Where in the world is Paul Irish today");
    },
    reportMyConfig(){
        console.log(`Caching is: ${this.myConfig.useCaching ? 'enabled' : 'disabled'}`)
    },
    updateMyConfig(newConfig){
        if(typeof newConfig==="object"){
            this.myConfig=newConfig;
            console.log(this.myConfig.language)
        }
    }


}
myModule.saySomething();

myModule.reportMyConfig();

myModule.updateMyConfig({language:"fr", useCaching: false});

myModule.reportMyConfig();


let counter=0;

const testModule={
    incrementCounter(){
        return counter++;
    },
    resetCounter(){
        console.log( "counter value prior to reset: " + counter );
        counter=0;
     
    }



}

testModule.incrementCounter();
testModule.resetCounter();

let myPrivateVar=0;

const myPrivateMethod=foo=>{
    console.log(foo);

}

const myNameSpace={
    myPublicVar: "foo",

    myPublicMethod(bar){
        myPrivateVar++;
        myPrivateMethod(bar);

    }
}

let basket=[];

const basketModule={

    addItem(values){
        basket.push(values)
    },
    getItemCount(){
        return basket.length;
    },
    getTotal(){
        return basket.reduce((accumulator,currentSum)=>accumulator+currentSum.price,0);
    }
}
export default basketModule;



//******************************* 
// Module Pattern Variations
//*******************************

const privateMethod1=()=>{
    $(".container").html("test")
}

const privateMethod2=()=>{
    console.log(_min([10,5,100,2,1000]))
}

const myModules={
    publicMethod(){
        privateMethod2();
    }

}








