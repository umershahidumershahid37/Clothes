import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useCart } from './CartContext';

const formatPrice = (value) => `Rs. ${Number(value || 0).toLocaleString('en-PK')}`;

const CartPage = () => {
  const { items, updateQuantity, removeItem, subtotal, itemCount } = useCart();

  const shipping = items.length ? 0 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF9F6] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A059]">Your Bag</p>
              <h1 className="mt-2 text-3xl font-black uppercase tracking-tight text-neutral-900">Shopping Cart</h1>
            </div>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-neutral-700 transition hover:border-[#C5A059] hover:text-[#C5A059]"
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>
          </div>

          {items.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-neutral-300 bg-white p-10 text-center shadow-sm">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C5A059]/10 text-[#C5A059]">
                <ShoppingBag size={28} />
              </div>
              <h2 className="mt-6 text-2xl font-black uppercase tracking-tight text-neutral-900">Your cart is empty</h2>
              <p className="mt-2 text-sm text-neutral-600">Add products from the categories to build your order.</p>
              <Link
                to="/men"
                className="mt-6 inline-flex rounded-xl bg-neutral-900 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#C5A059]"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col gap-4 rounded-3xl border border-neutral-200 bg-white p-4 shadow-sm sm:flex-row sm:p-5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-32 w-full rounded-2xl object-cover sm:h-28 sm:w-24"
                    />

                    <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div className="space-y-2">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">{item.category}</p>
                          <h3 className="text-lg font-black text-neutral-900">{item.name}</h3>
                        </div>
                        <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600">
                          <span className="rounded-full border border-neutral-200 px-2 py-1 font-semibold">Size: {item.size}</span>
                          <span className="rounded-full border border-neutral-200 px-2 py-1 font-semibold">Unit: {item.priceLabel || formatPrice(item.price)}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                        <div className="flex items-center gap-2 rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#C5A059] hover:text-white"
                            aria-label={`Decrease quantity for ${item.name}`}
                          >
                            <Minus size={14} />
                          </button>
                          <span className="min-w-[2rem] text-center text-sm font-bold text-neutral-900">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#C5A059] hover:text-white"
                            aria-label={`Increase quantity for ${item.name}`}
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <div className="flex items-center gap-3">
                          <p className="text-lg font-black text-[#C5A059]">
                            {formatPrice(Number(item.price || 0) * Number(item.quantity || 0))}
                          </p>
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-red-200 bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
                            aria-label={`Remove ${item.name}`}
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <aside className="rounded-3xl border border-neutral-200 bg-white p-5 shadow-sm">
                <h2 className="text-lg font-black uppercase tracking-tight text-neutral-900">Order Summary</h2>
                <div className="mt-5 space-y-3 text-sm text-neutral-700">
                  <div className="flex justify-between">
                    <span>Items</span>
                    <span>{itemCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : formatPrice(shipping)}</span>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-neutral-100 p-4">
                  <div className="flex items-center justify-between text-base font-black text-neutral-900">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-6 w-full rounded-xl bg-neutral-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:bg-[#C5A059]"
                >
                  Proceed to Checkout
                </button>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
