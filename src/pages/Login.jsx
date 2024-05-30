import React from "react";
import { Form, redirect } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Sign in to your account</h1>

      <Form method="post" className="login-form" replace>
        <input name="email" type="email" placeholder="Email address" />
        <input name="password" type="password" placeholder="Password" />
        <button> Login</button>
      </Form>
    </div>
  );
}
