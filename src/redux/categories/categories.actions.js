import { CategoriesActionTypes } from './categories.types';

export const getCategories = (payload) => ({
    type: CategoriesActionTypes.GET_CATEGORIES,
    payload: payload
});