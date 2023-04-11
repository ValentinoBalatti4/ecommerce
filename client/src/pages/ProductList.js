import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";
import { useLocation } from "react-router-dom";


const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;


const ProductList = () => {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]

  const [availableColors, setAvailableColors] = useState([])
  const [availableSizes, setAvailableSizes] = useState([])

  const [filters, setFilter] = useState({})
  const [sort, setSort] = useState('newest')

  const handleFilters = (e) => {
    const value = e.target.value
    const key = e.target.name
    if(value === ""){
      const newFilters = {...filters}
      delete newFilters[key]
      setFilter(newFilters)
      e.target.selectedIndex = 0
    } else{
      setFilter({
        ...filters,
        [e.target.name] : value.toLowerCase()
      })
    }
  }




  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option disabled selected>
              Color
            </Option>
            {
              availableColors.map(color => (
                <Option key={color}>{color}</Option>
              ))
            }
            <Option></Option>
            
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option disabled selected>
              Size
            </Option>
            {
              availableSizes.map(size => (
                <Option key={size}>{size}</Option>
              ))
            }
            <Option></Option>
          </Select>
          
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e=>setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} setAvailableColors={setAvailableColors} setAvailableSizes={setAvailableSizes}/>
      <Footer />
    </Container>
  );
};

export default ProductList;
