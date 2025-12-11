import React from 'react';
import { X, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, toggleCart, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
        onClick={toggleCart} 
      />
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out animation-slide-in">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-earth-100 flex items-center justify-between bg-earth-50">
          <h2 className="text-xl font-serif font-bold text-earth-900 flex items-center gap-2">
            <ShoppingBag size={20} /> Your Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
          </h2>
          <button 
            onClick={toggleCart} 
            className="p-2 text-earth-500 hover:bg-earth-200 hover:text-earth-900 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
              <div className="p-4 bg-earth-50 rounded-full">
                <ShoppingBag size={40} className="text-earth-300" />
              </div>
              <div>
                <p className="text-lg font-medium text-earth-900">Your cart is empty</p>
                <p className="text-earth-500 mt-1">Looks like you haven't added anything yet.</p>
              </div>
              <button 
                onClick={toggleCart} 
                className="px-6 py-2 bg-nature-600 text-white rounded-full hover:bg-nature-700 transition-colors mt-4"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="flex gap-4 p-4 bg-white border border-earth-100 rounded-xl shadow-sm hover:border-nature-200 transition-colors">
                <div className="w-20 h-20 bg-earth-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-medium text-earth-900 line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-earth-500">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-earth-100 px-2 py-1 rounded text-earth-600">Qty: {item.quantity}</span>
                      <span className="font-semibold text-earth-800">${item.price * item.quantity}</span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-earth-400 hover:text-red-500 transition-colors p-1"
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-earth-100 p-6 bg-earth-50 space-y-4">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-earth-600">
                <span>Subtotal</span>
                <span>${cartTotal}</span>
              </div>
              <div className="flex justify-between text-earth-600">
                <span>Shipping</span>
                <span className="text-nature-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold text-earth-900 pt-2 border-t border-earth-200">
                <span>Total</span>
                <span>${cartTotal}</span>
              </div>
            </div>
            <button 
              className="w-full py-4 bg-earth-900 text-white rounded-xl font-medium hover:bg-earth-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group"
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Checkout Now
              <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;