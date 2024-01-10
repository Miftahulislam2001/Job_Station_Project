import React, { useEffect, useState } from 'react';
import { getDataTOLocalStorage } from '../../Utility/fakeDB';
import DisplayAppliedJob from '../DisplayAppliedJob/DisplayAppliedJob';

const AppliedJob = () => {
    const [allData, setAllData] = useState([]);
    const appliedJobsID = getDataTOLocalStorage();
    let keysArray = Object.keys(appliedJobsID).map(Number); // Convert keys to numbers
   
    useEffect(() => {
        fetch('cartData.json')
            .then(res => res.json())
            .then(data => setAllData(data))
    }, []);

    // Filter allData based on matching ids
    const filteredData = allData.filter(item => keysArray.includes(item.id));
    return (
      
            <div className='max-w-[70%] mx-auto mt-5'>
                {
                    filteredData.map(item => <DisplayAppliedJob key={item.id} jobData = {item}/>)
                }
            </div>
      
    );
};

export default AppliedJob;