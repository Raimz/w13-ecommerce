import React from 'react'
import Head from './head'
import Header from './header'

const Basket = () => {
  return (
    <div>
      <Head title="Basket" />
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-blue-600 text-white p-4"> Hello World Basket </div>
      </div>
    </div>
  )
}

Basket.propTypes = {}

export default Basket
