
//========== Add To Local Storage =========//
const addToDb = (id) =>{

    let shoppingCart = {};

// get previous data from local storage 
    const storeCart = localStorage.getItem("shoppingCart");
    if(storeCart){
        shoppingCart = JSON.parse(storeCart)
    }

// Add quantity 
    const quantity = shoppingCart[id]
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart))

}

//========= get stored data from local storage =========//
const getStoredCart = () =>{
    let data = {};
    const appliedJob = localStorage.getItem("apply-job")
    if(appliedJob){
        data = JSON.parse(appliedJob)
    }
    return data;
}

export {
    addToDb,
    getStoredCart,
}