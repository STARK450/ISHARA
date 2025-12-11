import { Product, Testimonial, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Collection', href: '#collection' },
  { label: 'Our Story', href: '#about' },
  { label: 'Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'The Signature Tote',
    price: 125,
    category: 'Tote',
    image: 'https://drive.google.com/thumbnail?id=1emEO8TvGLoVLzwLqrggv2sduaiBpcUOn&sz=w2000',
    description: 'Our classic silhouette, hand-stitched from robust organic fibers.'
  },
  {
    id: 2,
    name: 'Boho Charm Crossbody',
    price: 89,
    category: 'Crossbody',
    image: 'https://drive.google.com/thumbnail?id=1SGvvizfnKYSK7Yl9M5Y473uMhfyTcrFo&sz=w2000',
    description: 'Intricate weaving meets everyday practicality in this compact piece.'
  },
  {
    id: 3,
    name: 'Urban Eco Satchel',
    price: 185,
    category: 'Handbag',
    image: 'https://drive.google.com/thumbnail?id=1uBRYICeAl8LXXdnojXZdGJwHlj4yLXnU&sz=w2000',
    description: 'Structured elegance made from upcycled materials for the city dweller.'
  },
  {
    id: 4,
    name: 'The Weekend Wanderer',
    price: 210,
    category: 'Travel',
    image: 'https://drive.google.com/thumbnail?id=1_CAJBNYFQCw_ejteo-QF8YA67G1n9fly&sz=w2000',
    description: 'Spacious and durable, designed for your sustainable getaways.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Elena R.',
    role: 'Eco-Activist',
    content: 'The craftsmanship is undeniable. Knowing my bag didn\'t harm the planet makes it even more beautiful.',
    avatar: 'https://picsum.photos/seed/face1/100/100'
  },
  {
    id: 2,
    name: 'Marcus T.',
    role: 'Designer',
    content: 'Minimalist design meeting maximum sustainability. Ishara has set a new standard for modern accessories.',
    avatar: 'https://picsum.photos/seed/face2/100/100'
  },
  {
    id: 3,
    name: 'Sarah L.',
    role: 'Frequent Traveler',
    content: 'I took the Weekender on a month-long trip. It held up perfectly and looked stylish in every city.',
    avatar: 'https://picsum.photos/seed/face3/100/100'
  }
];