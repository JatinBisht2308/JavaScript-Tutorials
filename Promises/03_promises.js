// shop which only serves coffee

// function for placing order will return a promise
let takeOrder = (order) => {
    return new Promise( (resolve,reject) => {
       if(order=="coffee")
       {
           resolve("Oder Placed");
       }
       else{
           reject("Sorry we only serve coffee")
       }
    })
}

// makeCoffee funciton (if the order is coffee then we have to prepare it)
let makeCoffee = (order,gender) => {
    // once the order is placed then we cannot reject it because it will pay us
    return new Promise( (resolve) => {
        console.log("Banri ha ek min han");
        if(gender=="female")
        {
            resolve("Here's your coffee mam")
        }
        else{
            resolve(`Here's your ${order} sir`)
        }
    })
}


// final processing of the coffe shop
takeOrder('coffee').then((oderState)=> {
      console.log(oderState);
    //  returning that promise to the another object(object because promises are objects)
      let banaCoffee = makeCoffee('coffee',"female");
      return banaCoffee;
    }).then(function (orderDone){
        console.log(orderDone);
    }).catch(function (err){
        console.log(err);
    })
