import React from 'react';
import  './Main.css';

export default function SearchResult(value) {
  return (
    <div className="Product">
        <div>
          <div><img className="Images" src={`/images/${value.Image}`} /></div>
          <div className="ProductName">{ value.ProductName }</div>
          <div className="ShortInfo"> { value.Info1 }</div>
          <div className="ShortInfo"> { value.Info2 }</div>
          <div className="ShortInfo"> { value.Info3 }</div>
          <div className="ShortInfo"> { value.Info4 }</div>
          <div className="ShortInfo"> { value.Info5 }</div>
          <div className="Price">{ value.Price }€</div>
        </div>
    </div>
  )
}
