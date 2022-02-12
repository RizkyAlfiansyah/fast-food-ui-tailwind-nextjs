import React from 'react'
import SettingsIcon from '../../public/icons/settings.svg';
import Link from 'next/link';
import BurgerIcon from '../../public/icons/burgers.svg';
import MealsIcon from '../../public/icons/meals.svg';
import SidesIcon from '../../public/icons/sides.svg';
import SandwhichesIcon from '../../public/icons/sandwhiches.svg';
import DessertIcon from '../../public/icons/dessert.svg';

const NewOrder = () => {
    const menus = [
        {
            id : 1,
            icon : <MealsIcon/>,
            name : 'Meals',
        },
        {
            id : 2,
            icon : <SandwhichesIcon/>,
            name : 'Sandwhiches',
        },
        {
            id : 3,
            icon : <DessertIcon/>,
            name : 'Desserts',
        },
        {
            id : 4,
            icon : <SidesIcon/>,
            name : 'Sides',
        },
        {
            id : 5,
            icon : <BurgerIcon/>,
            name : 'Burgers',
        }
    ]

    return (
        <div className='flex flex-col shadow-md xl:w-4/12 lg:w-96 h-screen mx-auto bg-white-100'>
            <div className='w-auto flex mx-2 my-4'>
                <span className='w-2/12 font-bold lg:mr-3 xl:mr-0 text-xl'> Overall </span>  
                <span className='w-9/12 text-xl lg:-ml-2 xl:-ml-9'> Statistic </span>
                <SettingsIcon className='cursor-pointer hover:scale-150 w-1/12 m-auto'/>
            </div>
            <div className='w-auto flex justify-between p-2 text-center text-xs cursor-pointer'>
                <div className='w-36 h-10 hover:bg-black-100 text-black-100 hover:text-white-100 rounded-md shadow-lg p-3'>
                    <Link href="#">
                        <a> This week </a>
                    </Link>
                </div>
                <div className='w-36 h-10 hover:bg-black-100 hover:text-white-100 text-black-100 rounded-md shadow-xl p-3'>
                    <Link href="#">
                        <a> This month </a>
                    </Link>
                </div>
                <div className='w-36 h-10 hover:bg-black-100 hover:text-white-100 text-black-100 rounded-md shadow-xl p-3'>
                    <Link href="#">
                        <a> This year </a>
                    </Link>
                </div>
            </div>
            <div className='w-auto overflow-auto mx-2 my-4'>
                {menus.map(menu => (
                <div key={menu.id}>
                    <div className='flex w-auto mx-2 my-4'>
                            {menu.icon}
                            <span className='text-sm m-auto mx-2'> {menu.name} </span>
                    </div>
                    <div className='flex flex-row w-auto py-4 mx-2 justifiy-evently'>
                        <div className='flex flex-col mr-5'>
                            <div className='grid grid-cols-3 grid-rows-1 gap-1 xl:gap-0'>
                                <div className='w-6 h-14 pt-4 bg-black-100 rounded-t-md'/>
                                <div className='w-6 h-12 mt-2 bg-sky-700 rounded-t-md'/>
                                <div className='w-6 h-10 mt-4 bg-sky-600 rounded-t-md'/>
                            </div>
                            <span className='text-black-100 font-semibold'>Week 1</span>
                        </div>
                        <div className='flex flex-col mx-5'>
                            <div className='grid grid-cols-3 grid-rows-1 gap-1 xl:gap-0'>
                                <div className='w-6 h-14 pt-4 bg-black-100 rounded-t-md'/>
                                <div className='w-6 h-12 mt-2 bg-sky-700 rounded-t-md'/>
                                <div className='w-6 h-10 mt-4 bg-sky-600 rounded-t-md'/>
                            </div>
                            <span className='text-black-100 font-semibold'>Week 2</span>
                        </div>
                        <div className='flex flex-col mx-5'>
                            <div className='grid grid-cols-3 grid-rows-1 gap-1 xl:gap-0'>
                                <div className='w-6 h-14 pt-4 bg-black-100 rounded-t-md'/>
                                <div className='w-6 h-12 mt-2 bg-sky-700 rounded-t-md'/>
                                <div className='w-6 h-10 mt-4 bg-sky-600 rounded-t-md'/>
                            </div>
                            <span className='text-black-100 font-semibold'>Week 3</span>
                        </div>
                        <div className='flex flex-col mx-5'>
                            <div className='grid grid-cols-3 grid-rows-1 gap-1 xl:gap-0'>
                                <div className='w-6 h-14 pt-4 bg-black-100 rounded-t-md'/>
                                <div className='w-6 h-12 mt-2 bg-sky-700 rounded-t-md'/>
                                <div className='w-6 h-10 mt-4 bg-sky-600 rounded-t-md'/>
                            </div>
                            <span className='text-black-100 font-semibold'>Week 4</span>
                        </div>
                    </div>
                    <div className='w-auto flex flex-row mx-2 my-2'>    
                        <div className='w-20 flex flex-col'>
                            <span className='border-black-100 border-4 w-14 rounded-xl my-3'/>
                            <span className='border-sky-700 border-4 w-14 rounded-xl my-3'/>
                            <span className='border-sky-600 border-4 w-14 rounded-xl my-3'/>
                        </div>
                        <div className='w-auto flex flex-col'>
                            <span className='text-sm my-1'> Big Mac McMeal </span>
                            <span className='text-sm my-2'> Quarter Pounder McMeal </span>
                            <span className='text-sm my-1'> Chcicken Deluxe McMeal </span>
                        </div>
                    </div>
                    <span className='border-b border-gray-300 w-auto my-2 mx-2'/>
                </div>
                ))}
            </div>
        </div>
    )
}

export default NewOrder;