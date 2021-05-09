import React from 'react'
import { useSelector } from 'react-redux'

const Product = (props) => {
  const currency = useSelector((store) => store.products.currency)
  const currentRate = useSelector((store) => store.products.rates)

  return (
    <div className="card bg-gray-100 text-black font-bold rounded-lg border shadow-lg p-2">
      <img alt="img" src={props.good.image} className="card__image"/>
      <div className="card__price">{(props.good.price * currentRate[currency]).toFixed(2)}</div>
      <div className="currency">{currency}</div>
      <div className="card__title">{props.good.title}</div>
      <div className="card__product-amount">amount</div>
      <button className="border p-2"
        type="button"
      >
        add
      </button>
    </div>
  )
}

Product.propTypes = {}

export default React.memo(Product)
