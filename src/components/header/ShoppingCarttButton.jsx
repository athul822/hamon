import '@fortawesome/fontawesome-free/css/all.min.css';
import Badge from './Badge';
const ShoppingCartButton = ({ cartCount }) => {
    return (
      <div className="relative">
        <button className=" text-white px-1 py-2 rounded flex items-center">
          <i className="fas fa-shopping-cart"></i>
        </button>
        <Badge count={cartCount} />
      </div>
    );
  };
  
  export default ShoppingCartButton;
  