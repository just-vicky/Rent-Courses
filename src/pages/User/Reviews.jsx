import React from "react"

export default function Reviews() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Reviews</h1>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-3">
            <h2 className="text-xl font-semibold mb-4">Overall Rating</h2>
            <div className="flex items-center">
              <div className="text-yellow-400 text-3xl mr-2">★★★★☆</div>
              <div className="text-gray-700 text-xl">(4.0 out of 5)</div>
            </div>
            <p className="text-gray-600 mt-2">Based on 120 reviews</p>
          </div>
  
          
          {/* <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Recent Reviews</h2>
            <ul>
              <li className="mb-4">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-gray-800">John Doe</p>
                  <div className="text-yellow-400 text-xl">★★★★★</div>
                </div>
                <p className="text-gray-700">Excellent course! Highly recommend.</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </li>
              <li className="mb-4">
                <div className="flex justify-between items-center">
                  <p className="font-bold text-gray-800">Jane Smith</p>
                  <div className="text-yellow-400 text-xl">★★★★☆</div>
                </div>
                <p className="text-gray-700">Very informative and well-structured.</p>
                <p className="text-sm text-gray-500">1 week ago</p>
              </li>
              <li>
                <div className="flex justify-between items-center">
                  <p className="font-bold text-gray-800">Bob Johnson</p>
                  <div className="text-yellow-400 text-xl">★★★☆☆</div>
                </div>
                <p className="text-gray-700">Good content but could use more examples.</p>
                <p className="text-sm text-gray-500">2 weeks ago</p>
              </li>
            </ul>
          </div> */}
  
          
          {/* <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-1">
            <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="rating">Rating</label>
                <select
                  id="rating"
                  name="rating"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>★★★★★</option>
                  <option>★★★★☆</option>
                  <option>★★★☆☆</option>
                  <option>★★☆☆☆</option>
                  <option>★☆☆☆☆</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="review">Review</label>
                <textarea
                  id="review"
                  name="review"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Submit Review
              </button>
            </form>
          </div> */}
        </div>
      </div>
    )
}