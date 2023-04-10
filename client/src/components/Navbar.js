import { Search, ShoppingCartOutlined, FavoriteBorderOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/apiCalls";
import { useState } from "react";
import { useEffect } from "react";
import { userRequest } from "../requests"; 
import WishlistDropdown from "./WishlistDropdown";

const Container = styled.div`
  position: fixed;
  background-color: whitesmoke;
  top: 0;
  width: 100%;
  height: 60px;
  box-shadow: 0px 5px 5px grey;
  ${mobile({ height: "50px" })}
  z-index:1000;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 20px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  outline: none;  
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.a`
  color: black;
  font-size: 36px;
  font-weight: bold;
  text-decoration: none;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  ${tablet({fontSize:"16px"})}
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const cartQuantity = useSelector(state => state.cart.quantity)
  const wishlistQuantity = useSelector(state => state.wishlist.products.length)
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.currentUser)

  const [query, setQuery] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const [WishlistIsOpen, setWishlistOpen] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      if(query){
        try{
          const res = await userRequest.get(`products/find?search=${query}`)
          setSearchResult(res.data)
        } catch(e){console.log(e)}
      }
    }
    getProduct() 
  }, [query])

  const handleLogoutClick = (e) => {
    e.preventDefault()
    logout(dispatch)
  }

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" value={query} onChange={e => setQuery(e.target.value)}/>
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{textDecoration: "none"}}>
            <Logo href="/">MyShop</Logo>
          </Link>
        </Center>
        <Right>
          {
            user 
            ?
              <MenuItem onClick={handleLogoutClick}>Sign out</MenuItem>

            :

              <Link to="/login" style={{textDecoration: "none"}}>
                <MenuItem>Sign in</MenuItem>
              </Link>
            
          }

          <MenuItem onClick={e => setWishlistOpen(!WishlistIsOpen)}>
            <Badge badgeContent={wishlistQuantity}>
              <FavoriteBorderOutlined />
            </Badge>
          </MenuItem>
          
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={cartQuantity}>
                <ShoppingCartOutlined/>
              </Badge>
            </MenuItem>
          </Link>
        </Right>
        {
          WishlistIsOpen && (
            <WishlistDropdown/>
          )
        }
      </Wrapper>
    </Container>
  );
};

export default Navbar;
