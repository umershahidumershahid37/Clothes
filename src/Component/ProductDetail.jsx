import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Check } from 'lucide-react';
import Navbar from './Navbar';

const products = [
  {
    name: 'Olive Green Shirt',
    price: 'Rs. 2,490',
    image: '/pic.webp',
    category: 'Men’s Shirt',
    color: 'Olive Green',
    material: 'Premium Cotton Blend',
    sku: 'SC-101',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A soft, stylish olive green shirt perfect for casual and smart summer looks. Lightweight fabric keeps you comfortable all day while the tailored fit gives a modern silhouette.',
    details: [
      'Regular fit with soft collar',
      'Breathable cotton fabric',
      'Machine washable',
      'Perfect for summer styling',
    ],
  },
  {
    name: 'Denim Jacket',
    price: 'Rs. 3,290',
    image: '/pic1.jpg',
    category: 'Men’s Outerwear',
    color: 'Dark Denim',
    material: '100% Cotton Denim',
    sku: 'SC-102',
    sizes: ['M', 'L', 'XL'],
    description: 'A classic denim jacket with durable stitching, ideal for layering over tees. Designed for everyday wear with a structured fit and timeless finish.',
    details: [
      'Full button closure',
      'Dual chest pockets',
      'Classic collar',
      'Vintage wash details',
    ],
  },
  {
    name: 'Hoddie Sweatshirt',
    price: 'Rs. 2,590',
    image: '/pic2.webp',
    category: 'Men’s Sweatshirt',
    color: 'Charcoal',
    material: 'Soft Fleece',
    sku: 'SC-103',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A comfortable hoodie sweatshirt made for everyday wear and relaxed style. Soft fleece interior offers extra warmth and comfort.',
    details: [
      'Adjustable drawstring hood',
      'Kangaroo pocket',
      'Ribbed cuffs and hem',
      'Relaxed fit for easy movement',
    ],
  },
  {
    name: 'Check Shirt',
    price: 'Rs. 2,190',
    image: '/pic3.jpg',
    category: 'Men’s Shirt',
    color: 'Blue Check',
    material: 'Premium Cotton',
    sku: 'SC-104',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'A sharp check shirt with a modern fit and bold pattern for standout style. Ideal for dressing up or wearing casually.',
    details: [
      'Button down front',
      'Chest pocket detail',
      'Soft breathable fabric',
      'Tailored fit with room to move',
    ],
  },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products[Number(id)];
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FAF9F6] px-4 sm:px-6 py-16 flex items-center justify-center">
          <div className="mx-auto max-w-md w-full rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-xl">
            <h1 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-900">Product Not Found</h1>
            <p className="mt-2 text-sm text-neutral-500">The product you are looking for does not exist or has been removed.</p>
            <Link
              to="/"
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#b98a55]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF9F6] pb-16 pt-8 md:pt-12">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            
            {/* Product Image Section */}
            <div className="sticky top-28 rounded-3xl bg-white p-4 sm:p-6 shadow-sm border border-neutral-200/80">
              <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-inner h-[350px] sm:h-[480px] lg:h-[540px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Product Info & Actions */}
            <div className="space-y-6 rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
              
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-neutral-100 pb-5">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#b98a55]">
                    STITCH<span className="text-neutral-900">LAB</span> / {product.category}
                  </span>
                  <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-neutral-900">{product.name}</h1>
                </div>
                <div className="inline-flex items-center rounded-xl bg-neutral-100 px-3.5 py-1.5 text-xs font-bold text-neutral-700 w-fit">
                  SKU: {product.sku}
                </div>
              </div>

              {/* Price & Short Desc */}
              <div>
                <p className="text-3xl font-extrabold text-[#b98a55]">{product.price}</p>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600">
                  {product.description}
                </p>
              </div>

              {/* Size Selector & Attributes Grid */}
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                
                {/* Size Selection */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">Select Size</h2>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`h-10 w-10 rounded-xl border text-xs font-bold transition-all flex items-center justify-center ${
                          selectedSize === size
                            ? 'border-neutral-900 bg-neutral-900 text-white shadow-md'
                            : 'border-neutral-300 bg-white text-neutral-700 hover:border-[#b98a55]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Attributes Info */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-3">Specifications</h2>
                  <div className="space-y-2 text-xs sm:text-sm text-neutral-600">
                    <p><strong className="text-neutral-900">Color:</strong> {product.color}</p>
                    <p><strong className="text-neutral-900">Material:</strong> {product.material}</p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <button className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 hover:bg-[#b98a55] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md hover:shadow-xl">
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
                <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-neutral-300 bg-white hover:border-neutral-900 px-6 py-4 text-xs font-bold uppercase tracking-wider text-neutral-800 transition-all">
                  <Heart size={18} className="text-[#b98a55]" />
                  Wishlist
                </button>
              </div>

              {/* Detailed Specs List */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-5">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900 mb-3">Product Highlights</h3>
                <ul className="grid gap-2.5 text-xs sm:text-sm text-neutral-600">
                  {product.details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#b98a55]/10 text-[#b98a55]">
                        <Check size={12} />
                      </span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-neutral-100 text-center">
                <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <Truck size={20} className="text-[#b98a55] mb-1.5" />
                  <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-tight">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <RotateCcw size={20} className="text-[#b98a55] mb-1.5" />
                  <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-tight">Easy Returns</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <ShieldCheck size={20} className="text-[#b98a55] mb-1.5" />
                  <span className="text-[11px] font-bold text-neutral-800 uppercase tracking-tight">Secure Checkout</span>
                </div>
              </div>

            </div>

          </div>

          {/* Why Customers Love It Section */}
          <div className="mt-12 rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
            <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-neutral-900 text-center mb-8">
              Why Choose STITCH<span className="text-[#b98a55]">LAB</span>
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 text-center">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900 mb-2">Premium Quality</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Soft, durable fabrics engineered to last through everyday wear and tear.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 text-center">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900 mb-2">Tailored Fit</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Sharp cuts and exact proportions designed for a polished, modern look.</p>
              </div>
              <div className="rounded-2xl border border-neutral-200/80 bg-neutral-50/50 p-6 text-center">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900 mb-2">Easy Maintenance</h3>
                <p className="text-xs sm:text-sm text-neutral-600">Machine washable fabrics that retain shape and color wash after wash.</p>
              </div>
            </div>
          </div>

        </section>
      </main>
    </>
  );
};

export default ProductDetail;