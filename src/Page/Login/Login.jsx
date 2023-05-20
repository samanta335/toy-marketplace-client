import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
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
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
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
                  <Link to="" className="text-purple-900 underline">
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
