export const UpdateForm = () => {
  return (
    <>
      {/* form container */}
      <div className="border-r border-neutral-300 pr-4 h-full">
        <form action="">
          {/* form group */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block font-bold text-md text-gray-800 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="john doe"
              className="border-0 h-10 bg-neutral-200 rounded-md w-full focus:bg-white focus:outline-none focus:ring-2 ring-blue-300 focus:outline-blue-500 focus:border-0"
            />
          </div>

          {/* email */}

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block font-bold text-md text-gray-800 mb-1"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              placeholder="john@example.com"
              className="border-0 bg-neutral-200 h-10 rounded-md w-full focus:bg-white focus:outline-none focus:ring-2 ring-blue-300 focus:outline-blue-500 focus:border-0"
            />
          </div>

          {/* Location */}

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block font-bold text-md text-gray-800 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              name="email"
              placeholder="Lagos, Nigeria"
              className="border-0 bg-neutral-200 h-10 rounded-md w-full focus:bg-white focus:outline-none focus:ring-2 ring-blue-300 focus:outline-blue-500 focus:border-0"
            />
          </div>

          {/* about user  */}
          <div className="mb-5">
            <h3 className="text-base font-bold text-gray-900">
              Describe yourself
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Share your background, interests, or what you're working on. This
              will be visible on your public profile.
            </p>
          </div>
          <div>
            <label htmlFor="bio" className="sr-only">
              Biography
            </label>
            <div className="relative">
              <textarea
                id="bio"
                name="bio"
                rows="5"
                maxlength="500"
                className="w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all duration-200 resize-none"
                placeholder="Hi, I'm Alex! I'm a digital creator based in New York. I love building web interfaces, drinking specialty coffee, and sharing design frameworks..."
              ></textarea>

              <div className="absolute bottom-3 right-3 flex items-center space-x-2 bg-white/90 backdrop-blur-xs pl-2 py-0.5 rounded-md pointer-events-none select-none">
                <span className="text-xs text-gray-400 font-medium">
                  <span id="char-count">0</span>/500
                </span>
              </div>
            </div>
          </div>

          <button className="px-4 py-2 rounded-md text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ">
            Update
          </button>
        </form>
      </div>
    </>
  );
};
