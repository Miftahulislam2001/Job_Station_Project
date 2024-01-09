import React, { useState } from 'react';
import { getStoredCart } from '../../Utility/fakeDB';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';

const AppliedJob = () => {
    const [appliedData, setAppliedData] = useState();

    const fetchData = async () =>{
        const productData = await fetch('cartData.json')
        const products = await productData.json()
        
        const savedProduct = getStoredCart();
  
        let productArray = [];
     
        const foundProduct = products.filter((product, index) => product.id === id)
        console.log(foundProduct);
        const result = await fetchData();
        
    }

   fetchData()

    return (
        <div>
            <h2>This Is AppliedJob Compo</h2>
        </div>
    );
};

export default AppliedJob;