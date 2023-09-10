import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="mt-10 w-6/12 m-auto">
      <h1 className="text-3xl text-center">Welcome</h1>
      <form className="flex flex-col gap-5 mt-10 " action="" method="get">
        <label htmlFor="userEmail">Username :</label>
        <input
          type="email"
          name="userEmail"
          id="userEmail"
          className="border-2 rounded-md py-1 px-5 "
        />
        <label htmlFor="userPassword">Password :</label>
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          className="border-2 rounded-md py-1 px-5 "
        />

        <a 
         href=""
         className="text-red-500" 
        >
            Forget Password
        </a>

        <Link to={"/HomePage"}
         className="px-5 py-2 mt-5 text-yellow-50 bg-blue-600 rounded-xl text-center cursor-pointer w-2/4 m-auto">
          Login
        </Link>

        <a href="">Sign Up</a>
      </form>
        
        
      
    </div>
  );
}

export default LoginPage;
