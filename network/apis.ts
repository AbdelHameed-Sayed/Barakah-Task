import {TCategoryProducts} from './types';

const GetCategoriesFunction = async () => {
  const response = await fetch(
    'https://fakestoreapi.com/products/categories',
  ).then(res => res.json());
  return response as string[];
};

const GetCategoryFunction = async (categoryName: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${categoryName}`,
  ).then(res => res.json());

  return response as TCategoryProducts;
};

export {GetCategoriesFunction, GetCategoryFunction};
