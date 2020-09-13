
let privateVar="Ben Cherry";

const publicVar="Hey there!";


    const privateFunction=()=>{
        console.log(`"Name:" ${privateVar}`);
    }
    const publicSetName=(strName)=>{
        privateVar=strName;
    
    }
    const publicGetName=()=>{
        privateFunction();
    }

    
    const myRevalingModule={
        setName: publicSetName,
        greeting: publicVar,
        getName: publicGetName

}


let privateCounter=0;


const privateFunctions=()=>{
    privateCounter++;
}

const publicFunction=()=>{
    publicIncrement();
}


const publicIncrement=()=>{
    privateFunctions();
}
const publicGetCount=()=>privateCounter;


const myRevalingModules={
    start: publicFunction,
    increment: publicIncrement,
    count: publicGetCount
    
}
export default myRevalingModules;