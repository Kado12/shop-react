import { Layout } from "../../Components/Layout"
import './styles.css'

function SignIn() {
  return (
    <>
      <Layout>
        <div className="login">
          <div className="form-container">
            <form action="/" className="form">
              <label htmlFor="email" className="label">Email address</label>
              <input type="text" id="email" placeholder="platzi@example.cm" className="input input-email" />

              <label htmlFor="password" className="label">Password</label>
              <input type="password" id="password" placeholder="*********" className="input input-password" />

              <input type="submit" value="Log in" className="primary-button login-button" />
              <a href="/">Forgot my password</a>
            </form>

            <button className="secondary-button signup-button">Sign up</button>
          </div>
        </div>
      </Layout>
    </>
  )
}

export { SignIn }