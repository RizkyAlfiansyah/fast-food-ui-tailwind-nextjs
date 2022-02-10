import React from 'react';
import IpadIcon from '../public/icons/ipadLogo.svg';
import Image from 'next/image';
import NewOrderIcon from '../public/icons/newOrder.svg';
import DashboardIcon from '../public/icons/dashboard.svg';
import OnlineOrdersIcon from '../public/icons/onlineOrders.svg';
import SettingsIcon from '../public/icons/settings.svg';
import LogoutIcon from '../public/icons/logout.svg';
import { useState } from 'react';
import Link from 'next/link';

const Sidebar = () => {

    return (
        <div className='flex flex-col items-center w-36 h-1/3'>
            <div className='lg:my-0 sm:my-1'>
                <IpadIcon/>
            </div>
            <div className='inline-grid grid-cols-1'>
                <div className='inline-grid grid-cols-1 rounded-md xl:my-5 lg:my-3 sm:my-8 justify-center w-20 h-20 hover:fill-white-100 bg-white-100 hover:invert hover:bg-black-110 hover:scale-x-110'>
                    <Link href="/">
                        <a>
                            <NewOrderIcon className='mx-auto mt-5'/>
                            <div className='text-xs text-center font-sf mt-1'>
                            <span>New Order</span>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className='inline-grid grid-cols-1 rounded-md xl:my-5 lg:my-3 sm:my-8 justify-center w-20 h-20 bg-white-100 hover:invert hover:bg-black-110 hover:scale-x-110'>
                    <Link href="/">
                        <a>
                            <DashboardIcon className='mx-auto mt-5'/>
                            <div className='text-xs text-center font-sf mt-1'>
                            <span>Dashboard</span>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className='inline-grid grid-cols-1 rounded-md xl:my-5 lg:my-3 sm:my-8 justify-center w-20 h-20 bg-white-100 hover:invert hover:bg-black-110 hover:scale-x-110'>
                    <Link href="/">
                        <a>
                            <OnlineOrdersIcon className='mx-auto mt-5'/>
                            <div className='text-xs text-center font-sf mt-1'>
                            <span>Online Order</span>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className='inline-grid grid-cols-1 rounded-md xl:my-5 lg:my-3 sm:my-8 justify-center w-20 h-20 bg-white-100 hover:invert hover:bg-black-110 hover:scale-x-110'>
                    <Link href="/">
                        <a>
                            <SettingsIcon className='mx-auto mt-5'/>
                            <div className='text-xs text-center font-sf mt-1'>
                            <span>Setting</span>
                            </div>
                        </a>
                    </Link>
                </div>
                <div className='inline-grid grid-cols-1 rounded-md lg:my-3 sm:my-8 justify-center w-20 h-20 bg-white-100 hover:invert hover:bg-black-110 hover:scale-x-110'>
                    <Link href="/">
                        <a>
                            <LogoutIcon className='mx-auto mt-5'/>
                            <div className='text-xs text-center font-sf mt-1'>
                            <span>Logout</span>
                            </div>
                        </a>
                    </Link>
                </div>                
            </div>
        </div>
    )
}

export default Sidebar;