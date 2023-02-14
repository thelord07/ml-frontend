import { useContext, useEffect, useState } from 'react';
import {  NextPage } from "next";
import { useRouter } from "next/router";

import Skeleton from "react-loading-skeleton";

import { Item } from "@/interfaces/item.interface";

import { Layout } from "@/components/layouts";
import { ProductsList } from "@/components/products/ProductsList";
import { getSearchProduct } from "../../api/productsApi";
import { CategoryContext } from '../../context/categories/CategoryContext';

const ItemsPage: NextPage = () => {
  const router = useRouter();
  const { addCategories } = useContext(CategoryContext)
  const { search = "" } = router.query as { search: string };

  const [products, setProducts] = useState<Item[]>()
  const [noFound, setNoFound] = useState<boolean>(false)

  const getSearchProducts = async () => {
    setNoFound(false);
    const { items, categories } = await getSearchProduct(search);
   
    if (items.length === 0) return setNoFound(true);

    setProducts(items)
    addCategories(categories)

  };

  useEffect(() => {
    getSearchProducts();
  }, [search]);

  return (
    <Layout
      title={"MercadoLibre | Buscador "}
      pageDescription={"Encuentra los mejores productos en Mercadolibre"}
    >
      {!noFound ?
      products ? <ProductsList items={products} /> : <Skeleton style={{height: 150, marginBottom:15}} count={4} />
      :<h1 style={{textAlign:'center'}}>No hay coincidencias con tu busqueda</h1>
      }
    </Layout>
  );
};

export default ItemsPage;
