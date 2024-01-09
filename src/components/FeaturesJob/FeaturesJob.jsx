import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const FeaturesJob = ({ jobData }) => {
    console.log(jobData);
    const {
        id,
        companyName,
        companyLogo,
        jobTitle,
        jobType,
        location,
        salary,
    } = jobData;

    return (
        <div className='border rounded-md p-4'>
            <div className="w-[110px]">
                <img src={companyLogo} alt="" />
            </div>
            <div className='mt-8 text-left'>
                {/* Job Title & Name */}
                <h2 className='text-[#474747] font-bold text-2xl'>{jobTitle}</h2>
                <p className='text-[#757575] my-3'>{companyName}</p>

                {/* Job Type */}
                <div className='flex gap-2 items-center'>
                    {
                        jobType ?.map((type, index)=> <p className='border border-gray-600 py-1 px-3 rounded-md' key={index}>{type}</p>)
                    }
                </div>

                {/* Location & Salary */}
                <div className='my-4 flex items-center gap-5'>
                    <div className='flex items-center'>
                        <MapPinIcon className='h-5 w-5 text-gray-500 mr-1' />
                        {location}
                    </div>
                    <div className='flex items-center'>
                        <CurrencyDollarIcon className='h-5 w-5 text-gray-500 mr-1' />
                        Salary: {salary}
                    </div>
                </div>

                {/* View Details Button */}
                <div>
					<Link to=''>
						<button className='btn'>View Details</button>
					</Link>
				</div>
            </div>
        </div>
    );
};

export default FeaturesJob;