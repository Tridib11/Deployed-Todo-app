function Auth() {
  const isLogin=false
  return <div className="auth-container">
    <div className="auth-container-box">
        <form>
          <h2>{isLogin ? 'Please login':'Please Signup'}</h2>
          <input/>
          <input/>
          <input/>
        </form>
    </div>
  </div>;
}

export default Auth;
