import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ProductCard from '../components/Product/ProductCard';
import { products } from '../data/products';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  const categoryProducts = products.filter(product => 
    product.category === category
  );

  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'laptops':
        return 'Laptops';
      case 'accessories':
        return 'Accessories';
      case 'headphones':
        return 'Headphones';
      default:
        return 'Products';
    }
  };

  return (
    <div className="min-h-screen bg-orange-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <Link
            to="/"
            className="flex items-center text-gray-600 hover:text-orange-500 mr-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">
            {getCategoryTitle(category || '')}
          </h1>
          <span className="ml-4 text-gray-600">
            ({categoryProducts.length} products)
          </span>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              No products found in this category
            </h2>
            <Link
              to="/"
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Browse All Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;