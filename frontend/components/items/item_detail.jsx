import React from 'react'

const ItemDetail = ({ item }) => {
  return (
    <div>
      <li className="list-group-item list-group-item-secondary">
        <a className="dropdown-toggle"
          data-toggle="collapse"
          href={`#item-${item.id}`}
          aria-controls={`item-${item.id}`}
        >
          {item.name} <img src={item.image_url} style={{ width: '35px', height: '35px' }}/>
        </a>
      </li>
      <div className="collapse" id={`item-${item.id}`}>
        <li className="list-group-item list-group-item-info">
          Happiness: {item.happiness}
        </li>
        <li className="list-group-item list-group-item-info">
          Price: {item.price}
        </li>
      </div>
    </div>
  )
}

export default ItemDetail
