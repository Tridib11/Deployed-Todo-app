import { useState } from "react";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setError("Make sure your passwords match!");
      return;
    }

    await fetch(`${process.env.REACT_APP_SERVER_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
  };
  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogin ? "Please login" : "Please Signup"}</h2>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {!isLogin && <input type="password" placeholder="confirm-password" />}
          <input
            type="submit"
            className="create"
            onClick={() => handleSubmit(e, isLogin ? "login" : "signup")}
          />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)}
            style={{
              backgroundColor: !isLogin
                ? "rgb(255,255,255"
                : "rgb(188,188,188)",
            }}
          >
            Sign up
          </button>
          <button
            onClick={() => viewLogin(true)}
            style={{
              backgroundColor: isLogin ? "rgb(255,255,255" : "rgb(188,188,188)",
            }}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
