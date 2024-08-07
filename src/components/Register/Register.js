import "./Register.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const Register = (props) => {
  let history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  return (
    <div className="register-container">
      <div className="container">
        <div className="row px-3 px-sm-0">
          <div className="content-left col-12 d-none col-sm-7 d-sm-block">
            <div className="brand">Company ABC</div>
            <div className="detail">Connect and manage your company</div>
          </div>
          <div className="content-right col-12 col-sm-5 d-flex flex-column gap-3 py-3">
            <div className="brand d-sm-none">Company ABC</div>
            <div className="form-group">
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Phone number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone number"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Re-enter password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
              />
            </div>

            <button className="btn btn-primary">Register</button>
            <hr />
            <div className="text-center">
              <button className="btn btn-success" onClick={() => handleLogin()}>
                Already have an account? Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
