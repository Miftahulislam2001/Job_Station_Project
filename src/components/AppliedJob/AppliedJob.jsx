import React, { useEffect, useState } from 'react';
import { getDataTOLocalStorage } from '../../Utility/fakeDB';


const AppliedJob = () => {
    // load all Data...
    const [allData, setAllData] = useState([]);
    //console.log(allData);

    // get data local storage
    const appliedJobsID = getDataTOLocalStorage();
    let keysArray = Object.keys(appliedJobsID);
    console.log(keysArray);

    useEffect(() => {
        fetch('cartData.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, [])

    

    return (
        <div>
            <h2>Here show Applied Jobs </h2>
        </div>
    );
};

export default AppliedJob; 