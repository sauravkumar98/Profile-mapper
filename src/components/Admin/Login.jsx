import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../context/UserContext';

export default function Login()
{
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const { login } = useContext(UserContext);

  function loginHandler(e) {
    e.preventDefault();
    console.table([username,password]);
  }

    return(
        <>

        <div className="flex flex-col justify-center items-center w-full px-1">
      
      <div className="w-full p-5 sm:p-10 rounded-md`">
        <h1
          className={`text-center text-xl sm:text-3xl font-semibold`}
        >
          Login to your account
        </h1>

      <form  onSubmit={loginHandler}>
        <div className="w-full mt-8">
          <div className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-5">
            
            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black`}
              type="username"
              required              
              placeholder="Enter username"
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
            />
           
            <input
              className={`w-full px-5 py-3 rounded-lg  font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none focus:border-2  focus:outline bg-gray-100 text-black focus:border-black`}
              type="password"
              required
              pattern="(?=.*\d){5,}$"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <button type="submit"  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
             
              <span className="ml-3" >Login</span>
            </button>        
          </div>
        </div>
       </form>
     
    </div>
</div>

        </>            
    );
}
