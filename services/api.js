export const api = {
  getAllProducts: () =>
    `${process.env.NEXT_PUBLIC_API_KEY}products?_sort=price&_order=asc`,
  getProducts: (query) => `${process.env.NEXT_PUBLIC_API_KEY}products${query}`,
  getCompanies: () => `${process.env.NEXT_PUBLIC_API_KEY}companies`,
};
