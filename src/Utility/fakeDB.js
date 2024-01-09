
//========== Add To Local Storage =========//
let shoppingCart = {};
const addToDb = (id) =>{

// get previous data from local storage 
    const storeCart = localStorage.getItem("shoppingCart");
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
       
    }
    console.log("store cart "+storeCart);
    // const newItem = {id:id}
     shoppingCart = {...shoppingCart, id:id}
    console.log(shoppingCart);

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))
}

//========= get stored data from local storage =========//
const getStoredCart = () =>{
    let shoppingCart = {};
    const storedCart = localStorage.getItem("shoppingCart")
    if(storedCart){
        shoppingCart = JSON.parse(storedCart)
    }
    return shoppingCart;
}

export {
    addToDb,
    getStoredCart,
}