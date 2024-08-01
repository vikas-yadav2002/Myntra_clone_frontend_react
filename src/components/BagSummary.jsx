import React from 'react'
import { useSelector } from 'react-redux';

function BagSummary() {
  const bagItem = useSelector(store=>store.Bag)
  const CONVENIENCE_FEES = 99;
  const item = useSelector(store=>store.items);

 const finalItem = item.filter((item)=>{
  const itemFound = bagItem.indexOf(item.id);
  return itemFound >= 0 ;
 })
 let totalItem = bagItem.length;
  let totalMRP = 0;
  let totalDiscount = 0;

 finalItem.forEach((bagItem) => {
  totalMRP += bagItem.original_price;
  totalDiscount += bagItem.original_price - bagItem.current_price;
});

let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
  return (
    <div>
       <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS  </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
    </div>
    <hr />
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
    </div>
  )
}

export default BagSummary
