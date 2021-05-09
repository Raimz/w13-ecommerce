import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { history } from '../redux'
import { setCurrency, sortProducts } from '../redux/reducers/products'

const Header = () => {
  const dispatch = useDispatch()
  const [dir, setDir] = useState({
    'price': true,
    'title': true
  })

  const onClick = (e) => {
    dispatch(setCurrency(e.target.textContent))
  }

  const sortIt = (type) => {
    dispatch(sortProducts(type, dir[type] ? 'a-z' : 'z-a'))
    setDir({
      ...dir,
      [type]: !dir[type]
    })
  }

  return (
    <nav className="flex flex-col justify-center bg-blue-800 font-bold text-white h-20 w-screen select-none">
      <div>
        <Link to="/">
          <div id="brand-name" className="mt-2 px-4 py-2">
            Shop
          </div>
        </Link>
      </div>
      <div className="flex justify-between px-2">
        <div>
          <button type="button" className="border p-1" onClick={(e) => onClick(e)}>USD</button>
          <button type="button" className="border p-1" onClick={(e) => onClick(e)}>EUR</button>
          <button type="button" className="border p-1" onClick={(e) => onClick(e)}>CAD</button>
        </div>
        <div>
          <button type="button" id="sort-price" className="border p-1" onClick={() => sortIt('price')}>Sort by price</button>
          <button type="button" id="sort-name" className="border p-1" onClick={() => sortIt('title')}>Sort by name</button>
        </div>
        <div className="flex justify-between px-2">
          <button
            type="button"
            id="order-count"
            className="border p-1"
            onClick={() => history.push('/basket')}
          >
            Basket
          </button>
          <div>
            Summ
          </div>
        </div>
      </div>
    </nav>
  )
}

Header.propTypes = {}

export default React.memo(Header)
