import { useState } from "react";

function Auth() {
  const[error,setError]=useState(null);
  const isLogin = false;
  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogin ? "Please login" : "Please Signup"}</h2>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          {!isLogin && <input type="password" placeholder="confirm-password"/>}
          <input type="submit" className="create"/>
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button>Sign up</button>
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
