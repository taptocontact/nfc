import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { products } from './Data'
import ProductCell from 'src/components/ProductCell'

const ProductsPage = () => {
  const [data, setData] = useState([])
  const [selectedFilter, setSelectedFilter] = useState('All')

  const filteredProducts =
    selectedFilter === 'All'
      ? products
      : products.filter((item) => item.type === selectedFilter)
  return (
<>
    <ProductCell />

</>
  )
}

export default ProductsPage
