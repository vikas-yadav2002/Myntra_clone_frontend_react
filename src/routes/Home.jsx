import React, { useEffect } from 'react'
import Items from '../components/Items'
import { useDispatch, useSelector } from 'react-redux'
import { fetchingAction } from '../store/FetchingStatusSlice'


function Home() {
 const dispatch = useDispatch()

  const items = useSelector(store=>store.items)
//   const fetchData = useSelector(store => store.fetching);
// useEffect(() => {
//   dispatch(fetchingAction.startFetching());
//   dispatch(fetchingAction.markFetchDone());
// }, [dispatch]);



  return (
    <main>
      <div className="Items-container">
    {items.map(item=> <div key={item.id} className="item-container"><Items item={item}/>
           </div>)}
           </div>
     
       
    </main>
  )
}

export default Home;
