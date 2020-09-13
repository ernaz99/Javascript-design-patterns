import basketModule from "./module-pattern.js";


basketModule.addItem({
    item: 'bread',
    price: 0.5,
  });
  
  basketModule.addItem({
    item: 'butter',
    price: 0.3,
  });
  

  console.log(basketModule.getItemCount());

  
  console.log(basketModule.getTotal());
  
