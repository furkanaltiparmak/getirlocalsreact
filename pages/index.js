import Content from "../components/Content";
import { api } from "../services/api";
import axios from "axios";
import { getBrands, getTags, getTypes } from "../utils/functions";
const Home = ({ products, tags, types, brands }) => {
  return (
    <Content products={products} tags={tags} types={types} brands={brands} />
  );
};

export const getServerSideProps = async () => {
  // Get Products
  var products = {};
  const productsResponse = (await axios(api.getAllProducts())).data;

  products = {
    total_count: productsResponse.length,
    products: productsResponse.slice(0, 16),
    pages: Math.ceil(productsResponse.length / 16),
  };
  // Get Companies
  const companies = (await axios(api.getCompanies())).data;
  // Get Tags
  const tags = getTags(productsResponse);
  // Get Types
  const types = getTypes(productsResponse);
  // Get Brands
  const brands = getBrands(productsResponse, companies);
  // Return
  return {
    props: { products, tags, types, brands },
  };
};

export default Home;
