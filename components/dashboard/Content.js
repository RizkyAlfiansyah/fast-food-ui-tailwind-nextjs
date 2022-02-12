import React from 'react'
import DateClock from "./DateClock";
import DolarIcon from '../../public/icons/dolar.svg';
import NewOrderIcon from '../../public/icons/newOrder.svg';
import CustomerIcon from '../../public/icons/customers.svg';
import OnlineOrdersIcon from '../../public/icons/onlineOrders.svg';
import BurgerIcon from '../../public/icons/burgers.svg';
import MealsIcon from '../../public/icons/meals.svg';
import SidesIcon from '../../public/icons/sides.svg';
import SandwhichesIcon from '../../public/icons/sandwhiches.svg';
import DessertIcon from '../../public/icons/dessert.svg';


const Content = () => {
    const stats = [
        {
            id : 1,
            icon : <DolarIcon/>,
            value : '$12456',
            title : 'Total Revenue'
        },
        {
            id : 2,
            icon : <NewOrderIcon/>,
            value : '1093',
            title : 'Total Orders'
        },
        {
            id : 3,
            icon : <CustomerIcon/>,
            value : '840',
            title : 'Walk-ins'
        },
        {
            id : 4,
            icon : <OnlineOrdersIcon/>,
            value : '199',
            title : 'Online Orders'
        }
    ]

    const reports = [
        {
            id : 1,
            icon : <BurgerIcon/>,
            name : 'Quarter Pounder With Chese',
            orders : '530',
            ppu : '$3.99',
            revenue : '$2114.70',
        },
        {
            id : 2,
            icon : <SidesIcon/>,
            name : 'Large Soda',
            orders : '520',
            ppu : '$2.99',
            revenue : '$1554.80',
        },
        {
            id : 3,
            icon : <MealsIcon/>,
            name : 'Big Mac McMeal',
            orders : '502',
            ppu : '$6.99',
            revenue : '$3508.98',
        },
        {
            id : 4,
            icon : <BurgerIcon/>,
            name : 'Big Mac',
            orders : '502',
            ppu : '$3.99',
            revenue : '$3508.98',
        },
        {
            id : 5,
            icon : <SandwhichesIcon/>,
            name : 'McChicken Deluxe',
            orders : '492',
            ppu : '$3.99',
            revenue : '$1963.08',
        },
        {
            id : 6,
            icon : <DessertIcon/>,
            name : 'Oreo Mcflurry',
            orders : '450',
            ppu : '$3.99',
            revenue : '$1795.59',
        },
        {
            id : 7,
            icon : <BurgerIcon/>,
            name : 'McDouble',
            orders : '450',
            ppu : '$1.99',
            revenue : '$895.50',
        },
    ]

    return (
        <div className='flex flex-col items-center xl:w-6/12 lg:w-2/13 h-screen xl:mx-5'>
            <DateClock />
            <div className='grid grid-cols-4 grid-rows-1 lg:gap-4 xl:gap-10'>
                {stats.map(stat => (
                <div key={stat.id} className='lg:w-28 lg:h-28 xl:w-40 bg-black-100 rounded-md text-white-100'>
                    <div className='m-2'>
                        <div className='flex my-4 invert'>
                           {stat.icon}
                        </div>
                        <span className='text-white-100 font-bold'> {stat.value} </span><br/>
                        <span className='text-gray-400 font-thin text-xs'> {stat.title} </span>
                    </div>
                </div>
                ))}
            </div>
            <div className='w-full h-screen rounded-sm shadow-md mt-5 text-black-1 bg-white-100'>
                <div className='mx-2 my-4'>
                    <span className='flex font-bold text-lg'>Ordered Items</span>
                </div>
                <div className='mr-4'>
                    <table className="w-full text-xs my-5 mx-2">
                        <thead>
                            <tr className='text-left'>
                            <th className='pb-3'>Item</th>
                            <th className='pb-3'>Name</th>
                            <th className='pb-3'>Orders</th>
                            <th className='pb-3'>PPU</th>
                            <th className='pb-3 mr-5'>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reports.map(report => (
                            <tr key={report.id}>
                            <td className='pb-4 border-b border-gray-200'>{report.icon}</td>
                            <td className='pb-4 border-b border-gray-200'>{report.name}</td>
                            <td className='font-bold pb-4 border-b border-gray-200'>{report.orders}</td>
                            <td className='pb-4 border-b border-gray-200'>{report.ppu}</td>
                            <td className='font-bold pb-4 border-b border-gray-200'>{report.revenue}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Content