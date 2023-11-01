import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { database } from "../firebaseConfig";


function SignUp() {
  //use navigate to dynamically change the location
  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    //gets user email and password from the input
    const email = e.target.userEmail.value;
    const password = e.target.password.value;

    //Creates a new user account associated with the specified email address and password.
    createUserWithEmailAndPassword(database, email, password).then(() => {
      alert('Signed up Successfully')
    }).catch((err)=> {
        alert(err.code)
    }).finally(() => {
      history('/')
    });
  };

  return (
    <div className="mt-10 w-full ">
      <h1 className="text-center text-3xl">Sign Up</h1>
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
        <button className="bg-blue-400 w-[100px] rounded-md m-auto text-white py-2">
          SignUp
        </button>
      </form>
      <Link to={"/LoginPage"}>
        <button className="bg-blue-400 text-white rounded-md px-5 py-2 m-5 md:mx-20">
          Back to Login
        </button>
      </Link>
    </div>
  );
}

export default SignUp;
