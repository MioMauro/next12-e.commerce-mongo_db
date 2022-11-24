/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export default function ProductItem({ product, addToCartHandler }) {
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow object-cover h-64 w-full"
          />
        </div>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <div>
            <h2 className="text-lg">{product.name}</h2>
          </div>
        </Link>
        <p className="mb-2">{product.brand}</p>
        <p>${product.price}</p>
        <button onClick={() => addToCartHandler(product)}
          className="primary-button"
          type="button"
          >          
          Add to cart
        </button>
      </div>
    </div>
  );
}
