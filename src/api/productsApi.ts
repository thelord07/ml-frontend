
import { IListItems, IDetailItem } from "@/interfaces/item.interface";
import mlApi from "./mlApi";

export const getAllProducts = async (): Promise<IListItems> => {
  const  { data }  = await mlApi.get("/products");
  return data;
};

export const getSearchProduct = async (
  params: string
): Promise<IListItems> => {
  try {
    const { data } = await mlApi.get(`/products?search=${params}`);
   return data;
  } catch (error) {
    return {
      items: [],
      categories:[],
      author:{
        name: 'Joys',
        lastname: 'Florez',
      }
    }
  }
  
};

export const getProductById = async (id: string): Promise<IDetailItem> => {
  const { data } = await mlApi.get(`/products/${id}`);
  return data;
};
