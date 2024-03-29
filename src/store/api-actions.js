import { loadCategories, loadCurrencies, loadProduct, loadProducts, redirectToRoute } from './action';

import { AppRoute } from '../const';
import { gql } from '@apollo/client';

export const fetchProductsAction = (currentCategory) =>
  async (dispatch, _getState, client) => {
    try {
      await client
      .query({
        query: gql`
        query GetCategory {
          category (
            input: {title: "${currentCategory}"}
          ) {
            products {
              id
              name
              gallery
              inStock
              brand
              prices { 
                currency {
                  label
                  symbol
                }
                amount
              }
              attributes {
                id
              }
            }
          }
        }
        `,
      })
      .then(result => dispatch(loadProducts(result.data.category.products)));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.ServerIsUnavailable));
    }
  };


export const fetchCategoriesAction = () =>
  async (dispatch, _getState, client) => {
    try {
      await client
      .query({
        query: gql`
          query GetCategories {
            categories {
              name
            }
          }
        `,
      })
      .then(result => dispatch(loadCategories(result.data.categories)));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.ServerIsUnavailable));
  }
};

export const fetchCurrenciesAction = () =>
  async (dispatch, _getState, client) => {
    try {
      await client
      .query({
        query: gql`
          query GetCurrencies {
            currencies {
              label
              symbol
            }
          }
        `,
      })
      .then(result => dispatch(loadCurrencies(result.data.currencies)));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.ServerIsUnavailable));
  }
};

export const fetchProductAction = (productId) =>
  async (dispatch, _getState, client) => {
    try {
      await client
      .query({
        query: gql`
          query GetProduct {
            product (
              id: "${productId}"
            ) {
              id
              name
              brand
              gallery
              attributes {
                id
                name
                type
                items {
                  displayValue
                }
              }
              description
              prices { 
                currency {
                  label
                  symbol
                }
                amount
              }
              inStock
              }
            }
          `,
      })
      .then(result => dispatch(loadProduct(result.data.product)));
    } catch (error) {
      dispatch(redirectToRoute(AppRoute.ServerIsUnavailable));
  }
};
