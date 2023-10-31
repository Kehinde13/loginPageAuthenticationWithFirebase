import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="text-center mt-10">
      <Link to={"/"}>
        <button className="bg-slate-500 text-white rounded-md px-5 py-2 m-5 md:mx-20">
          Back to Login
        </button>
      </Link>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}