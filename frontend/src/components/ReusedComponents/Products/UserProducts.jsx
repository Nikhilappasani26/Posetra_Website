import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from '../ProductList/ProductList';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const server_Url = import.meta.env.VITE_API_SERVER_URL;

  useEffect(() => {
  const fetchProducts = async () => {
    console.time("Fetch Products Time");
    try {
      const response = await axios.get(`${server_Url}/api/v1/distributors/products`);
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      console.timeEnd("Fetch Products Time");
    }
  };
  fetchProducts();
}, []);



  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;
  console.log({products})
  return (
    <section className="products-container">
      <ProductList productList={products} hideHeader />
    </section>
  );
};

export default Products;
