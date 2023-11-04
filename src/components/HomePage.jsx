import { signOut } from "firebase/auth";
import { auth, database } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function HomePage() {
//use navigate to dynamically change the location
const history = useNavigate()

//function to signout 
 const handleClick = () => {
    signOut(database).then(() => {
       auth.signOut()
       history('/LoginPage')
    })
 }

  return (
    <div className="mt-10 w-6/12 m-auto">
      <h1 className="text-3xl text-center">WELCOME TO THE HOMEPAGE</h1>
      <button onClick={handleClick}
      className="bg-blue-400 w-[100px] mt-28 ml-10 rounded-md m-auto text-white py-2">
        Sign Out
      </button>
    </div>
  );
}

export default HomePage;
