import { useSelector } from "react-redux";
import { selectTotalQuantity } from "../../store/features/cart/cartSelectors";

const Badge = ({ count }) => {
  const totalQuantity = useSelector(selectTotalQuantity);
    return (
      <span className="absolute top-1 right-1 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-sm">
        {totalQuantity}
      </span>
    );
  };
  
  export default Badge;