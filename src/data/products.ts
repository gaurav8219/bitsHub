import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'MacBook Pro 16" M3 Max',
    category: 'laptops',
    price: 2499,
    originalPrice: 2799,
    description: 'The most powerful MacBook Pro ever with M3 Max chip, perfect for professionals.',
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
      'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg'
    ],
    features: [
      'M3 Max chip with 12-core CPU',
      '38-core GPU',
      '128GB unified memory',
      '2TB storage',
      '16.2-inch Liquid Retina XDR display'
    ],
    specifications: {
      'Processor': 'Apple M3 Max',
      'Memory': '128GB',
      'Storage': '2TB SSD',
      'Display': '16.2-inch Liquid Retina XDR',
      'Graphics': '38-core GPU',
      'Battery': 'Up to 22 hours'
    },
    rating: 4.8,
    reviews: 1247,
    inStock: true
  },
  {
    id: '2',
    name: 'Dell XPS 13 Plus',
    category: 'laptops',
    price: 1299,
    originalPrice: 1499,
    description: 'Ultra-portable laptop with stunning InfinityEdge display and premium build.',
    images: [
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg',
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg'
    ],
    features: [
      '13th Gen Intel Core i7',
      '16GB LPDDR5 RAM',
      '512GB PCIe SSD',
      '13.4-inch 4K+ touchscreen',
      'Premium aluminum build'
    ],
    specifications: {
      'Processor': 'Intel Core i7-1360P',
      'Memory': '16GB LPDDR5',
      'Storage': '512GB SSD',
      'Display': '13.4-inch 4K+ touchscreen',
      'Graphics': 'Intel Iris Xe',
      'Weight': '2.73 lbs'
    },
    rating: 4.5,
    reviews: 892,
    inStock: true
  },
  {
    id: '3',
    name: 'Gaming Laptop ASUS ROG',
    category: 'laptops',
    price: 1899,
    description: 'High-performance gaming laptop with RTX 4070 and 144Hz display.',
    images: [
      'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg'
    ],
    features: [
      'Intel Core i7-13700H',
      'NVIDIA RTX 4070 8GB',
      '32GB DDR5 RAM',
      '1TB NVMe SSD',
      '15.6-inch 144Hz display'
    ],
    specifications: {
      'Processor': 'Intel Core i7-13700H',
      'Memory': '32GB DDR5',
      'Storage': '1TB NVMe SSD',
      'Display': '15.6-inch 144Hz',
      'Graphics': 'NVIDIA RTX 4070',
      'Cooling': 'Advanced cooling system'
    },
    rating: 4.7,
    reviews: 634,
    inStock: true
  },
  {
    id: '4',
    name: 'Sony WH-1000XM5',
    category: 'headphones',
    price: 399,
    originalPrice: 449,
    description: 'Industry-leading noise canceling headphones with premium sound quality.',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg'
    ],
    features: [
      'Industry-leading noise canceling',
      '30-hour battery life',
      'Multipoint connection',
      'Quick charge (3 min = 3 hours)',
      'Premium comfort design'
    ],
    specifications: {
      'Type': 'Over-ear, closed-back',
      'Driver': '30mm dynamic',
      'Battery': '30 hours with ANC',
      'Charging': 'USB-C, Quick charge',
      'Connectivity': 'Bluetooth 5.2, NFC',
      'Weight': '250g'
    },
    rating: 4.6,
    reviews: 2156,
    inStock: true
  },
  {
    id: '5',
    name: 'AirPods Pro 2nd Gen',
    category: 'headphones',
    price: 249,
    description: 'Apple AirPods Pro with active noise cancellation and spatial audio.',
    images: [
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg'
    ],
    features: [
      'Active noise cancellation',
      'Transparency mode',
      'Spatial audio with head tracking',
      'Up to 6 hours listening time',
      'Wireless charging case'
    ],
    specifications: {
      'Type': 'In-ear, wireless',
      'Chip': 'Apple H2',
      'Battery': '6 hours + 24 hours with case',
      'Charging': 'Lightning, Wireless, MagSafe',
      'Water resistance': 'IPX4',
      'Controls': 'Touch controls'
    },
    rating: 4.4,
    reviews: 3421,
    inStock: true
  },
  {
    id: '6',
    name: 'Wireless Mouse MX Master 3S',
    category: 'accessories',
    price: 99,
    originalPrice: 119,
    description: 'Advanced wireless mouse for productivity with customizable buttons.',
    images: [
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg',
      'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg'
    ],
    features: [
      'Advanced tracking sensor',
      'Customizable buttons',
      '70-day battery life',
      'Multi-device connectivity',
      'Ergonomic design'
    ],
    specifications: {
      'Sensor': 'Darkfield high precision',
      'DPI': '200-8000 DPI',
      'Battery': '70 days on full charge',
      'Connectivity': 'Bluetooth, USB receiver',
      'Buttons': '7 programmable buttons',
      'Compatibility': 'Windows, Mac, Chrome OS'
    },
    rating: 4.5,
    reviews: 876,
    inStock: true
  },
  {
    id: '7',
    name: 'Mechanical Keyboard RGB',
    category: 'accessories',
    price: 159,
    description: 'Premium mechanical keyboard with RGB lighting and tactile switches.',
    images: [
      'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg',
      'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg'
    ],
    features: [
      'Cherry MX Blue switches',
      'Per-key RGB lighting',
      'Aluminum frame',
      'Hot-swappable switches',
      'USB-C connectivity'
    ],
    specifications: {
      'Switch type': 'Cherry MX Blue',
      'Layout': 'Full-size (104 keys)',
      'Lighting': 'Per-key RGB',
      'Frame': 'Aluminum alloy',
      'Connection': 'USB-C braided cable',
      'Software': 'Customization software included'
    },
    rating: 4.7,
    reviews: 542,
    inStock: true
  },
  {
    id: '8',
    name: 'USB-C Hub 10-in-1',
    category: 'accessories',
    price: 79,
    description: 'Versatile USB-C hub with multiple ports for all your connectivity needs.',
    images: [
      'https://images.pexels.com/photos/163140/circuit-circuit-board-resistor-computer-163140.jpeg'
    ],
    features: [
      '10 ports in one hub',
      '4K HDMI output',
      '100W power delivery',
      'SD/microSD card readers',
      'Gigabit Ethernet'
    ],
    specifications: {
      'Ports': 'USB-A x3, USB-C x2, HDMI, Ethernet, SD, microSD, Audio',
      'Power delivery': '100W',
      'Video output': '4K@60Hz HDMI',
      'Data transfer': 'USB 3.0 (5Gbps)',
      'Material': 'Aluminum alloy',
      'Compatibility': 'MacBook, laptop, tablet'
    },
    rating: 4.3,
    reviews: 721,
    inStock: true
  }
];