import React from 'react';
import IpadIcon from '../public/icons/ipadLogo.svg';
import Image from 'next/image';
import NewOrderIcon from '../public/icons/newOrder.svg';
import DashboardIcon from '../public/icons/dashboard.svg';
import OnlineOrdersIcon from '../public/icons/onlineOrders.svg';
import SettingsIcon from '../public/icons/settings.svg';
import LogoutIcon from '../public/icons/logout.svg';
import {useRouter} from 'next/router';
import Link from 'next/link';

const Sidebar = () => {
    const router = useRouter();
    const Sides = [
        {
            id : 1,
            icon : <NewOrderIcon className='mx-auto mt-5'/>,
            name : 'New Order',
            path : '/order'
        },
        {
            id : 2,
            icon : <DashboardIcon className='mx-auto mt-5'/>,
            name : 'Dashboard',
            path : '/'
        },
        {
            id : 3,
            icon : <OnlineOrdersIcon className='mx-auto mt-5'/>,
            name : 'Online Orders',
            path : '/online-orders'
        },
        {
            id : 4,
            icon : <SettingsIcon className='mx-auto mt-5'/>,
            name : 'Settings',
            path : '/settings'
        },
        {
            id : 5,
            icon : <LogoutIcon className='mx-auto mt-5'/>,
            name : 'Logout',
            path : '/logout'
        }
    ]

    return (
        <div className='flex flex-col items-center xl:w-1/12 md:w-36 h-screen'>
            <div className='lg:my-0 sm:my-1 mx-auto'>
                <IpadIcon/>
            </div>
            {Sides.map(side => (
            <div key={side.id} className='flex flex-row m-auto'>
                <div className={`shadow-md rounded-md xl:my-5 lg:my-3 sm:my-8 justify-center w-20 h-20 
                ${router.pathname === side.path 
                ? 'fill-white-100 invert bg-black-110' 
                :'hover:fill-white-100 bg-white-100 hover:invert hover:bg-black-110'}
                `}
                >
                    <Link href={side.path}>
                        <a>
                            {side.icon}
                            <div className='text-xs text-center font-sf mt-1'>
                            <span>{side.name}</span>
                            </div>
                        </a>
                    </Link>
                </div> 
            </div>
                ))}    
        </div>
    )
}

export default Sidebar;