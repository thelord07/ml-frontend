import { Item } from "@/interfaces/item.interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { convertToCurrency } from '../../helpers/convertions';
const shipment = require("@/assets/ic_shipping.png");


interface Props {
  item: Item;
}


export const ProductItem = ({ item }: Props) => {

const price = convertToCurrency(item?.price.amount)

  return (
    <Link href={`/items/${item?.id}`}>
      <div className="item">
        <div className="item--image">
          <Image
            src={item?.picture}
            alt={item?.title}
            width={180}
            height={180}
          />
        </div>
        <div className="item--description">
          <div className="item--description--head">
            <div className="item--description--price">
              <h3>{`$ ${price}`}</h3>
              {item?.free_shipping && (
                <Image
                  src={shipment}
                  alt="shipment"
                  loading="lazy"
                  width={20}
                />
              )}
            </div>

            <h2>
              {item?.title}
            </h2>
            <h4>Capital Federal</h4>
          </div>
        </div>
      </div>
    </Link>
  );
};
