import React from "react";

export const UploadPhoto = () => {
  return (
    <div>
      <label className="block font-bold text-md text-gray-800 ml-6" htmlFor="">
        Profile Photo
      </label>
      <div className="flex items-center justify-center w-full max-w-lg mx-auto p-4">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-3xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6 px-4 text-center">
            <svg
              className="w-12 h-12 mb-4 text-gray-400 group-hover:text-gray-600 group-hover:-translate-y-1 transition-all duration-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>

            <p className="mb-2 text-sm text-gray-700">
              <span className="font-semibold text-blue-600 hover:text-blue-700">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>

            <p className="text-xs text-gray-500 max-w-xs leading-relaxed">
              Support for single photo uploads up to{" "}
              <span className="font-medium text-gray-700">10MB</span> (PNG, JPG,
              HEIC)
            </p>
          </div>

          <input
            id="dropzone-file"
            type="file"
            accept="image/png, image/jpeg, image/heic"
            className="sr-only"
          />
        </label>
      </div>
    </div>
  );
};
