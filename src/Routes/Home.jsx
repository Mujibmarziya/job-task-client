import React, { useState } from 'react';
import SingleItem from '../SingleItem';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const allProducts = useLoaderData();
    const [sortCriteria, setSortCriteria] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    // Handle sorting
    const handleSort = (e) => {
        const selectedSort = e.target.value;
        setSortCriteria(selectedSort);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    // Filter products based on search query
    const filteredProducts = allProducts.filter(product => 
        product.productName.toLowerCase().includes(searchQuery)
    );

    // Sorting logic
    // const sortedProducts = [...filteredProducts].sort((a, b) => {
    //     if (sortCriteria === 'Price(High to Low)') {
    //         return b.price - a.price;
    //     } else if (sortCriteria === 'Date(newest first)') {
    //       // console.log(new Date(b.creationDate), new Date(a.creationDate));
    //         return new Date(b.creationDate) - new Date(a.creationDate);
    //     }
    //     return 0;
    // });
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (sortCriteria) {
          case 'Price(High to Low)':
              return b.price - a.price;
          case 'Date(newest first)':
            return new Date(a.creationDate) - new Date(b.creationDate);
          default:
              return 0;
      }
  });

    return (
        <div>
            <div>
                <h1 className='text-3xl text-black font-bold text-center'>All The Products</h1>
            </div>
            <div className='flex gap-4 mt-4'>
                <div className='flex gap-3'>
                    <input 
                        className='border-black rounded-xl border-2 p-3' 
                        placeholder='Enter Product Name' 
                        type="text" 
                        value={searchQuery} 
                        onChange={handleSearchChange} 
                    />
                    <button className='p-3 bg-black text-white rounded-xl'>Search</button>
                </div>

                <div>
                    <select onChange={handleSort} className="select p-3 btn ml-6 border-black border-2 text-black rounded-xl select-bordered mx-auto max-w-xs">
                        <option disabled selected>Sort by</option>
                        <option value="Price(High to Low)">Price (High to Low)</option>
                        <option value="Date(newest first)">Date (Newest First)</option>
                    </select>
                </div>
            </div>

            <div className='w-11/12 flex flex-col grid grid-cols-2 mt-9 md:grid-cols-3 lg:grid-cols-4 lg:flex-row gap-3 lg:gap-2'>
                {
                    sortedProducts.map(product => (
                        <SingleItem key={product.id} product={product}></SingleItem>
                    ))
                }
            </div>
        </div>
    );
};

export default Home;
