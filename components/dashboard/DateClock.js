import React from 'react';
import Clock from 'react-live-clock';

const DateClock = () => {
    const date = new Date().toLocaleDateString();
    const day = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"][new Date().getDay()]

    return (
        <div className='flex justify-items-start w-full mx-3.5 p-4'>
            <span className="w-44 font-bold text-left">{date} | {day} |</span>
            <Clock className='flex xl:w-6/12 md:w-5/12 -mx-3' format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kuala_lumpur'} />
        </div>
    )
}
export default DateClock;