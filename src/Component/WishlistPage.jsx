import React from 'react';
import { Heart, ArrowLeft, Trash2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useWishlist } from './WishlistContext';

const WishlistPage = () => {
  const navigate = useNavigate();
  const { items, toggleWishlist } = useWishlist();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF9F6] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">Saved Styles</p>
              <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-neutral-900">My Wishlist</h1>
            </div>
            <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-neutral-700 transition hover:border-[#C5A059] hover:text-[#C5A059]">
              <ArrowLeft size={14} /> Continue Shopping
            </Link>
          </div>

          {items.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-neutral-300 bg-white p-10 text-center shadow-sm">
              <Heart className="mx-auto text-[#C5A059]" size={34} />
              <h2 className="mt-5 text-2xl font-black uppercase tracking-tight text-neutral-900">Your wishlist is empty</h2>
              <p className="mt-2 text-sm text-neutral-600">Tap the heart on a product to save it here.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {items.map((product) => (
                <article key={product.id} className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
                  <button type="button" onClick={() => navigate(`/product/${product.id}`, { state: { product, from: '/wishlist' } })} className="block w-full text-left">
                    <div className="aspect-[3/4] overflow-hidden bg-neutral-100">
                      <img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">{product.category || 'Product'}</p>
                      <h2 className="mt-1 font-bold text-neutral-900">{product.name}</h2>
                      <p className="mt-1 font-black text-[#C5A059]">{product.price}</p>
                    </div>
                  </button>
                  <div className="px-4 pb-4">
                    <button type="button" onClick={() => toggleWishlist(product)} className="flex w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-700 transition hover:border-red-300 hover:text-red-500">
                      <Trash2 size={15} /> Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default WishlistPage;
