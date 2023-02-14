import { ReactNode, useReducer } from 'react';
import { CategoryContext, categoryReducer } from './';

export interface CategoryState {
    categories: string[];
}

const UI_INITIAL_STATE: CategoryState = {
    categories: [],
}

interface Props{
    children: ReactNode
}


export const CategoryProvider: React.FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( categoryReducer , UI_INITIAL_STATE );

    const addCategories = (categories: string[]) => {
        dispatch({type: '[add] - Categories', payload: categories})
    }

    const resetCategories = () => {
        dispatch({type:'[reset] - Categories'})
    }

  return (
    <CategoryContext.Provider value={{
        ...state,

        addCategories,
        resetCategories
    }}>
        {children}
    </CategoryContext.Provider>
  )
}
