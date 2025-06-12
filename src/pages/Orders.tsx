import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Truck, CheckCircle, XCircle, Clock, ArrowLeft, Download } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Order } from '../types';

const Orders = () => {
  const { user, updateUser } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <Link
            to="/login"
            className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    );
  }

  const handleCancelOrder = (orderId: string) => {
    const updatedOrders = user.orders.map(order =>
      order.id === orderId ? { ...order, status: 'cancelled' as const } : order
    );
    updateUser({ orders: updatedOrders });

    // Update global orders for admin
    const allOrders = JSON.parse(localStorage.getItem('allOrders') || '[]');
    const updatedAllOrders = allOrders.map((order: Order) =>
      order.id === orderId ? { ...order, status: 'cancelled' } : order
    );
    localStorage.setItem('allOrders', JSON.stringify(updatedAllOrders));
  };

  const downloadInvoice = (order: Order) => {
    const invoiceContent = `
INVOICE - Order #${order.id.slice(-8)}
=====================================

Order Date: ${new Date(order.orderDate).toLocaleDateString()}
Order ID: ${order.id}
Status: ${order.status.toUpperCase()}

BILLING INFORMATION:
${order.deliveryAddress.name}
${order.deliveryAddress.street}
${order.deliveryAddress.city}, ${order.deliveryAddress.state} ${order.deliveryAddress.zipCode}
Phone: ${order.deliveryAddress.phone}

ITEMS ORDERED:
${order.items.map(item => 
  `${item.product.name} - Qty: ${item.quantity} - $${(item.product.price * item.quantity).toFixed(2)}`
).join('\n')}

PAYMENT SUMMARY:
Subtotal: $${(order.totalAmount / 1.08).toFixed(2)}
Tax: $${(order.totalAmount * 0.08 / 1.08).toFixed(2)}
Total: $${order.totalAmount.toFixed(2)}

Payment Method: ${order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Credit/Debit Card'}

Thank you for shopping with ShopHub!
    `;

    const blob = new Blob([invoiceContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `invoice-${order.id.slice(-8)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-5 h-5 text-yellow-500" />;
      case 'confirmed':
        return <CheckCircle className="w-5 h-5 text-blue-500" />;
      case 'shipped':
        return <Truck className="w-5 h-5 text-purple-500" />;
      case 'delivered':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'cancelled':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Package className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'shipped':
        return 'bg-purple-100 text-purple-800';
      case 'delivered':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressWidth = (status: string) => {
    switch (status) {
      case 'pending':
        return '25%';
      case 'confirmed':
        return '50%';
      case 'shipped':
        return '75%';
      case 'delivered':
        return '100%';
      case 'cancelled':
        return '0%';
      default:
        return '0%';
    }
  };

  const getProgressSteps = (status: string) => {
    const steps = [
      { key: 'pending', label: 'Order Placed', active: false },
      { key: 'confirmed', label: 'Confirmed', active: false },
      { key: 'shipped', label: 'Shipped', active: false },
      { key: 'delivered', label: 'Delivered', active: false },
    ];

    const statusOrder = ['pending', 'confirmed', 'shipped', 'delivered'];
    const currentIndex = statusOrder.indexOf(status);

    if (status === 'cancelled') {
      steps[0].active = true;
      return steps;
    }

    steps.forEach((step, index) => {
      step.active = index <= currentIndex;
    });

    return steps;
  };

  return (
    <div className="min-h-screen bg-orange-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link
            to="/profile"
            className="flex items-center text-gray-600 hover:text-orange-500 mr-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Profile
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">My Orders</h1>
        </div>

        {user.orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-12 text-center">
            <Package className="w-24 h-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
            <p className="text-gray-600 mb-8">Start shopping to see your orders here</p>
            <Link
              to="/"
              className="bg-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {user.orders
              .sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime())
              .map((order) => (
                <div key={order.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  {/* Order Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          Order #{order.id.slice(-8)}
                        </h3>
                        <p className="text-gray-600">
                          Placed on {new Date(order.orderDate).toLocaleDateString()}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">
                          ${order.totalAmount.toFixed(2)}
                        </p>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                          {getStatusIcon(order.status)}
                          <span className="ml-2 capitalize">{order.status}</span>
                        </span>
                      </div>
                    </div>

                    {/* Progress Tracking - Flipkart Style */}
                    {order.status !== 'cancelled' && (
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-4">
                          {getProgressSteps(order.status).map((step, index) => (
                            <div key={step.key} className="flex flex-col items-center flex-1">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                step.active ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                              }`}>
                                {step.active ? (
                                  <CheckCircle className="w-5 h-5" />
                                ) : (
                                  <div className="w-3 h-3 rounded-full bg-gray-400" />
                                )}
                              </div>
                              <span className={`text-xs mt-2 text-center ${
                                step.active ? 'text-green-600 font-medium' : 'text-gray-500'
                              }`}>
                                {step.label}
                              </span>
                              {index < getProgressSteps(order.status).length - 1 && (
                                <div className={`absolute h-0.5 w-full top-4 left-1/2 ${
                                  step.active && getProgressSteps(order.status)[index + 1]?.active 
                                    ? 'bg-green-500' 
                                    : 'bg-gray-200'
                                }`} style={{ zIndex: -1 }} />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {order.trackingNumber && (
                      <p className="text-sm text-gray-600">
                        Tracking Number: <span className="font-medium">{order.trackingNumber}</span>
                      </p>
                    )}
                  </div>

                  {/* Order Items */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {order.items.map((item) => (
                        <div key={item.productId} className="flex items-center space-x-4">
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <Link
                              to={`/product/${item.product.id}`}
                              className="font-semibold text-gray-900 hover:text-orange-500 transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            <p className="text-gray-600 text-sm">
                              Quantity: {item.quantity} × ${item.product.price}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900">
                              ${(item.product.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Delivery Address */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <h4 className="font-semibold text-gray-900 mb-2">Delivery Address</h4>
                      <div className="text-gray-600 text-sm">
                        <p>{order.deliveryAddress.name}</p>
                        <p>{order.deliveryAddress.street}</p>
                        <p>
                          {order.deliveryAddress.city}, {order.deliveryAddress.state}{' '}
                          {order.deliveryAddress.zipCode}
                        </p>
                        <p>{order.deliveryAddress.phone}</p>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 pt-6 border-t border-gray-100 flex justify-between items-center">
                      <div className="flex space-x-4">
                        {order.status === 'pending' && (
                          <button
                            onClick={() => handleCancelOrder(order.id)}
                            className="text-red-600 hover:text-red-800 font-medium transition-colors"
                          >
                            Cancel Order
                          </button>
                        )}
                      </div>
                      <div className="flex space-x-4">
                        <button
                          onClick={() => downloadInvoice(order)}
                          className="flex items-center text-orange-500 hover:text-orange-700 font-medium transition-colors"
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;