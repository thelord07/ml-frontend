import Link from "next/link"
import { useContext } from 'react';
import { CategoryContext } from '../../context/categories/CategoryContext';

export const BreadCrumbs = () => {
  const { categories } = useContext(CategoryContext)

  return (
    <div className="bread--container">
        <Link href={'/'}>
          Home 
        </Link>
        {categories && categories.map((category)=>(
          <span style={{marginLeft:5}}>{'> ' }{category}</span>
        ))}
    </div>
  )
}
