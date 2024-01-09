import {
  ArrowTrendingUpIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Lottie from "lottie-react";
import AnimationIcon from "../../assets/programer.json";
import JobCategory from "../JobCategory/JobCategory";
import FeaturesJob from "../FeaturesJob/FeaturesJob";

const Home = () => {
 const featuresData = useLoaderData();

  const [categoryData, setCategoryData] = useState([]);
  const [isShowAllCart, setIsShowAllCart] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
        const res = await fetch("jobCategory.json");
        const data = await res.json();
        setCategoryData(data);
    };
    fetchData();
    
}, [])

  return (
    <div className="my-2">
      <div className="my-container mt-20 flex flex-col justify-between lg:flex-row">
        {/* Text Content */}
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              One Step Closer To Your <br className="hidden md:block" />{" "}
              thousand lives{" "}
              <span className="inline-block text-blue-400">Dream Job</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Books are a uniquely portable magic. Books serve to show a man
              that those original thoughts of his aren’t very new after all. The
              man who does not read good books is no better than the man who
              can’t.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/" className="btn md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Get Started</p>
                <ArrowTrendingUpIcon className="w-5 text-gray-100" />
              </div>
            </Link>
            <Link
              to="/blog"
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="relative lg:w-1/2 ">
          <div className="w-full  lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={AnimationIcon} loop={true} />
          </div>
        </div>
      </div>

      {/* Job Category Section */}
       <div className="my-container mt-7">
        <h2 className="text-center text-gray-800 text-3xl font-bold font-sans">
          Job Category List
        </h2>
        <p className="text-center my-4 text-gray-700 ">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid md:grid-cols-4 gap-5">
          {categoryData.map((category) => (
            <JobCategory key={category.id} category={category} />
          ))}
        </div>
      </div> 

      {/* Features Job Section */}
      <div className="my-container mt-7">
        <h2 className="text-center text-[48px] font-bold">Featured Jobs</h2>
        <p className="text-center my-4">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
         <div className="grid md:grid-cols-2 gap-6">
          {!isShowAllCart
            ? featuresData
                .slice(0, 4)
                .map((features) => (
                  <FeaturesJob
                    key={features.id}
                    jobData={features}
                  ></FeaturesJob>
                ))
            : featuresData.map((features) => (
                <FeaturesJob key={features.id} jobData={features}></FeaturesJob>
              ))}
        </div> 
      </div>

      {/* See All Job Button */}
      <div
        onClick={() => setIsShowAllCart(!isShowAllCart)}
        className={`text-center mt-5 ${isShowAllCart ? "hidden" : ""}`}
      >
        <button className="btn">See All Jobs</button>
      </div>
    </div>
  );
};

export default Home;