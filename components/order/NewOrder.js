import React from 'react'
import DeleteIcon from '../../public/icons/delete.svg';
import Image from 'next/image';
import RemoveItemIcon from '../../public/icons/removeItem.svg'; 
import AddItemIcon from '../../public/icons/addItem.svg'; 
import RightIcon from '../../public/icons/right.svg'; 
import Link from 'next/link';
import { useState } from 'react';

const NewOrder = () => {
    const [items, setItems] = useState(1);
    return (
        <div className='flex flex-col shadow-md xl:w-4/12 lg:w-80 h-screen mx-4 bg-white-100'>
            <div className='w-auto flex mx-2 my-4'>
                <span className='w-2/12 font-bold lg:mr-3 xl:mr-0 text-xl'> New </span>  
                <span className='w-9/12 text-xl lg:-ml-6 xl:-ml-9'> Order </span>
                <DeleteIcon className='cursor-pointer hover:scale-150 w-1/12 m-auto'/>
            </div>
            <div className='w-auto mx-2 bg-white-900'>    
                <div className='w-auto h-32 flex flex-col items-center mb-4 bg-white-100'>
                    <div className='w-auto flex flex-row m-2 py-2'>
                        <Image src="/.././public/img/image1.png" width={62} height={53} className='w-2/12 h-auto'/>
                        <h3 className='text-center w-7/12 font-semibold'> Quarter Pounder With Cheese Deluxe </h3>
                        <h3 className='font-bold w-3/12'>$ 4.93</h3>
                    </div>
                    <div className='w-6/12 h-auto flex justify-between mx-0 py-2'>
                        <button onClick={() => setItems(items - 1)}>
                            <RemoveItemIcon className='cursor-pointer'/>
                        </button>
                        <h3> {items} </h3>
                        <button>
                            <AddItemIcon onClick={() => setItems(items + 1)} className='cursor-pointer'/>
                        </button>
                    </div>
                </div>
                <div className='w-full flex justify-between bg-black-100 rounded-md text-white-100 font-bold p-4'>
                    <h3 className=''> $16.25 </h3>
                    <Link href="#">
                        <a className='flex flex-row cursor-pointer'>
                            <h3>Pay</h3> 
                            <span>

                            <RightIcon className ='invert'/>
                            </span>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewOrder;