import React from "react";
import { database } from "../firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
//use navigate to dynamically change the location
  const history = useNavigate()

  //gets the eamil and sends a password reset link
  const handleReset = (e) => {
    e.preventDefault();
    let userEmail = e.target.Email.value;
    sendPasswordResetEmail(database, userEmail)
      .then(() => {
        alert("A reset password link has been sent to your email address");
        history('/')
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div>
      <h1 className="text-center text-3xl">Forgot Password</h1>
      <form
        onSubmit={(e) => handleReset(e)}
        className="flex flex-col mt-10 border-2 w-[350px] h-1/2 border-blue-400 gap-10 p-10 m-auto rounded-lg"
      >
        <input
          className="border-2 border-blue-400 rounded-md py-2 px-1"
          type="email"
          placeholder="Email"
          name="Email"
        />
        <button className="bg-blue-400 w-[150px] py-1 rounded-md mx-auto text-white">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
