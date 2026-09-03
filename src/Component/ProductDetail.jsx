import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, ShieldCheck, Truck, RotateCcw, Check, ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';

const ProductDetail = () => {
  const location = useLocation();
  const product = location.state?.product;
  const backRoute = location.state?.from || '/';
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const parsePrice = (value) => Number(String(value ?? '0').replace(/[^\d.]/g, '')) || 0;
  const currentPrice = parsePrice(product?.price);
  const originalPrice = parsePrice(product?.originalPrice || product?.price);
  const discountAmount = Math.max(originalPrice - currentPrice, 0);
  const discountPercent = originalPrice > currentPrice ? Math.round((discountAmount / originalPrice) * 100) : 0;

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-[#FAF9F6] px-4 sm:px-6 py-16 flex items-center justify-center">
          <div className="mx-auto max-w-md w-full rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-xl">
            <h1 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-900">Product Not Found</h1>
            <p className="mt-2 text-sm text-neutral-500">The product you are looking for does not exist or has been removed.</p>
            <Link
              to={backRoute}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#C5A059]"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // Helper function to generate SKU from product name
  const generateSKU = () => {
    if (product.id) {
      return `SKU-${product.id.split('-')[1]?.toUpperCase() || Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    }
    return 'SKU-00000';
  };

  // Get available sizes
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <>
      <Navbar />
      <main className="bg-[#FAF9F6] pb-16 pt-8 md:pt-12">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <Link 
            to={backRoute} 
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#C5A059] hover:text-neutral-900 mb-6 transition"
          >
            <ArrowLeft size={14} />
            Back to Products
          </Link>

          <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
            
            {/* Product Image Section */}
            <div className="sticky top-28 rounded-3xl bg-white p-4 sm:p-6 shadow-sm border border-neutral-200/80">
              <div className="overflow-hidden rounded-2xl bg-neutral-100 shadow-inner h-[350px] sm:h-[480px] lg:h-[540px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Image indicators */}
              <div className="flex gap-2 mt-4">
                <div className="h-16 w-16 rounded-lg overflow-hidden cursor-pointer border-2 border-[#C5A059]">
                  <img src={product.image} alt="Main" className="h-full w-full object-cover" />
                </div>
                <div className="h-16 w-16 rounded-lg overflow-hidden cursor-pointer border-2 border-neutral-200 hover:border-[#C5A059]">
                  <img src={product.image} alt="Alt 1" className="h-full w-full object-cover" />
                </div>
                <div className="h-16 w-16 rounded-lg overflow-hidden cursor-pointer border-2 border-neutral-200 hover:border-[#C5A059]">
                  <img src={product.image} alt="Alt 2" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>

            {/* Product Info & Actions */}
            <div className="space-y-6 rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
              
              {/* Product Header */}
              <div className="flex flex-col gap-2 border-b border-neutral-100 pb-5">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#C5A059]">
                  {product.category || 'Product'}
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900">{product.name}</h1>
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#C5A059]">★</span>
                    ))}
                  </div>
                  <span className="text-xs text-neutral-600">(156 reviews)</span>
                </div>
              </div>

              {/* Price & Short Desc */}
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <p className="text-4xl font-extrabold text-[#C5A059]">{product.price}</p>
                  {product.originalPrice && (
                    <>
                      <p className="text-lg text-neutral-500 line-through">{product.originalPrice}</p>
                      {discountPercent > 0 && (
                        <span className="rounded-full bg-[#C5A059]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#C5A059]">
                          Save {discountPercent}%
                        </span>
                      )}
                    </>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  {product.description}
                </p>
              </div>

              {/* Specifications Grid */}
              <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 pt-2">
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">
                  <p className="text-[11px] text-neutral-600 font-semibold">MATERIAL</p>
                  <p className="text-xs font-bold text-neutral-900 mt-1">{product.material || 'Premium'}</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">
                  <p className="text-[11px] text-neutral-600 font-semibold">FIT</p>
                  <p className="text-xs font-bold text-neutral-900 mt-1">{product.fit || 'Regular'}</p>
                </div>
                <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3 text-center">
                  <p className="text-[11px] text-neutral-600 font-semibold">SKU</p>
                  <p className="text-xs font-bold text-neutral-900 mt-1">{generateSKU()}</p>
                </div>
              </div>

              {/* Size Selector & Quantity */}
              <div className="space-y-4 pt-2">
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">Select Size</h2>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`h-10 w-10 rounded-lg border text-xs font-bold transition-all flex items-center justify-center ${
                          selectedSize === size
                            ? 'border-[#C5A059] bg-[#C5A059] text-white shadow-md'
                            : 'border-neutral-300 bg-white text-neutral-700 hover:border-[#C5A059]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity Selector */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50/50 p-4">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 mb-3">Quantity</h2>
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-10 w-10 rounded-lg border border-neutral-300 hover:border-[#C5A059] flex items-center justify-center text-lg font-bold"
                    >
                      −
                    </button>
                    <span className="text-lg font-bold min-w-8 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="h-10 w-10 rounded-lg border border-neutral-300 hover:border-[#C5A059] flex items-center justify-center text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 sm:flex-row pt-2">
                <button
                  onClick={() => addItem(product, selectedSize, quantity)}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#C5A059] hover:bg-neutral-900 px-6 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-md hover:shadow-xl"
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </button>
                <button onClick={() => toggleWishlist(product)} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#C5A059] bg-white hover:bg-[#C5A059] hover:text-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#C5A059] transition-all">
                  <Heart size={18} className={isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''} />
                  Wishlist
                </button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-neutral-100 text-center">
                <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <Truck size={20} className="text-[#C5A059] mb-1.5" />
                  <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-tight">Fast Delivery</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <RotateCcw size={20} className="text-[#C5A059] mb-1.5" />
                  <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-tight">Easy Returns</span>
                </div>
                <div className="flex flex-col items-center p-3 rounded-xl bg-neutral-50 border border-neutral-100">
                  <ShieldCheck size={20} className="text-[#C5A059] mb-1.5" />
                  <span className="text-[10px] font-bold text-neutral-800 uppercase tracking-tight">Secure Payment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-12 rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-neutral-200/80">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Product Description */}
              <div>
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-neutral-900 mb-4">
                  About This Product
                </h3>
                <p className="text-sm text-neutral-700 leading-relaxed">
                  {product.description || 'Crafted with premium materials and attention to detail, this product offers exceptional quality and comfort for everyday wear.'}
                </p>
                
                {/* Key Features */}
                <h4 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900 mt-6 mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059] mt-0.5">
                      <Check size={12} />
                    </span>
                    Premium quality materials
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059] mt-0.5">
                      <Check size={12} />
                    </span>
                    Comfortable fit
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059] mt-0.5">
                      <Check size={12} />
                    </span>
                    Easy to maintain
                  </li>
                  <li className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059] mt-0.5">
                      <Check size={12} />
                    </span>
                    Long-lasting durability
                  </li>
                </ul>
              </div>

              {/* Care & Specifications */}
              <div>
                <h3 className="text-lg font-extrabold uppercase tracking-tight text-neutral-900 mb-4">
                  Care Instructions
                </h3>
                <div className="space-y-3 text-sm text-neutral-700">
                  <p><strong className="text-neutral-900">Washing:</strong> Machine wash in cold water with similar colors</p>
                  <p><strong className="text-neutral-900">Drying:</strong> Tumble dry on low heat or air dry for best results</p>
                  <p><strong className="text-neutral-900">Ironing:</strong> Iron on medium heat if needed</p>
                  <p><strong className="text-neutral-900">Storage:</strong> Store in a cool, dry place away from direct sunlight</p>
                </div>

                <h4 className="text-sm font-extrabold uppercase tracking-wider text-neutral-900 mt-6 mb-3">
                  Size Guide
                </h4>
                <div className="border border-neutral-200 rounded-lg overflow-hidden text-xs">
                  <div className="grid grid-cols-4 gap-0 bg-neutral-100">
                    <div className="p-2 font-bold text-center">XS</div>
                    <div className="p-2 font-bold text-center">S-M</div>
                    <div className="p-2 font-bold text-center">L-XL</div>
                    <div className="p-2 font-bold text-center">XXL</div>
                  </div>
                  <div className="grid grid-cols-4 gap-0">
                    <div className="p-2 text-center">32-34</div>
                    <div className="p-2 text-center">36-38</div>
                    <div className="p-2 text-center">40-42</div>
                    <div className="p-2 text-center">44+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Section */}
          <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#C5A059]/10 to-neutral-100/50 p-6 sm:p-8 border border-[#C5A059]/20">
            <h2 className="text-2xl font-extrabold uppercase tracking-tight text-neutral-900 text-center mb-8">
              Why Customers Love This Product
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-[#C5A059] mb-2">98%</div>
                <p className="text-sm font-semibold text-neutral-900">Customer Satisfaction</p>
                <p className="text-xs text-neutral-600 mt-1">Based on verified purchases</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-[#C5A059] mb-2">12k+</div>
                <p className="text-sm font-semibold text-neutral-900">Happy Customers</p>
                <p className="text-xs text-neutral-600 mt-1">Trusted worldwide</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-[#C5A059] mb-2">2-3 Days</div>
                <p className="text-sm font-semibold text-neutral-900">Fast Shipping</p>
                <p className="text-xs text-neutral-600 mt-1">Quick delivery to your door</p>
              </div>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
