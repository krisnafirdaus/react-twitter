import React from "react";

const Login = () => {
  const handleLoginClick = () => {
    window.location.href = "http://localhost:3001/auth/twitter";
  };
  return (
    <div>
      <div className="logo-box">
        <h2>Sign In to Dashboard</h2>

        <button className="btn-twitter" onClick={handleLoginClick}>
          Sign in with Twitter
        </button>
        <hr style={{ marginTop: "20px" }}></hr>
        <span style={{ marginBottom: "20px" }}>Or</span>
        <form>
          <input type="text" placeholder="Phone email or username" />
          <button>Next</button>
        </form>
        <button className="forget">Forget Password</button>
        <p>
          Don't Have an account <a href="/">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
