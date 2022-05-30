// coffee shop scenario with async and await go to promises03 to see the scenario with promises 

// Async is nothing but just a better way to apply promises it reduces the amount of writing then then then in the code

async function serveOrder()
{
    const receiveOrder = await placeOrder('coffee');
    console.log(receiveOrder);
    
}
