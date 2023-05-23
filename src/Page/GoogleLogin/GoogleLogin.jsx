import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const GoogleLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-outline mb-5 "
          >
            <img
              className="w-7 mr-2 bg-base-200"
              src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo.png"
              alt=""
            />
            Google Sign-in
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleLogin;
