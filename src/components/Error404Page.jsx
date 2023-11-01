import React from "react";
import { Link } from "react-router-dom";

function Error404Page() {
  return (
    <div className="text-center mt-10">
      <Link to={"/LoginPage"}>
        <button className="bg-slate-500 text-white rounded-md px-5 py-2 m-5 md:mx-20">
          Back to Login
        </button>
      </Link>
      <h1 className="text-red-400 text-2xl">
        Error 404 <br />
        Page not found
      </h1>
    </div>
  );
}

export default Error404Page;
