import { Add, Remove } from "@mui/icons-material";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";
import { api } from "../requests";
import Loader from '../components/Loader';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 500;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #030303;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({ width: "100%", flexDirection: "column" , gap: "15px"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 0 5px;
  ${mobile({ gap: "20px" })}

`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 0px 2px 4px 1px gray;
  &:hover{
      background-color: #f8f4f4;
  }

  &:active{
    box-shadow: 0px 1px 2px 1px gray;

  }

  ${mobile({ width: "100%" })}
`;

const Span = styled.span`
  font-size: 18px;
  color: ${(props) => props.type === 'error' ? 'red' : 'green'};
`


const Product = () => {
  const location = useLocation()
  const id = location.pathname.split('/')[2]

  const productsInCart = useSelector(state => state.cart.products)
  console.log(productsInCart)

  const [status, setStatus] = useState("")
  const [message, setMessage] = useState("")
  
  const [product, setProduct] = useState({})
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  
  const [isLoading, setIsLoading] = useState(false)

  const dispatch = useDispatch()

  useEffect(()=>{
    const getProduct = async () => {
      setIsLoading(true)
      try{
        const response = await api.get(`products/find/${id}`)
        setProduct(response.data)
        setIsLoading(false)
      } catch(e){}
    }
    getProduct()
  }, [id])

  const handleQuantity = (type) => {
    if(type === 'dec'){
      quantity > 1 && setQuantity(quantity - 1)
    } else{
      setQuantity(quantity + 1)
    }
  }

  const handleClick = () => {
    if(color === "" || size === ""){
      setStatus('error')
      setMessage("You must set the color and size!")
    }else{

      if(productsInCart.find(p => product._id === p._id)){
        setStatus('error')
        setMessage("You already have this element in your cart!")
      }else{
        dispatch(
          addProduct({ ...product, quantity, color, size })
        )
        setStatus('success')
        setMessage("Product added successfully")
      }
    }
  }

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          {
            isLoading === true 
              ? <Loader/>
              : <Image src={product.img} />
          }
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>${product.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) =>(
                <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                <FilterSizeOption value=''>Select</FilterSizeOption>
                {product.size?.map((s) =>(
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
          {
            status !== "" && (
              <Span type={status}>{message}</Span>
            )}

        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
