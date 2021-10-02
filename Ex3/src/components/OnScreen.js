import React from 'react';
import './WholePageSettings.css';

import SeenStuff from './Main';

export default function SearchView(value) {

  return (
    <div>
      <div className="WholePage">
      {
        value.Product.map(Product => <SeenStuff key={Product.id} {...Product} />)
      }
      </div>
    </div>
  )
}
