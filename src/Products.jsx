import React, { useState } from 'react';

function Products(props) {
  return (
    <div className='products-aso'>
      <h1>All Products</h1>
      <p>{props.products.length} products</p>

      <article className='products'>
        {props.products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </article>
    </div>
  );
}

function ProductItem({ product }) {
  const [imgLoading, setImgLoading] = useState(true);

  return (
    <div className='product'>
      <div className='product-img' style={{ position: 'relative' }}>
        {imgLoading && (
          <div
            style={{
              width: '100%',
              height: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: '#e5e7eb',
              color: '#555'
            }}
          >
            <div class="skeleton-img"></div>
          </div>
        )}

        <img
          src={product.thumbnail}
          alt="Img"
          onLoad={() => setImgLoading(false)}
          style={{
            display: imgLoading ? 'none' : 'block',
            width: '100%'
          }}
        />
      </div>

      <div className='product-ty'>
        <h3>{product.title}</h3>
        <h5>{product.category}</h5>
        <h4>${product.price}</h4>

        <button className="top-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Products;
