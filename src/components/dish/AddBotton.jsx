import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, decrementQuantity } from '../../store/features/cart/cartSlice';
import { selectCartItems } from '../../store/features/cart/cartSelectors';

const AddBotton = ({id}) => {
    const totalQuantity = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const handleIncrementCart = () => {
        dispatch(addToCart({
            productId: id,
            quantity: 1
          }))
    }
    const handleDecrementCart = () => {
        dispatch(decrementQuantity({ productId: id }))
    }
    return (
        <div className="inline-flex gap-3 items-center bg-green-500 rounded-2xl">
            <button
                  onClick={handleDecrementCart}
                className="text-grey-500 rounded px-5 py-1"
            >
                -
            </button>
            <p className="">{totalQuantity[id]? totalQuantity[id].quantity : 0}</p>
            <button
                  onClick={handleIncrementCart}
                className=" text-white rounded px-5 py-1"
            >
                +
            </button>
        </div>
    )
}

export default AddBotton

