import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CartBubble = () => {
  const { items, totalItems, totalAmount } = useCart();
  const [showBubble, setShowBubble] = useState(false);
  const [bubbleTimeout, setBubbleTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (totalItems > 0) {
      setShowBubble(true);
      
      // Clear existing timeout
      if (bubbleTimeout) {
        clearTimeout(bubbleTimeout);
      }
      
      // Set new timeout for 5 seconds
      const timeout = setTimeout(() => {
        setShowBubble(false);
      }, 5000);
      
      setBubbleTimeout(timeout);
    }

    return () => {
      if (bubbleTimeout) {
        clearTimeout(bubbleTimeout);
      }
    };
  }, [totalItems]);

  // Show bubble on hover
  const handleMouseEnter = () => {
    if (totalItems > 0) {
      setShowBubble(true);
      if (bubbleTimeout) {
        clearTimeout(bubbleTimeout);
      }
    }
  };

  const handleMouseLeave = () => {
    if (totalItems > 0) {
      const timeout = setTimeout(() => {
        setShowBubble(false);
      }, 1000);
      setBubbleTimeout(timeout);
    }
  };

  if (totalItems === 0) return null;

  return (
    <div 
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to="/cart"
        className={`bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 flex items-center space-x-3 ${
          showBubble ? 'animate-bounce' : ''
        }`}
      >
        <div className="relative">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute -top-2 -right-2 bg-white text-orange-500 text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {totalItems}
          </span>
        </div>
        <div className="text-sm">
          <div className="font-semibold">${totalAmount.toFixed(2)}</div>
          <div className="text-orange-200">Go to Cart</div>
        </div>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default CartBubble;