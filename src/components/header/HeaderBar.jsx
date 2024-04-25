import React from 'react'
import ShoppingCartButton from './ShoppingCarttButton'

const HeaderBar = ({ title }) => {
    return (
        <div className="flex justify-between items-center py-3">
            <h1 className="text-lg sm:text-2xl font-bold text-white">{title}</h1>
            <div className='flex gap-3 justify-center items-center'>
                <p className="text-sm sm:text-lg text-white">My Orders</p>
                <ShoppingCartButton cartCount={3} />
            </div>
        </div>
    )
}

export default HeaderBar