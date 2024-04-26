import React from 'react'
import { useSelector } from 'react-redux';
import DishCard from '../dish/DishCard';

const TabView = ({ data }) => {
    const activeTab = useSelector((state) => state.tab.value);
    return (
        <>
            {
                data && data.category_dishes.map((item, index) => (
                    <DishCard dish={item} />
                ))
            }
        </>
    )
}

export default TabView