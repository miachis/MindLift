import defaultProfilePicture from "../assets/images/user.png";

function Account() {
  return (
    <main className="lg:px-10 px-3 py-5">
      <div className="mb-10">
        <h1 className="text-2xl font-bold mb-1">Account</h1>
        <p className="text-sm text-gray-500">
          Manage your profile and security.
        </p>
      </div>
      <div>
        <div>
          <h2 className="font-semibold mb-3 text-lg">Profile</h2>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl">
            <div className="flex justify-between p-4 items-center">
              <div className="flex gap-3">
                <span>
                  <img
                    src={defaultProfilePicture}
                    alt="profile photo"
                    className="w-10"
                  />
                </span>
                <span>
                  <h3 className="font-semibold text-lg">John Smith</h3>
                  <p className="text-sm text-gray-500 -mt-1">Profile photo</p>
                </span>
              </div>
              <div>
                <button className="border border-gray-300 rounded-full px-3 py-1 text-sm font-medium hover:shadow-sm cursor-pointer mr-3">
                  Change
                </button>
                <button className="text-sm text-red-600 font-medium hover:text-red-400 cursor-pointer">
                  Remove
                </button>
              </div>
            </div>
            <div className="border-t border-gray-300 p-4">
              <span className="text-sm text-gray-500">Name</span>
              <div className="flex justify-between">
                <span className="font-medium">John Smith</span>
                <span className="text-sm font-semibold text-gray-500 cursor-pointer hover:text-gray-700">
                  Edit
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <div>
          <h1 className="font-semibold mb-3 text-lg">Email address</h1>
        </div>
        <div className="bg-white shadow-lg rounded-xl flex p-5 gap-2 hover:shadow-xl">
          <h2>johnsmith@gmail.com</h2>
          <span className="text-green-700 font-semibold bg-green-100 rounded-full p-1 text-[10px]">
            verified
          </span>
        </div>
      </div>
      <div className="mb-10">
        <div>
          <h1 className="font-semibold mb-3 text-lg">Password</h1>
        </div>
        <div className="bg-white shadow-lg rounded-xl flex p-4 justify-between items-center hover:shadow-xl">
          <div className="flex flex-col">
            <span>No password set</span>
            <span className="text-sm text-gray-500">
              Add one for additional security
            </span>
          </div>
          <div>
            <button className="text-sm text-gray-500 cursor-pointer hover:text-gray-700">
              Set password
            </button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-semibold mb-3 text-lg">Account</h1>
        </div>
        <div className="bg-white shadow-lg rounded-xl hover:shadow-xl">
          <div className="flex justify-between border-b border-b-gray-300 p-5">
            <div>
              <h2>Sign out</h2>
              <p className="text-sm text-gray-500">Sign out of this device.</p>
            </div>
            <div>
              <button className="text-sm font-semibold cursor-pointer border border-gray-300 px-4 py-2 rounded-full hover:shadow-sm">
                Sign Out
              </button>
            </div>
          </div>
          <div className="flex justify-between p-5">
            <div>
              <h2>Delete account</h2>
              <p className="text-sm text-gray-500">
                Permanently delete your account and all data.
              </p>
            </div>
            <div>
              <button className="text-sm text-red-700 font-semibold cursor-pointer">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Account;
