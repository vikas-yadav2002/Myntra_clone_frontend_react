import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BagAction } from '../store/BagSlice';
import { IoIosAdd } from "react-icons/io";
import { MdDeleteSweep } from "react-icons/md";

function Items({item}) {
  const dispatch =useDispatch();
  const bagItems = useSelector(store=>store.Bag);
  const itemFound = bagItems.indexOf(item.id) >= 0 ;

  const handleAddButton= ()=>{
    dispatch(BagAction.addToBag(item.id))
  }
  const handleRemove = ()=>{
    dispatch(BagAction.removeFromBag(item.id))
  }
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemFound ?    <button type="button" className="btn-add-bag btn btn-danger" onClick={handleRemove}><MdDeleteSweep /> Remove</button> :<button className="btn-add-bag" onClick={handleAddButton}><IoIosAdd />Add to Bag</button> }
      
    
      
    </div>
    
  )
}

export default Items
