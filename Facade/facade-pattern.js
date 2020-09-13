

const addEvent=(el,ev,fn)=>{
    if(el.addEventListener){
        el.addEventListener(el,ev,false);
    }
    else if(el.attachEvent){
        el.attachEvent("on",ev,fn);

    }
    else{
        el["on"+ev]=fn;
    }

    
}