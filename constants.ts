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
    name: 'The Heritage Carryall',
    price: 145,
    category: 'Tote',
    image: 'https://drive.google.com/thumbnail?id=1emEO8TvGLoVLzwLqrggv2sduaiBpcUOn&sz=w2000',
    description: 'A spacious, everyday tote featuring traditional patterns and reinforced organic handles.'
  },
  {
    id: 2,
    name: 'Rustic Market Shopper',
    price: 95,
    category: 'Shopper',
    image: 'https://drive.google.com/thumbnail?id=1SGvvizfnKYSK7Yl9M5Y473uMhfyTcrFo&sz=w2000',
    description: 'Perfect for the farmers market or beach, woven from durable, natural plant fibers.'
  },
  {
    id: 3,
    name: 'Bohemian Patchwork Sling',
    price: 110,
    category: 'Crossbody',
    image: 'https://drive.google.com/thumbnail?id=1uBRYICeAl8LXXdnojXZdGJwHlj4yLXnU&sz=w2000',
    description: 'A unique statement piece created from upcycled textile remnants.'
  },
  {
    id: 4,
    name: 'Artisan Bucket Bag',
    price: 135,
    category: 'Handbag',
    image: 'https://drive.google.com/thumbnail?id=1_CAJBNYFQCw_ejteo-QF8YA67G1n9fly&sz=w2000',
    description: 'Structured yet soft, this bag combines modern utility with timeless craftsmanship.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Elena R.',
    role: 'Eco-Activist',
    content: 'The craftsmanship is undeniable. Knowing my bag didn\'t harm the planet makes it even more beautiful.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 2,
    name: 'Marcus T.',
    role: 'Designer',
    content: 'Minimalist design meeting maximum sustainability. Ishara has set a new standard for modern accessories.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 3,
    name: 'Sarah L.',
    role: 'Frequent Traveler',
    content: 'I took the Weekender on a month-long trip. It held up perfectly and looked stylish in every city.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  }
];