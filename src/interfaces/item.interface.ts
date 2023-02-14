export interface IListItems {
    author:     Author;
    categories: string[];
    items:      Item[];
}

export interface IDetailItem {
    author: Author;
    item:   Item;
}

export interface Item {
    id:            string;
    title:         string;
    price:         Price;
    picture:       string;
    condition:     string;
    free_shipping: boolean;
    sold_quantity?: number;
    description?:   string;
}

export interface Price {
    currency: string;
    amount:   number;
    decimals?: number;
}

export interface Author {
    name:     string;
    lastname: string;
}
