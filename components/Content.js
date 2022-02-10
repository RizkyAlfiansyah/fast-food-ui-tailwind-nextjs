import React from 'react'
import DateClock from "../components/DateClock";
import DolarIcon from '../public/icons/dolar.svg';
import NewOrderIcon from '../public/icons/newOrder.svg';
import CustomerIcon from '../public/icons/customers.svg';
import OnlineOrdersIcon from '../public/icons/onlineOrders.svg';
import BurgerIcon from '../public/icons/burgers.svg';
import DrinkIcon from '../public/icons/drinks.svg';
import MealsIcon from '../public/icons/meals.svg';
import SidesIcon from '../public/icons/sides.svg';
import SandwhichesIcon from '../public/icons/sandwhiches.svg';
import DessertIcon from '../public/icons/dessert.svg';


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
        <div className='flex flex-col items-center w-2/13 h-1/13'>
            <DateClock />
            <div className='grid grid-cols-4 grid-rows-1 gap-4'>
                {stats.map(stat => (
                <div key={stat.id} className='w-28 h-28 bg-black-100 rounded-md text-white-100'>
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
            <div className='flex flex-col w-full h-1/13 rounded-sm shadow-md mt-5 text-black-1 bg-white-100'>
                <div className='mx-2 my-4'>
                    <span className='flex font-bold text-lg'>Ordered Items</span>
                </div>
                <table className="w-full text-xs my-5 mx-2">
                    <thead className='text-left'>
                        <tr>
                        <th className='pb-6 '>Item</th>
                        <th className='pb-6 '>Name</th>
                        <th className='pb-6'>Orders</th>
                        <th className='pb-6'>PPU</th>
                        <th className='pb-6'>Revenue</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reports.map(report => (
                        <tr key={report.id}>
                        <td className='pb-6'>{report.icon}</td>
                        <td className='pb-6'>{report.name}r</td>
                        <td className='font-bold pb-6'>{report.orders}</td>
                        <td className='pb-6'>{report.ppu}</td>
                        <td className='font-bold pb-6'>{report.revenue}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Content