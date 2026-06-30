export const VerficationCard = () => {
  return (
    <div>
      {/* verification */}
      <div className="w-full max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-amber-50/60 to-orange-50/40 border-b border-gray-100 sm:flex sm:items-center sm:justify-between sm:gap-x-5">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 p-2.5 bg-amber-100 rounded-xl text-amber-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900">
                Account Identity Verification
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Your account is currently{" "}
                <span className="font-semibold text-amber-700">Unverified</span>
                . Verify your identity to unlock advanced features, higher
                transaction limits, and a trusted badge.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              What you'll need to complete this:
            </h4>

            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900">
                    Government-issued ID
                  </span>
                  <p className="text-xs text-gray-500">
                    Valid Passport, Driver's License, or National ID Card.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 text-sm text-gray-600">
                <svg
                  className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <div>
                  <span className="font-medium text-gray-900">
                    Clear Selfie Photo
                  </span>
                  <p className="text-xs text-gray-500">
                    A live snapshot matching your ID document photo.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-100 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              Your data is fully encrypted and secure
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                type="button"
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Learn More
              </button>
              <button
                type="button"
                className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Start Verification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
