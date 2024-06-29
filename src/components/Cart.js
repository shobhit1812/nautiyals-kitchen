import { clearCart, removeItem } from "../utility/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleClearItem = (key) => {
    dispatch(removeItem(key));
  };

  return (
    <div className="text-3xl m-4 font-menu">
      <h1 className="font-extrabold">
        Total Items Added - {cartItems.length}{" "}
        <button
          className="p-2 m-1 font-medium bg-red-900 rounded-full hover:bg-red-800 text-xl text-white"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </h1>
      <div>
        {cartItems.map((item, index) => {
          return (
            <li className="m-6" key={index}>
              {item} -{" "}
              <button
                className="p-1 m-1 font-medium bg-red-700 rounded-full hover:bg-red-600 text-lg text-white"
                onClick={() => handleClearItem(item)}
              >
                remove
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
