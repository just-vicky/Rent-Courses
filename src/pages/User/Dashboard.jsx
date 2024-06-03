import React from "react"

export default function Dashboard() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Total Sales</h2>
          <p className="text-2xl font-bold text-blue-500">Rs. 24,000</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">New Users</h2>
          <p className="text-2xl font-bold text-green-500">150</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Active Subscriptions</h2>
          <p className="text-2xl font-bold text-purple-500">300</p>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
          <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Chart goes here</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <ul>
            <li className="mb-3">
              <p className="text-gray-700">User <span className="font-bold">John Doe</span> signed up</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </li>
            <li className="mb-3">
              <p className="text-gray-700">Subscription <span className="font-bold">#1234</span> renewed</p>
              <p className="text-sm text-gray-500">4 hours ago</p>
            </li>
            <li>
              <p className="text-gray-700">Payment of <span className="font-bold">Rs. 200</span> received</p>
              <p className="text-sm text-gray-500">6 hours ago</p>
            </li>
          </ul>
        </div>
      </div> */}

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus metus, et scelerisque eros.</p>
      </div>
    </div>
    )
}