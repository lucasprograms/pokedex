import React from 'react'
import ItemDetail from './item_detail'

const ItemList = ({ itemIds, items }) => {
  return (
    <div>
      <li className="list-group-item">
          <a className="dropdown-toggle" data-toggle="collapse" href="#itemsList" aria-controls="itemsList">Items:</a>
        </li>
        <div className="collapse" id="itemsList">
          {itemIds ? itemIds.map((itemId, idx) => (
            <ItemDetail key={idx} item={items[itemId]} />
          )) : ''}
        </div>
    </div>
  )
}

export default ItemList
