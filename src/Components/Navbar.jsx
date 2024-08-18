import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className=' flex gap-4 justify-around'>
            <h1 className=' text-3xl font-bold'>Gadget Village</h1>
             <ul className=' flex gap-2'>
          <li className=' text-2xl text-black font-medium border-black border-2 p-3'>
          <NavLink to='/signup'>Sign Up</NavLink>
          </li>
          <li className=' text-2xl text-black font-medium border-black border-2 p-3'>
          <NavLink to='/login'>Log In</NavLink>
          </li>
        </ul>
        </div>
    );
};

export default Navbar;