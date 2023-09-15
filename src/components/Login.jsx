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

function LoginPage() {
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.userEmail.value;
    const password = e.target.password.value;

    //Asynchronously signs in using an email and password. "fails if user is not in the database"
    signInWithEmailAndPassword(database, email, password).then(() => {
      history('./HomePage')
    }).catch((err)=> {
      alert(err.code)
  });
  };

  return (
    <div className="mt-10 w-full ">
      <h1 className="text-center text-3xl">Sign In</h1>
      <form onSubmit={(e) => handleSubmit(e)}
      className="flex flex-col mt-10 border-2 w-[350px] h-1/2 border-blue-400 gap-10 p-10 m-auto rounded-lg">
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
        <Link to={'/ForgotPassword'}
        className="text-red-400 mt-[-20px] cursor-pointer">
          Forgot Password?
        </Link>

        <button className="bg-blue-400 w-[100px] py-1 m-auto rounded-md text-white">
          SignIn
        </button>
      </form>
      <div className="flex gap-5 justify-around mt-5 md:mx-96">
        <Link to={"./Signup"}>
          <p className="text-center mt-5 cursor-pointer">Sign Up?</p>
        </Link>

        <button className="bg-blue-400 w-[150px] py-1 rounded-md text-white">
          SignIn with google
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
