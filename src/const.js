export const AppRoute = {
  Main: '/',
  Product: '/product/:id',
  Cart: '/cart',
}

export const AppLink = {
  ProductById: ((id) => `/product/${id}`),
}

export const Message = {
  EmptyCart: 'Your cart is empty',
}