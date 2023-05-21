import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState();
  const { registation } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    registation(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => setError(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/2 mt-8 ml-5">
            <img src="https://www.brevistay.com/images/Group9473.png" alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-semibold text-center">Login</h1>
              <hr />
              <form onSubmit={handleLogin}>
                <p>{error}</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="login"
                    className="btn btn-primary"
                  />
                </div>
              </form>
              <hr />
              <div>
                <button className="btn btn-outline btn-secondary mb-5 ">
                  <img
                    className="w-10 bg-base-200"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR330sd5sAWmTeUmzV0fa9D3SR6hQOpz_b5csk3vB6gthElkC_NVPmg9_ZqCZK7IWt5VgQ&usqp=CAU"
                    alt=""
                  />{" "}
                  Google Sign-in
                </button>
              </div>
              <hr />
              <div>
                <p className="text-sm">
                  Don't Have an account?{" "}
                  <Link
                    to="/Teddy/register"
                    className="text-purple-900 underline"
                  >
                    Please Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
