import React from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, MapPin, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) {
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

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="min-h-screen bg-orange-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-24 h-24 rounded-full object-cover"
                  />
                ) : (
                  <User className="w-12 h-12 text-orange-500" />
                )}
              </div>
              <div>
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-orange-100">{user.email}</p>
                {user.phone && <p className="text-orange-100">{user.phone}</p>}
                {user.isAdmin && (
                  <span className="inline-block bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium mt-2">
                    Admin
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Profile Stats */}
          <div className="p-8 border-b border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{user.orders.length}</div>
                <div className="text-gray-600">Total Orders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{user.wishlist.length}</div>
                <div className="text-gray-600">Wishlist Items</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{user.addresses.length}</div>
                <div className="text-gray-600">Saved Addresses</div>
              </div>
            </div>
          </div>

          {/* Profile Menu */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                to="/orders"
                className="flex items-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group"
              >
                <Package className="w-8 h-8 text-orange-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">
                    My Orders
                  </h3>
                  <p className="text-gray-600 text-sm">Track and manage your orders</p>
                </div>
              </Link>

              <Link
                to="/wishlist"
                className="flex items-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group"
              >
                <Heart className="w-8 h-8 text-orange-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">
                    Wishlist
                  </h3>
                  <p className="text-gray-600 text-sm">Your favorite products</p>
                </div>
              </Link>

              <Link
                to="/addresses"
                className="flex items-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group"
              >
                <MapPin className="w-8 h-8 text-orange-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">
                    Addresses
                  </h3>
                  <p className="text-gray-600 text-sm">Manage delivery addresses</p>
                </div>
              </Link>

              {user.isAdmin && (
                <Link
                  to="/admin"
                  className="flex items-center p-6 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors group"
                >
                  <Settings className="w-8 h-8 text-orange-500 mr-4" />
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">
                      Admin Panel
                    </h3>
                    <p className="text-gray-600 text-sm">Manage orders and users</p>
                  </div>
                </Link>
              )}

              <button
                onClick={handleLogout}
                className="flex items-center p-6 bg-red-50 rounded-xl hover:bg-red-100 transition-colors group"
              >
                <LogOut className="w-8 h-8 text-red-500 mr-4" />
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600">
                    Logout
                  </h3>
                  <p className="text-gray-600 text-sm">Sign out of your account</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;