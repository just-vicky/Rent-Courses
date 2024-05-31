import React from "react"

export default function Income() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Income</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Income Summary</h2>
          <p className="text-2xl font-bold text-green-500">$12,345</p>
          <p className="text-gray-700">Total income for this month</p>
        </div>

        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Income Sources</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">
              <span className="font-bold text-gray-700">Product Sales:</span> $8,000
            </li>
            <li className="mb-2">
              <span className="font-bold text-gray-700">Consulting Services:</span> $3,000
            </li>
            <li>
              <span className="font-bold text-gray-700">Affiliate Marketing:</span> $1,345
            </li>
          </ul>
        </div>
      </div>

{/*       
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <ul>
          <li className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Received payment from <span className="font-bold">John Doe</span></p>
              <p className="text-green-500 font-bold">+$500</p>
            </div>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </li>
          <li className="mb-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Consulting fee from <span className="font-bold">ACME Corp</span></p>
              <p className="text-green-500 font-bold">+$2,000</p>
            </div>
            <p className="text-sm text-gray-500">1 day ago</p>
          </li>
          <li>
            <div className="flex justify-between items-center">
              <p className="text-gray-700">Affiliate commission from <span className="font-bold">Amazon</span></p>
              <p className="text-green-500 font-bold">+$345</p>
            </div>
            <p className="text-sm text-gray-500">3 days ago</p>
          </li>
        </ul>
      </div>

      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus metus, et scelerisque eros.</p>
      </div> */}
    </div>
    )
}