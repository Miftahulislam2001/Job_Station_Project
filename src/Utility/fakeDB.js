

const addToDb = (id) =>{
    let jobs = {};
    const appliedJobs = getDataTOLocalStorage();
    
    if(id in appliedJobs){
        alert('Already Apply')
    }else{
        appliedJobs[id] = 1;
    }
    localStorage.setItem('apply-jobs', JSON.stringify(appliedJobs))
}

const getDataTOLocalStorage = () =>{
    let data = {};
    const appliedJobs = localStorage.getItem('apply-jobs');
    
    if(appliedJobs){
        data = JSON.parse(appliedJobs)
    }
    return data;
}

export {
    addToDb,
    getDataTOLocalStorage
}