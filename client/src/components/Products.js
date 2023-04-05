import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {

  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try{
        const BASE_URL = 'https://ecommerce-eight-dusky.vercel.app/api'
        const response = await axios.get(
          cat 
            ? `${BASE_URL}/products/?category=${cat}`
            : `${BASE_URL}/products`,
        )
        setProducts(response.data)
      } catch(e){
        console.log(e.message)
      }
    }
    getProducts()
  }, [cat])

  useEffect(()=>{
    cat && 
      setFilteredProducts(
        products.filter((item) => 
          Object.entries(filters).every(([key, value]) => 
            item[key].includes(value)
        )
      )
    )
  }, [products, cat, filters])

  useEffect(() => {
    if((sort==='newest')){
      setFilteredProducts((prev)=>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      )
    } else if(sort === "asc"){
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => a.price - b.price)
      )
    } else{
      setFilteredProducts((prev) => 
        [...prev].sort((a, b) => b.price - a.price)
      )
    }
  }, [sort])

  return (
    <Container>
      { cat 
          ? filteredProducts.map((item) => <Product item={item} key={item._id} />)
          : products
          // Always display different random products (8)
            .sort(() => 0.5 - Math.random())
            .slice(0, 8)
            .map((item) => <Product item={item} key={item._id} />)
      } 
    </Container>
  );
};

export default Products;
