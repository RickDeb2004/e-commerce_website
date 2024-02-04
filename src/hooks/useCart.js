import { useState, useContext, useEffect } from 'react';
import { MyContext } from '../../App';


const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const context = useContext(MyContext);

  useEffect(() => {
    // Fetch cart data from the server or localStorage
    // You can modify this part based on your data fetching logic
    const fetchData = async () => {
      if (context.isLogin === 'true') {
        try {
          const response = await fetch('http://localhost:5000/cartItems');
          const data = await response.json();
          setCartItems(data);
        } catch (error) {
          console.log(error.message);
        }
      }
    };

    fetchData();
  }, [context.isLogin]);

  const addToCart = (item) => {
    // Add the item to the cart (modify this part based on your logic)
    setCartItems((prevCartItems) => [...prevCartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    // Remove the item from the cart (modify this part based on your logic)
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  const emptyCart = () => {
    // Empty the cart (modify this part based on your logic)
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeItemFromCart,
    emptyCart,
  };
};

export default useCart;
