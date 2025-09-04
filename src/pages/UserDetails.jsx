import { Link, useLoaderData } from 'react-router-dom';

const UserDetails = () => {

    const user = useLoaderData();
    const {name, username, email, phone, company, address, website} = user;

    return (
    <div className="p-6">
        
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/"
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
        >
          ← Back to Users
        </Link>
        <h1 className="text-2xl font-bold">User Details</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
          <div className="space-y-2 text-md">
            <p><span className="text-gray-600">Name</span><br />{name}</p>
            <p><span className="text-gray-600">Username</span><br />@{username}</p>
            <p><span className="text-gray-600">Email</span><br />{email}</p>
            <p><span className="text-gray-600">Phone</span><br />{phone}</p>
            <p>
              <span className="text-gray-600">Website</span><br />
              <a
                href={`http://${website}`}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                {website}
              </a>
            </p>
          </div>
        </div>
  
        <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Address</h2>
          <div className="space-y-2 text-md">
            <p><span className="text-gray-600">Street</span><br />{address?.street}</p>
            <p><span className="text-gray-600">Suite</span><br />{address?.suite}</p>
            <p><span className="text-gray-600">City</span><br />{address?.city}</p>
            <p><span className="text-gray-600">Zipcode</span><br />{address?.zipcode}</p>
            <p><span className="text-gray-600">Geo Location</span><br />
              {address?.geo?.lat}, {address?.geo?.lng}
            </p>
          </div>
        </div>
      </div>

    
      <div className="bg-gray-50 rounded-xl p-6 shadow-sm mt-6">
        <h2 className="text-lg font-semibold mb-4">Company</h2>
        <div className="grid md:grid-cols-3 gap-4 text-md">
          <p>
            <span className="text-gray-600">Company Name</span><br />
            {company?.name}
          </p>
          <p>
            <span className="text-gray-600">Catch Phrase</span><br />
            {company?.catchPhrase}
          </p>
          <p>
            <span className="text-gray-600">Business</span><br />
            {company?.bs}
          </p>
        </div>
      </div>
    </div>
    );
};

export default UserDetails;