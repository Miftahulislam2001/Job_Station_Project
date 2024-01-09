import { BriefcaseIcon, CurrencyDollarIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';

const DetailsJob = () => {
    return (
        <div className='my-container flex flex-col'>
            <div className='flex justify-center items-center text-2xl font-bold text-center font-serif min-h-[25vh] bg-red-300'>
                JOB DETAILS
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-3'>
                <div className='flex flex-col gap-3 text-[#757575]'>
                    <p>
                        <span className='font-bold text-black'>
                            Job Description:
                        </span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, sequi repellendus harum non odio praesentium placeat dicta eum iure ratione? Molestias fugit veniam reprehenderit, esse neque facilis voluptatem iure nam!
                    </p>
                    <p>
						<span className='font-bold text-black'>
							Job Responsibility:
						</span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, animi. Vel expedita unde ducimus nulla praesentium, impedit cupiditate doloribus, magnam quaerat, provident deserunt corrupti obcaecati.
					</p>
                    <p>
						<p className='font-bold text-black'>
							educationalRequirementsal Requirements:
						</p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam commodi deserunt, repellendus ratione error consequuntur!
					</p>
                    <p>
						<p className='font-bold text-black'>Experiences:</p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, quis.
					</p>
                </div>

                <div className='bg-[#F4F2FF] rounded-md p-3'>
                    <div>
                    <h4 className='text-[20px] font-bold'>
								Job Details
							</h4>
                            <hr className='my-2' />
                            <div className='flex flex-col gap-1'>
								<p className='flex items-center'>
									<CurrencyDollarIcon className='h-5 w-5 text-gray-400 mr-1' />
									Salary :
									<span className='text-[#757575] ml-1'>
										salary
									</span>
								</p>
								<p className='flex items-center'>
									<BriefcaseIcon className='h-5 w-5 text-gray-400 mr-1' />
									Job jobTitle :
									<span className='text-[#757575] ml-1'>
										jobTitle
									</span>
								</p>
							</div>
                    </div>

                    <div>
                    <h4 className='text-[20px] font-bold mt-3'>
								Contact Information
							</h4>
                            <hr className='my-2' />
                            <div className='flex flex-col gap-1'>
								<p className='flex items-center'>
									<PhoneIcon className='h-5 w-5 text-gray-400 mr-1' />
									Phone : Conditinal ren.
									{/* <span className='text-[#757575] ml-1'>
										{contact[0]
											? contact[0]
											: "Phone Not Found"}
									</span> */}
								</p>
								<p className='flex items-center'>
									<EnvelopeIcon className='h-5 w-5 text-gray-400 mr-1' />
									Email : Conditanoal
									{/* <span className='text-[#757575] ml-1'>
										{contact[1]
											? contact[1]
											: "Email Not Found"}
									</span> */}
								</p>
								<p className='flex items-center'>
									<MapPinIcon className='h-5 w-5 text-gray-400 mr-1' />
									Address :
									<span className='text-[#757575] ml-1'>
										location
									</span>
								</p>
							</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsJob;