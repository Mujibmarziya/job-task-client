import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Navbar = () => {
    const {name,user,logout}= useContext(AuthContext)
    return (
        <div className=' flex gap-4 justify-around'>
            <h1 className=' text-3xl font-bold'>Gadget Village</h1>
             {/* <ul className=' flex gap-2'>
          <li className=' text-2xl text-black font-medium border-black border-2 p-3'>
          <NavLink to='/signup'>Sign Up</NavLink>
          </li>
          <li className=' text-2xl text-black font-medium border-black border-2 p-3'>
          <NavLink to='/login'>Log In</NavLink>
          </li>
        </ul> */}


        {
        user ? <div className='flex gap-2'>
            
      
           <div>
           <li className='btn btn-ghost border-black border-2 p-4 text-black'>
        <NavLink  onClick={logout}>Log out</NavLink>
    </li>
    
           </div>
           
      
    </div>
    :
    <div className='flex gap-2 '>
         <li className='btn btn-ghost border-black border-2 p-4 text-black'>
        <NavLink to='/login'>Log In</NavLink>
    </li>
    <li className='btn btn-ghost border-black border-2 p-4 text-black'>
    <NavLink 
     to="/signup"
     className={({ isActive, isPending }) =>
       isPending ? "pending" : isActive ? " text-white bg-black  p-2 ml-1 " : ""
     }
    >Register</NavLink>
    </li>
    </div>
    }
        </div>
    );
};

export default Navbar;