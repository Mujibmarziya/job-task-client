import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleItem from './SingleItem'
import { NavLink } from 'react-router-dom'

function App() {
  const [count, setCount] = useState([9,9,9,9,7,6,0,7])


  return (
    <>
      <div>
        <h1 className=' text-3xl text-black font-bold text-center'>All The Products</h1>
        <ul>
          <li>
          <NavLink to='/signup'>Sign Up</NavLink>
          </li>
        </ul>
      </div>
      <div className='flex gap-4 mt-4 '>
        <div className='flex gap-3'>
          <input className=' border-black rounded-xl border-2 p-3' placeholder='Enter Product Name' type="text" />
          <button className='p-3 bg-black text-white rounded-xl '>Search</button>
        </div>

        <div>
        <select   className="select p-3 btn ml-6 border-black border-2  text-black rounded-xl  select-bordered  mx-auto max-w-xs">
  <option disabled selected>sort by</option>
  <option>Price(High to Low)</option>
  <option>Date</option>

</select>
        </div>
      </div>

      <div className='w-11/12   flex flex-col grid grid-cols-2 mt-9 md:grid-cols-3 lg:grid-cols-4 lg:flex-row gap-3 lg:gap-2'>
      <SingleItem ></SingleItem>
      <SingleItem ></SingleItem>
      <SingleItem ></SingleItem>
      <SingleItem ></SingleItem>
      <SingleItem ></SingleItem>
      <SingleItem ></SingleItem>
      <SingleItem ></SingleItem>
      <SingleItem ></SingleItem>
      <SingleItem ></SingleItem>
        
      </div>
    </>
  )
}

export default App
