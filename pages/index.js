import Content from "../components/Content";
import { api } from "../services/api";
import axios from "axios";
import { getBrands, getTags, getTypes } from "../utils/functions";
const Home = ({ products, companies, tags, types, brands }) => {
  return (
    <Content
      products={products}
      companies={companies}
      tags={tags}
      types={types}
      brands={brands}
    />
  );
};

export const getServerSideProps = async () => {
  // Get Products
  const products = (await axios(api.getAllProducts())).data;
  // Get Companies
  const companies = (await axios(api.getCompanies())).data;
  // Get Tags
  const tags = getTags(products);
  // Get Types
  const types = getTypes(products);
  // Get Brands
  const brands = getBrands(products, companies);
  // Return
  return {
    props: { products: products.slice(0, 16), companies, tags, types, brands },
  };
};

export default Home;
