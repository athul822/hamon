import React from 'react';
import styled from 'styled-components';
import veg_icon from '../../assets/veg_icon.png';
import non_veg_icon from '../../assets/non_veg_icon.png';
import AddBotton from './AddBotton';
const DishCard = ({ dish }) => {
  console.log(dish);
  return (
    <DishCardContainer className='md:p-3 py-5'>
      <div className="flex-1 flex flex-col gap-3 text-white">
        <div className="flex justify-start items-center gap-3">
          <img
            src={dish.dish_Typ == 1 ? veg_icon : non_veg_icon}
            alt={dish.dish_name}
            className="w-5 h-5 object-cover rounded"
          />
          <h3 className="text-lg sm:text-xl font-bold">{dish.dish_name}</h3>
        </div>
        <div className='flex justify-between items-center gap-3'>
          <div className='flex gap-3'>
            <p>{dish.dish_currency}</p>
            <p>{dish.dish_price}</p>
          </div>
          <div className='flex gap-3'>
            <p>{dish.dish_calories}</p>
            <p>{"Calories"}</p>
          </div>
        </div>
        <p className="text-sm sm:text-lg text-gray-500">{dish.dish_description}</p>
        <div>
          <AddBotton id={dish.dish_id}/>
        </div>
        {
          dish.addonCat && dish.addonCat.length > 0
            ? <p className="text-sm sm:text-lg text-red-600">Customization Available</p>
            : null
        }
      </div>

      <div className="flex">
        <img
          src={dish.dish_image}
          alt={dish.dish_name}
          className="w-28 h-28 sm:w-40 sm:h-32 object-cover rounded"
        />
      </div>
    </DishCardContainer>
  );
};

export default DishCard;

const DishCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  // padding: 1em;
  background-color: black;
  border-bottom: 0.5px solid white;
  gap: 1em;
`;
