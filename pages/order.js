import React from 'react'
import OrderNav from '../components/order/OrderNav';
import Menu from '../components/order/Menu';
import NewOrder from '../components/order/NewOrder';

const newOrder = () => {
    return (
        <div className="flex flex-row w-full h-screen bg-white-900">
                <OrderNav/>
                <Menu/>
                <NewOrder/>
        </div>
    )
}

export default newOrder;