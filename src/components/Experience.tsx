import React from "react";

const MyExperience = () => {
  return (
    <div className="mx-[182px] p-4">
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2023
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Bangkit Academy
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            Learning About google cloud platform and backend using node js
          </p>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January 2024
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Certification Web Developer
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Certification held by campus to become a web developer using native
            php and mysql
          </p>
        </li>
        <li className="ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            January2025
          </time>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Purwadhika Academy
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            Learning about fullstack developing
          </p>
        </li>
      </ol>
    </div>
  );
};

export default MyExperience;
