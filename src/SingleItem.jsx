import React from 'react';

const SingleItem = ({product}) => {
    const {productName,productImage,price,description,category,ratings,creationDate} =product || {}
    return (
        <div>
             <div className='border-2 rounded-xl p-3 h-auto '>
        <div className='flex flex-col lg:flex-row gap-3 '>
           <div className='w-full lg:w-1/4'>
             <img className='h-full rounded-xl ' src={productImage} alt="" />
           </div>
           <div className='w-3/4 flex flex-col text-black gap-3'>
               <h1 className='font-bold'>Product Name:{productName}</h1>
               <h1 className='font-medium'>Category name:{category}</h1>
             
               <h1 className='font-medium'>Price name:{price}</h1>
               <h1 className='font-medium'>Price name:{ratings}</h1>
               <p>Description:  {description}</p>
               <h1>Creation Date:{creationDate}</h1>
           </div>
           
       </div>
      </div>
        </div>
    );
};

export default SingleItem;