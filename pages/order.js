import React from 'react'
import Sidebar from '../components/Sidebar';
import ArrowIcon from '../public/icons/arrow-left.svg';

const newOrder = () => {
    return (
        <div className="flex flex-row w-full h-screen bg-white-900">
            <div>
                {/* <ArrowIcon/> */}
                <Sidebar/>
            </div>
        </div>
    )
}

export default newOrder;