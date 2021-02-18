import React from 'react'

const Register = () => {
  return (
    <div>
      <form action="">
        <h3>Đăng ký</h3>
        <div className="formcontainer">
          <div className="container">
            <label htmlFor="uname">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <label htmlFor="mail">
              <strong>E-mail</strong>
            </label>
            <input
              type="text"
              placeholder="Enter E-mail"
              name="mail"
              required
            />
            <label htmlFor="psw">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>
          <button type="submit">
            <strong>SIGN UP</strong>
          </button>
          <div className="container" style={{ backgroundColor: '#eee' }}>
            <label style={{ paddingLeft: '15px' }}>
              <input type="checkbox" defaultChecked="checked" name="remember" />{' '}
              Remember me
            </label>
            <span className="psw">
              <a href="#">Forgot password?</a>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Register
