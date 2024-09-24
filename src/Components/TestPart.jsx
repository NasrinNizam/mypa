import React from 'react'
import ProductCard from './Home/homeCompo/ProductCard';

export const TestPart = () => {
  const products = [
    {
      image: 'path/to/image1.jpg',
      title: 'Natural Grocery items for your daily',
      location: 'Bangladesh',
      views: '541k',
      category: 'Car',
      rating: 4.9,
      price: '$520.00',
      status: 'New',
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Natural Grocery items for your daily',
      location: 'Bangladesh',
      views: '120k',
      category: 'Restaurant',
      rating: 4.9,
      price: '$520.00',
      status: 'Sold',
    },
  ];
  return (
    <div>    <div className="container mx-auto py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  </div>
</div>
  )
}
