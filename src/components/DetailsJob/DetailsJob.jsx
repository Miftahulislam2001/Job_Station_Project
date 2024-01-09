import { BriefcaseIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utility/fakeDB';

const DetailsJob = () => {
	const [detailData, setDetailData] = useState({})
	const [cards, setCards] = useState([])
	const prams = useParams()

	const {
		companyName,
		contact,
		educationalRequirements,
		experiences,
		id,
		jobDescription,
		jobResponsibility,
		jobType,
		location,
		salary,
		jobTitle,
	} = detailData;

	useEffect(() => {
		fetch('../../../public/cartData.json')
			.then(res => res.json())
			.then(data => {
				const details = data.find(singleData => singleData.id.toString() === prams.id)
				setDetailData(details)
			})
	}, [prams])
	

	return (
		<div className='my-container flex flex-col'>
			<div className='flex justify-center items-center text-2xl font-bold text-center font-serif min-h-[25vh] drop-shadow-lg'>
				JOB DETAILS
			</div>

			<div className='mt-12 grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-3'>
				<div className='flex flex-col gap-3 text-[#1e1e1e]'>
					<p>
						<span className='font-bold text-black'>
							Job Description:
						</span>
						  {jobDescription}
					</p>
					<p>
						<span className='font-bold text-black'>
							Job Responsibility:
						</span>
						{jobResponsibility}
					</p>
					<p>
						<span className='font-bold text-black'>
							Educational Requirementsal Requirements:
						</span>
						{educationalRequirements}
					</p>
					<p>
						<span className='font-bold text-black'>Experiences:</span>
						{experiences}
					</p>
				</div>

				<div className=' rounded-md p-3'>
					<div className='bg-blue-200 p-5 rounded'>
					<div>
						<h4 className='text-[20px] font-bold'>
							Job Details
						</h4>
						<hr className='my-2 w-[95%]'/>
						<div className='flex flex-col gap-1'>
							<p className='flex items-center'>
								<CurrencyDollarIcon className='h-5 w-5 text-gray-400 mr-1' />
								Salary :
								<span className='text-[#757575] ml-1'>
									{salary}
								</span>
							</p>
							<p className='flex items-center'>
								<BriefcaseIcon className='h-5 w-5 text-gray-400 mr-1' />
								Job jobTitle :
								<span className='text-[#757575] ml-1'>
									{jobTitle}
								</span>
							</p>
						</div>
					</div>

					<div>
						<h4 className='text-[20px] font-bold mt-3'>
							Contact Information
						</h4>
						<hr className='my-1 w-[95%]' />
						<div className='flex flex-col gap-1'>
							<p className='flex items-center'>
								<PhoneIcon className='h-5 w-5 text-gray-400 mr-1' />
								Phone : 
									<span className='text-[#757575] ml-1'>
										{
											contact ? contact[0] : "Phone Not Found"
										}
									</span>
							</p>
							<p className='flex items-center'>
								<EnvelopeIcon className='h-5 w-5 text-gray-400 mr-1' />
								Email : 
								<span className='text-[#757575] ml-1'>
										{
											contact ? contact[1] : "Email Not Found"
										}
								</span>
							</p>
							<p className='flex items-center'>
								<MapPinIcon className='h-5 w-5 text-gray-400 mr-1' />
								Address :
								<span className='text-[#757575] ml-1'>
									{location}
								</span>
							</p>
						</div>
					</div>
					</div>

					<div
						onClick={()=> addToDb(id)}
						className='primary-btn text-center mt-3'
					>
						<button className="btn w-full">Apply Now</button>
					</div>
				</div>
				
			</div>
		</div>
	);
};

export default DetailsJob;