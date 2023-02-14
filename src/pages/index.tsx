import { useContext, useEffect, useState } from "react";

import Skeleton from 'react-loading-skeleton'

import { Layout } from "@/components/layouts";
import { Item } from "@/interfaces/item.interface";
import { ProductsList } from "../components/products/ProductsList";
import { getAllProducts } from "../api/productsApi";
import { CategoryContext } from "@/context/categories";

export default function HomePage() {
  const [products, setProducts] = useState<Item[]>([]);
  const { resetCategories } = useContext(CategoryContext)

  const initialProducts = async () => {
    const { items } = await getAllProducts();
    if (items) {

        setProducts(items);
      
    }
  };

  useEffect(() => {
    initialProducts();
    resetCategories()
  }, []);

  return (
    <Layout
      title="Mercado Libre | Home"
      pageDescription="Compre productos con Envío Gratis en el día en Mercado Libre Colombia. Encuentre miles de marcas y productos a precios increíbles."
    >

      {products.length > 0 ? <ProductsList items={products} /> : <Skeleton style={{height: 150, marginBottom:15}} count={4} />}{" "}
    </Layout>
  );
}
