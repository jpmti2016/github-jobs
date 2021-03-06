import React from "react";
import { Link } from "react-router-dom";

const JobDetail = (props) => {
  const job = props.location.state.job;
  const posted = props.location.state.posted;

  return (
    <div className="pl-3 pr-5 sm:px-32 sm:py-0">
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col sm:w-1/3">
          <Link
            to="/"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              className="fill-current h-4"
            >
              <path
                className="heroicon-ui"
                d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z"
              />
            </svg>

            <span className="text-sm leading-5 ml-4">Back to search</span>
          </Link>

          <h3 className="font-bold uppercase text-gray-700 pt-10">
            How to apply
          </h3>
          <div
            className="how-to-apply"
            dangerouslySetInnerHTML={{
              __html: job.how_to_apply || "",
            }}
          ></div>
        </div>
        <div className="sm:flex sm:flex-col mt-12 sm:ml-20 sm:w-full">
          <div className="flex flex-col sm:justify-start">
            <div className="flex flex-col justify-start sm:flex-row text-blue-900">
              <h2 className="text-2xl font-bold leading-7">{job.title}</h2>
              <a href="https://highalpha.com/job/?gh_jid=2245150&gh_src=fb83cbe11us">
                <span className="mt-4 sm:ml-4 sm:mt-0 p-1 border border-blue-900 rounded text-xs font-bold hover:text-blue-700 hover:border-blue-700">
                  Full Time
                </span>
              </a>
            </div>
            <div className="mt-2 flex posted text-xs items-center text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current h-4"
              >
                <path
                  className="heroicon-ui"
                  d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8.41l2.54 2.53a1 1 0 0 1-1.42 1.42L11.3 12.7A1 1 0 0 1 11 12V8a1 1 0 0 1 2 0v3.59z"
                />
              </svg>

              <p className="ml-1 text-xs leading-none align-top">
                {posted || ""}
              </p>
            </div>
          </div>

          <div className="mt-12 sm:mt-8 flex flex-row">
            <img
              src={job.company_logo}
              className="h-10 w-10 object-cover rounded-lg"
              alt=""
            />
            <div className="city flex flex-col items-start text-xs leading-none align-top ml-3">
              <p className="font-bold text-lg leading-none">{job.company}</p>
              <div className="flex items-center mt-2 text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-current h-4"
                >
                  <path
                    className="heroicon-ui"
                    d="M4.06 13a8 8 0 0 0 5.18 6.51A18.5 18.5 0 0 1 8.02 13H4.06zm0-2h3.96a18.5 18.5 0 0 1 1.22-6.51A8 8 0 0 0 4.06 11zm15.88 0a8 8 0 0 0-5.18-6.51A18.5 18.5 0 0 1 15.98 11h3.96zm0 2h-3.96a18.5 18.5 0 0 1-1.22 6.51A8 8 0 0 0 19.94 13zm-9.92 0c.16 3.95 1.23 7 1.98 7s1.82-3.05 1.98-7h-3.96zm0-2h3.96c-.16-3.95-1.23-7-1.98-7s-1.82 3.05-1.98 7zM12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20z"
                  />
                </svg>

                <p className="ml-1 text-xs leading-none align-top">
                  {job.location}
                </p>
              </div>
            </div>
          </div>

          <div
            className="description"
            dangerouslySetInnerHTML={{
              __html: job.description || "",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
