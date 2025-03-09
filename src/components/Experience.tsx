import React from "react";

const MyExperience = () => {
  return (
    <div className="px-4 w-full max-w-5xl mx-auto md:px-8 lg:px-12">
      <h2 className="text-2xl font-bold mb-8 text-center md:text-3xl">
        My Experience
      </h2>

      <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-4 md:ml-6">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
            Bangkit Academy
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Learning About google cloud platform and backend using node js
          </p>
          <div className=" md:block">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              Cloud Platform
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
              Node.js
            </span>
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
            Certification Web Developer
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
            Certification held by campus to become a web developer using native
            php and mysql
          </p>
          <div className=" md:block">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
              PHP
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ml-2">
              MySQL
            </span>
          </div>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2025
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-2">
            Purwadhika Academy
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
            Learning about fullstack developing
          </p>
          <div className=" md:block">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              Fullstack
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 ml-2">
              React
            </span>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-2">
              Node.js
            </span>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default MyExperience;
