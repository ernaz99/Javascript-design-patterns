(()=>{
    const carManager={
        requestInfo(model,id){
            return `The information for ${model} with id ${id} is foobar`

        },
        buyVehicle(model,id){
            return `You have succesfully purchased Item ${id} ,a ${model}`


        },
        arrangeViewing(model,id){
            return `You have succesfully booked a viewing of ${model} (${id}) `

        }
    }
    carManager.execute=function(name){
        return (carManager[name].apply(carManager,[].slice.call(arguments,1))
        )
    
    }

console.log(carManager.execute( "arrangeViewing", "Ferrari", "14523" ));
console.log(carManager.execute( "requestInfo", "Ford Mondeo", "54323" ));
console.log(carManager.execute( "requestInfo", "Ford Escort", "34232" ));
console.log(carManager.execute( "buyVehicle", "Ford Escort", "34232" ));

})();




