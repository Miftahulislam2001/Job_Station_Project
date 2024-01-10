import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAppliedJob = ({jobData}) => {
    const {
		company,
		companyLogo,
		contact,
		education,
		experience,
		id,
		jobDescription,
		jobResponsibility,
		jobType,
		location,
		salary,
		jobTitle,
	} = jobData;

    return (
        <div className='flex items-center gap-4 mb-5  rounded-md p-3 border'>
			<div className='w-[150px] h-[150px] bg-[#F4F4F4] rounded-md flex items-center justify-center'>
				<img
					src={companyLogo}
					alt=''
					className='w-2/3'
				/>
			</div>

			<div className='flex items-center justify-between flex-1'>
				<div>
					<h3 className='text-[24px] text-[#474747] font-semibold'>
						{jobTitle}
					</h3>
                    
					<p className='text-[#757575] text-[18px]'>{company}</p>
					<div className='flex items-center gap-3 my-2'>
						{jobType.map((type, index) => (
							<p
								key={index}
								className='py-1 px-3 border border-gray-200 rounded-md text-blue-600'
							>
								{type}
							</p>
						))}
					</div>
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
				</div>
				<div>
					<Link to={`/detailsJob/${id}`}>
						<button className='btn'>View Detials</button>
					</Link>
				</div>
			</div>
		</div>
    );
};

export default DisplayAppliedJob;