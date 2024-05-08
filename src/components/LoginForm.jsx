function LoginForm() {
  return (
    <div>
      <form>
        <div>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <p>forgot password</p>
        <button>Login</button>
        <p>Do not have an account ? Sign up</p>
      </form>
      <p>Or</p>
      <button>Login with facebook</button>
      <button>Login with google</button>
    </div>
  );
}

export default LoginForm;
