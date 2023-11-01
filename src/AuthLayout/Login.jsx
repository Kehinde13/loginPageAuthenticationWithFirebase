import { Link, useNavigate } from "react-router-dom";
import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
  database,
} from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

function LoginPage({setLoggedIn}) {
  const [user, setUser] = useState();

  //use navigate to dynamically change the location
  const history = useNavigate();

  //sign in with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    //gets user email and password from the input
    const email = e.target.userEmail.value;
    const password = e.target.password.value;

    //Asynchronously signs in using an email and password. "fails if user is not in the database"
    signInWithEmailAndPassword(database, email, password)
      .then(() => {
        setLoggedIn()
      })
      .catch((err) => {
        alert(err.code);
      })
      .finally(() => {
        history("/");
      })
  };

  //sign in with google
  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithRedirect(auth, provider)
  };

  /* useEffect(() => {
    signInWithGoogle.getRedirectResult()
    .then(() => {
      history("./HomePage");
    })
    .catch((err) => {
      history("/");
      alert(err, 'err')
    })
  }, [signInWithGoogle]) */

  

  return (
    <div className="mt-10 w-full ">
      {user && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity">
          <div className="w-[350px] bg-slate-50 mx-auto my-32 h-64 flex flex-col gap-10 justify-center text-center rounded-md">
            <h1 className="text-3xl">Sign in with google Successful</h1>
            <button
              onClick={gotoHomePage}
              className="bg-blue-400 w-[200px] py-1 mx-auto self-center rounded-md text-white"
            >
              Click here to go to HomePage
            </button>
          </div>
        </div>
      )}
      <h1 className="text-center text-3xl">Sign In</h1>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col mt-10 border-2 w-[350px] h-1/2 border-blue-400 gap-10 p-10 m-auto rounded-lg"
      >
        <input
          className="border-2 border-blue-400 rounded-md py-2 px-1"
          type="email"
          name="userEmail"
          id="userEmail"
          placeholder="Email"
        />
        <input
          className="border-2 border-blue-400 rounded-md py-2 px-1"
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />
        <Link
          to={"/ForgotPassword"}
          className="text-red-400 mt-[-20px] cursor-pointer"
        >
          Forgot Password?
        </Link>

        <button className="bg-blue-400 w-[100px] py-1 m-auto rounded-md text-white">
          SignIn
        </button>
      </form>
      <div className="flex gap-5 justify-around mt-5 md:w-[50%] mx-auto">
        <Link to={"/SignUp"}>
          <p className="text-center mt-5 cursor-pointer">Sign Up?</p>
        </Link>

        <button
          onClick={(e) => signInWithGoogle(e)}
          className="bg-blue-400 w-[150px] py-1 rounded-md text-white"
        >
          SignIn with google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
