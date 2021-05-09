import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Head from './head'
import Header from './header'
import Product from './product'
import { getProductsFromServer, addRates } from '../redux/reducers/products'

const Main = () => {
  const dispatch = useDispatch()
  const listOfGoods = useSelector((store) => store.products.goods)

  useEffect(() => {
    dispatch(getProductsFromServer())
    dispatch(addRates())
  }, [])

  return (
    <div className="h-full">
      <Head title="Hello" />
      <Header />
      <div className="flex flex-wrap h-screen">
        {listOfGoods.map((good) => {
          return (<div key={good.id}>
            <Product good={good} />
          </div>)
        })}
      </div>
    </div>
  )
}

Main.propTypes = {}

export default React.memo(Main)
