
import { Item } from '@/interfaces/item.interface'
import React from 'react'
import { ProductItem } from './ProductItem'

interface Props {
  items: Item[]
}

export const ProductsList:React.FC<Props> = ({items}) => {

  return (
    <div className='products--list'>
         {items?.map((item, index) => <ProductItem key={index} item={item} /> )} 
    </div>
  )
}
