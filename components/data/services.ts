// components/data/services.ts
import { Service } from '@/components/types';

const loremAnswer = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
const loremDesc = 'A brief, engaging description of this item, highlighting what makes it special and sustainable.';

// --- 10 MOCK SERVICES ---
export const mockServices: Service[] = 
[
  {
    id: 's1',
    slug: 'farm-homestay',
    type: 'service',
    category: 'Hospitality',
    title: 'Farm Homestay',
    description: 'Experience authentic farm life. Stay in our guest cottage and wake up to the sounds of nature.',
    imageUrl: '/images/services/homestay.jpg', 
    href: '/services/farm-homestay',
    mainImageUrl: '/images/services/details/homestay-main.jpg',
    longDescription: 'Escape the city and reconnect with nature. Our farm homestay offers a peaceful retreat in a comfortable, fully-furnished guest cottage. Participate in farm activities or simply relax and enjoy the fresh air.',
    workPoints: ['Cozy 2-Bedroom Cottage', 'Includes Farm-Fresh Breakfast', 'Guided Farm Tour Included', 'Stargazing and Nature Walks'],
    faqs: [
      { id: 'f1', question: 'Are pets allowed?', answer: 'Yes, we welcome well-behaved pets!' },
    ]
  },
  {
    id: 's2',
    slug: 'gardening-workshop',
    type: 'service',
    category: 'Workshops',
    title: 'Organic Gardening Workshop',
    description: 'Learn to grow your own organic vegetables, from soil preparation to harvest.',
    imageUrl: '/images/services/grow-workshop.jpg', 
    href: '/services/gardening-workshop',
    mainImageUrl: '/images/services/details/grow-main.jpg',
    longDescription: 'Join our founder, Will, for a hands-on workshop. You will learn the fundamentals of organic gardening, including soil health, composting, pest control, and seasonal planting. Perfect for beginners!',
    workPoints: ['3-Hour Hands-On Class', 'Take-Home Starter Kit', 'Learn Composting Techniques', 'Seasonal Planting Guide'],
    faqs: [
      { id: 'f1', question: 'Do I need to bring any tools?', answer: 'No, all tools and materials are provided.' },
    ]
  },
  {
    id: 's3',
    slug: 'tree-care-workshop',
    type: 'service',
    category: 'Workshops',
    title: 'Plant & Tree Care',
    description: 'A workshop on pruning, grafting, and general care for your fruit trees and ornamental plants.',
    imageUrl: '/images/services/tree-care.jpg', 
    href: '/services/tree-care-workshop',
    mainImageUrl: '/images/services/details/tree-care-main.jpg',
    longDescription: 'Learn the secrets to healthy, productive trees. This workshop covers proper pruning techniques, seasonal care, and how to identify and treat common plant diseases organically.',
    workPoints: ['Learn Proper Pruning', 'Identify Common Pests', 'Soil and Fertilization Tips'],
    faqs: [
      { id: 'f1', question: 'What time of year is this held?', answer: 'We offer this workshop in early spring and late fall.' },
    ]
  },
  {
    id: 's4',
    slug: 'farm-to-table-dinners',
    type: 'service',
    category: 'Events',
    title: 'Farm-to-Table Dinners',
    description: 'Enjoy a gourmet meal prepared by a local chef using ingredients harvested just hours before.',
    imageUrl: '/images/services/dinner.jpg', 
    href: '/services/farm-to-table-dinners',
    mainImageUrl: '/images/services/details/dinner-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Communal Seating', 'Seasonal Menu', 'Wine Pairings Available'],
    faqs: [
      { id: 'f1', question: 'Can you accommodate allergies?', answer: loremAnswer },
    ]
  },
  {
    id: 's5',
    slug: 'guided-farm-tours',
    type: 'service',
    category: 'Tours',
    title: 'Guided Farm Tours',
    description: 'A 1-hour walking tour of our farm, explaining our sustainable methods. Great for families.',
    imageUrl: '/images/services/tour.jpg', 
    href: '/services/guided-farm-tours',
    mainImageUrl: '/images/services/details/tour-main.jpg',
    longDescription: loremDesc,
    workPoints: ['See the Animals', 'Learn about Crop Rotation', 'Tasting Included'],
    faqs: [
      { id: 'f1', question: 'Is the tour accessible?', answer: loremAnswer },
    ]
  },
  {
    id: 's6',
    slug: 'u-pick-berries',
    type: 'service',
    category: 'Activities',
    title: 'U-Pick Berries',
    description: 'Bring the family and pick your own fresh strawberries and blueberries during the summer season.',
    imageUrl: '/images/services/u-pick.jpg', 
    href: '/services/u-pick-berries',
    mainImageUrl: '/images/services/details/u-pick-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Available May-July', 'Pay by the Pound', 'All Baskets Provided'],
    faqs: [
      { id: 'f1', question: 'When is the best time to come?', answer: loremAnswer },
    ]
  },
  {
    id: 's7',
    slug: 'soil-testing',
    type: 'service',
    category: 'Consulting',
    title: 'Soil Testing Service',
    description: 'Bring us a sample of your garden soil and we\'ll provide a detailed analysis and amendment plan.',
    imageUrl: '/images/services/soil-test.jpg', 
    href: '/services/soil-testing',
    mainImageUrl: '/images/services/details/soil-test-main.jpg',
    longDescription: loremDesc,
    workPoints: ['NPK Analysis', 'PH Testing', 'Organic Amendment Recommendations'],
    faqs: [
      { id: 'f1', question: 'How much soil do I need to bring?', answer: loremAnswer },
    ]
  },
  {
    id: 's8',
    slug: 'composting-workshop',
    type: 'service',
    category: 'Workshops',
    title: 'Composting Workshop',
    description: 'Learn the art and science of turning kitchen scraps into "black gold" for your garden.',
    imageUrl: '/images/services/compost.jpg', 
    href: '/services/composting-workshop',
    mainImageUrl: '/images/services/details/compost-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Hot vs. Cold Composting', 'Vermiculture (Worm) Bins', 'Troubleshooting Common Issues'],
    faqs: [
      { id: 'f1', question: 'What should I bring?', answer: loremAnswer },
    ]
  },
  {
    id: 's9',
    slug: 'event-venue-rental',
    type: 'service',
    category: 'Events',
    title: 'Event Venue Rental',
    description: 'Our rustic barn and open fields are the perfect backdrop for weddings, parties, and corporate retreats.',
    imageUrl: '/images/services/venue.jpg', 
    href: '/services/event-venue-rental',
    mainImageUrl: '/images/services/details/venue-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Capacity for 150 Guests', 'Scenic Photo Locations', 'Preferred Vendor List Available'],
    faqs: [
      { id: 'f1', question: 'What is the pricing?', answer: loremAnswer },
    ]
  },
  {
    id: 's10',
    slug: 'beekeeping-basics',
    type: 'service',
    category: 'Workshops',
    title: 'Beekeeping Basics',
    description: 'An introductory workshop to the fascinating world of backyard beekeeping and honey harvesting.',
    imageUrl: '/images/services/bees.jpg', 
    href: '/services/beekeeping-basics',
    mainImageUrl: '/images/services/details/bees-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Hive setup and management', 'Safety and Equipment', 'Honey extraction process'],
    faqs: [
      { id: 'f1', question: 'Is equipment provided?', answer: loremAnswer },
    ]
  },
];

// --- 10 MOCK PRODUCTS ---
export const mockProducts: Service[] = [
  {
    id: 'p1',
    slug: 'bananas',
    type: 'product',
    category: 'Tropical Fruits',
    title: 'Organic Bananas',
    description: 'Sweet, creamy, and organically grown without synthetic pesticides.',
    imageUrl: '/images/products/bananas.jpg', 
    href: '/products/bananas',
    mainImageUrl: '/images/products/details/bananas-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Rich in Potassium', 'Grown Sustainably', 'Perfect for Smoothies'],
    faqs: [
      { id: 'f1', question: 'How do you ship them?', answer: loremAnswer },
    ]
  },
  {
    id: 'p2',
    slug: 'oranges',
    type: 'product',
    category: 'Tropical Fruits',
    title: 'Juicy Oranges',
    description: 'Navel and Valencia oranges, picked fresh for the best juice and flavor.',
    imageUrl: '/images/products/oranges.jpg', 
    href: '/products/oranges',
    mainImageUrl: '/images/products/details/oranges-main.jpg',
    longDescription: loremDesc,
    workPoints: ['High in Vitamin C', 'Seedless Varieties', 'Great for Juicing'],
    faqs: [
      { id: 'f1', question: 'When are they in season?', answer: loremAnswer },
    ]
  },
  {
    id: 'p3',
    slug: 'watermelon',
    type: 'product',
    category: 'Tropical Fruits',
    title: 'Seedless Watermelon',
    description: 'The perfect summer treat. Crisp, sweet, and seedless for easy eating.',
    imageUrl: '/images/products/watermelon.jpg', 
    href: '/products/watermelon',
    mainImageUrl: '/images/products/details/watermelon-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Harvested in Summer', 'High Water Content', 'Family Size'],
    faqs: [
      { id: 'f1', question: 'How do I pick a good one?', answer: loremAnswer },
    ]
  },
  {
    id: 'p4',
    slug: 'lettuce',
    type: 'product',
    category: 'Veggies',
    title: 'Crisp Lettuce',
    description: 'A mix of Romaine, Butter, and Iceberg lettuce, harvested daily.',
    imageUrl: '/images/products/lettuce.jpg', 
    href: '/products/lettuce',
    mainImageUrl: '/images/products/details/lettuce-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Hydroponic and Soil-Grown', 'Washed and Ready', 'Perfect for Salads'],
    faqs: [
      { id: 'f1', question: 'How long does it last?', answer: loremAnswer },
    ]
  },
  {
    id: 'p5',
    slug: 'cabbage',
    type: 'product',
    category: 'Veggies',
    title: 'Green Cabbage',
    description: 'Firm, fresh heads of green cabbage, ideal for slaws or fermenting.',
    imageUrl: '/images/products/cabbage.jpg', 
    href: '/products/cabbage',
    mainImageUrl: '/images/products/details/cabbage-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Rich in Fiber', 'Great for Sauerkraut', 'Stores for Weeks'],
    faqs: [
      { id: 'f1', question: 'Do you also have red cabbage?', answer: loremAnswer },
    ]
  },
  {
    id: 'p6',
    slug: 'cucumber',
    type: 'product',
    category: 'Veggies',
    title: 'Cucumbers',
    description: 'Cool, crisp, and refreshing. Perfect for salads or snacking.',
    imageUrl: '/images/products/cucumber.jpg', 
    href: '/products/cucumber',
    mainImageUrl: '/images/products/details/cucumber-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Burpless Variety', 'Thin Skinned', 'Harvested Daily'],
    faqs: [
      { id: 'f1', question: 'Are these good for pickling?', answer: loremAnswer },
    ]
  },
  {
    id: 'p7',
    slug: 'carrots',
    type: 'product',
    category: 'Veggies',
    title: 'Sweet Carrots',
    description: 'Bright orange and full of flavor. Our carrots are sweet and crunchy.',
    imageUrl: '/images/products/carrots.jpg', 
    href: '/products/carrots',
    mainImageUrl: '/images/products/details/carrots-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Rich in Vitamin A', 'Sold in Bunches with Tops', 'Multiple Colors Available'],
    faqs: [
      { id: 'f1', question: 'Why do they taste so sweet?', answer: loremAnswer },
    ]
  },
  {
    id: 'p8',
    slug: 'strawberries',
    type: 'product',
    category: 'Fruits',
    title: 'Strawberries',
    description: 'Juicy, red strawberries picked fresh from our fields. A seasonal favorite.',
    imageUrl: '/images/products/strawberries.jpg', 
    href: '/products/strawberries',
    mainImageUrl: '/images/products/details/strawberries-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Hand-Picked Daily', 'No Pesticides', 'Available May-July'],
    faqs: [
      { id: 'f1', question: 'Can I freeze them?', answer: loremAnswer },
    ]
  },
  {
    id: 'p9',
    slug: 'bell-peppers',
    type: 'product',
    category: 'Veggies',
    title: 'Bell Peppers',
    description: 'A colorful mix of red, yellow, and green bell peppers. Sweet and crunchy.',
    imageUrl: '/images/products/peppers.jpg', 
    href: '/products/bell-peppers',
    mainImageUrl: '/images/products/details/peppers-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Colorful Variety Pack', 'High in Vitamin C', 'Great for Sautéing'],
    faqs: [
      { id: 'f1', question: 'Are your red peppers sweet?', answer: loremAnswer },
    ]
  },
  {
    id: 'p10',
    slug: 'zucchini',
    type: 'product',
    category: 'Veggies',
    title: 'Organic Zucchini',
    description: 'Tender and versatile, our organic zucchini is a must-have for summer grilling.',
    imageUrl: '/images/products/zucchini.jpg', 
    href: '/products/zucchini',
    mainImageUrl: '/images/products/details/zucchini-main.jpg',
    longDescription: loremDesc,
    workPoints: ['Tender Skin', 'Harvested Young', 'Perfect for Grilling'],
    faqs: [
      { id: 'f1', question: 'Do you have yellow squash?', answer: loremAnswer },
    ]
  },
];

// Combine both lists into one export
export const servicesAndProducts: Service[] = [...mockServices, ...mockProducts];