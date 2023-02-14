import { createContext } from 'react';

interface ContextProps {
    categories: string[];

    addCategories: (categories: string[]) => void;
    resetCategories: () => void

}


export const CategoryContext = createContext({} as ContextProps );