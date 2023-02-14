import { CategoryState } from ".";

type CategoryActionType = 
   | { type: '[add] - Categories', payload: string[] }
   | { type: '[reset] - Categories' }

export const categoryReducer = (state: CategoryState, action: CategoryActionType, ): CategoryState => {
 switch (action.type) {
    case '[add] - Categories':
        return {
            ...state,
            categories: action.payload
        }
    case '[reset] - Categories':
        return {
            ...state,
            categories: []
        }
 
    default:
        return state;
 }
}
