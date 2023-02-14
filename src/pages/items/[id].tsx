import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";

import { getAllProducts, getProductById } from "../../api/productsApi";
import { IDetailItem } from "@/interfaces/item.interface";
import { convertToCurrency } from "@/helpers/convertions";
import { Layout } from "@/components/layouts";
import Skeleton from "react-loading-skeleton";

interface Props {
  product: IDetailItem;
}

const ProductDetailPage: NextPage<Props> = ({ product }) => {
  
  return (
    <Layout
      title={`${product.item.title} | MercadoLibre`}
      pageDescription={product.item.description ? product.item.description?.substring(0, 250) : 'Encuentra miles de opciones en productos con Mercadolibre' }
      imageFullUrl={product.item.picture}
    >
      <div className="product">
        <div className="product--slider">
          {product.item ? 
          <Image
            src={product.item.picture}
            alt={product.item.title}
            width={680}
            height={690}
          />
          : <Skeleton style={{height: 690, width:680}}  />
          }
        </div>
        <div className="product--info">
          <h2>{`${product.item.condition} - ${product.item.sold_quantity} vendidos`}</h2>
          <h1>{product.item.title}</h1>
          <div className="product--price">{`$ ${convertToCurrency(
            product.item.price.amount
          )}`}</div>
          <button className="btn btn--primary">Comprar</button>
        </div>
        <div className="product--description">
          <h2>Descripción del producto</h2>
          <p>{product.item.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const productIds = await getAllProducts();

  const { items } = productIds;

  return {
    paths: items?.map(({ id }: { id: string }) => ({
      params: {
        id,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id = "" } = params as { id: string };
  const product = await getProductById(id);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductDetailPage;
