import styled from "styled-components";
import Product from "./Product";
import { useState, useEffect } from "react";
import axios from "axios"
import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Title = styled.h2``

const Span = styled.span`
  font-size: 18px;
`

const Products = ({cat, filters, sort, setAvailableColors, setAvailableSizes}) => {
  const location = useLocation()
  const param = location.pathname.split('/')[1]

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
    if(param === 'products'){
      const colors = new Set(products.flatMap((p) => p.color));
      setAvailableColors(Array.from(colors));

      const sizes = new Set(products.flatMap((p) => p.size));
      setAvailableSizes(Array.from(sizes));
    }
  }, [param, setAvailableColors, setAvailableSizes, products])


  useEffect(()=>{
    cat && 
      setFilteredProducts(
        products.filter((item) => 
          Object.entries(filters).every(([key, value]) => 
            Array.isArray(item[key])
              ? item[key].map(size => size.toLowerCase()).includes(value.toLowerCase())
              : item[key].includes(value.toLowerCase())
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
        {
          param === '' &&
          <Title>Some of our Products</Title>

        }

      <ProductContainer>

        {

          cat 
            ? (
                filteredProducts.length === 0 
                ?
                  <Span>No products found</Span> 
                :
                  filteredProducts.map((item) => <Product item={item} key={item._id} />)
              )
            : products
            // Always display different random products (8)
              .sort(() => 0.5 - Math.random())
              .slice(0, 8)
              .map((item) => <Product item={item} key={item._id} />)
          } 
        
      </ProductContainer>
    </Container>
  );
};

export default Products
