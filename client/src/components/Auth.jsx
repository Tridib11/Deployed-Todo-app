function Auth() {
  const isLogin = false;
  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogin ? "Please login" : "Please Signup"}</h2>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          {!isLogin && <input type="password" placeholder="confirm-password"/>}
        </form>
      </div>
    </div>
  );
}

export default Auth;
