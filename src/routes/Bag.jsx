import React from 'react'

import BagSummary from '../components/BagSummary'
import ItemSummary from '../components/ItemSummary';
import { useSelector } from 'react-redux';

function Bag() {
 const bagItem = useSelector(store=>store.Bag);
 const item = useSelector(store=>store.items);

 const finalItem = item.filter((item)=>{
  const itemFound = bagItem.indexOf(item.id);
  return itemFound >= 0 ;
 })

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map(item=><ItemSummary key={item.id} item={item}/>)}
          
        </div>
        <div className="bag-summary">
          <BagSummary/>
        </div>

      </div>
    </main>
  )
}

export default Bag;
