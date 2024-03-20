import { Layout } from "../../Components/Layout"
import './styles.css'

function MyAccount() {
  return (
    <>
      <Layout>
        <div className="login">
          <div className="form-container">
            <h1 className="title text-xl font-medium">My account</h1>

            <form action="/" className="form">
              <div>
                <label htmlFor="name" className="label">Name</label>
                <p className="value">Gonzalo Sotelo</p>

                <label htmlFor="email" className="label">Email</label>
                <p className="value">gonzalosh01@gmail.com</p>

                <label htmlFor="password" className="label">Password</label>
                <p className="value">*********</p>
              </div>

              <input type="submit" value="Edit" className="secondary-button login-button" />
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}

export { MyAccount }
