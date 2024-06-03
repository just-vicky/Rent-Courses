import React from "react";
import { Form, Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center">Sign in to your account</h1>

                <Form method="post" className="login-form" replace>
                    <div className="mb-4">
                        <input
                            name="email"
                            type="email"
                            placeholder="Email address"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    
                </Form>

                <div className="mt-4 text-center">
                    <Link
                        to="/user"
                        className="w-full bg-blue-500 text-white py-3 px-11 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
  );
}
