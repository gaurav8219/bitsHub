import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">BitsHub</span>
            </div>
            <p className="text-gray-600 text-sm">
              Your trusted partner for quality electronics, laptops, accessories, and more. 
              We provide premium products with excellent customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Home
              </Link>
              <Link to="/category/laptops" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Laptops
              </Link>
              <Link to="/category/accessories" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Accessories
              </Link>
              <Link to="/category/headphones" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Headphones
              </Link>
              <Link to="/orders" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Track Order
              </Link>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Customer Service</h3>
            <div className="space-y-2">
              <Link to="/help" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Help Center
              </Link>
              <Link to="/returns" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Returns & Refunds
              </Link>
              <Link to="/shipping" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Shipping Info
              </Link>
              <Link to="/warranty" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Warranty
              </Link>
              <Link to="/contact" className="block text-gray-600 hover:text-orange-500 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 text-sm">
                  HP‑24 & HP‑69, Bilaspur, Himachal Pradesh – 174001<br />
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 text-sm">+91 8219373551</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600 text-sm">support@bitsHub.com</span>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-orange-700 font-medium">Customer Support Hours</p>
              <p className="text-sm text-gray-600">Monday - Friday: 9AM - 8PM</p>
              <p className="text-sm text-gray-600">Saturday - Sunday: 10AM - 6PM</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-600">
              © 2024 BitsHub. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-sm text-gray-600 hover:text-orange-500 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;