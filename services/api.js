export const api = {
  getAllProducts: () => `${process.env.NEXT_PUBLIC_API_KEY}products`,
  getProducts: (offset) =>
    `${process.env.NEXT_PUBLIC_API_KEY}products?_start=${offset}&_limit=16`,
  getCompanies: () => `${process.env.NEXT_PUBLIC_API_KEY}companies`,
};
