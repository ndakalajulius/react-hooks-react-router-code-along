import React from 'react'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input typr="text" name="username" placeholder="Username" />
        </div>
        <div>
          <input type="password" name="password" placeholde="Password" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Login