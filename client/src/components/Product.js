import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import styled from "styled-components";
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/wishlistRedux";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 75%;
  object-fit: contain;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;

const Product = ({ item }) => {
  const dispatch = useDispatch()
  const wishlist = useSelector(state => state.wishlist)

  const addToWishlist = (item) => {
    if(wishlist.products.includes(item)){
      alert("This item is already in your wishlist")
    }else{
      dispatch(addProduct(item))
    }
  } 

  return (
    <Container>
      <Circle />
      <Image src={item.img} alt=""/>
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Link to={`/product/${item._id}`}>
            <SearchOutlined style={{color: "black"}}/>
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined onClick={e => addToWishlist(item)}/>
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
