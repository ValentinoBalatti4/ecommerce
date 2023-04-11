import { Add, Remove, DeleteOutline } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../redux/cartRedux"
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile, tablet } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  display: flex;
  font-weight: 300;
  justify-content: center;
  margin-top: 20px;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${tablet({ flexDirection: "column" })}

`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  gap: 10px;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  border-radius: 10px;
  
  ${mobile({ flexDirection: "column", position: "relative"})}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({padding: "5px 10px"})}

`;

const Image = styled.img`
  width: 200px;
  border: 1px solid lightgray;
  ${mobile({width: "125px"})}
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span`
  ${tablet({fontSize: "13px"})}
  ${mobile({fontSize: "11px"})}
`;

const ColorItem = styled.div`
  display: flex;
  gap: 5px;
`

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid lightgray;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })} })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 10px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  ${mobile({ marginTop: "20px"})}
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const DeleteButton = styled(DeleteOutline)`
  position: relative;
  top: 25px;
  right: 30px;
  cursor: pointer;
  &:hover{
    color:red;
  }
  ${mobile({display: 'inline-block', position: 'absolute', top: '10px', right: '10px' })}
`

const Cart = () => {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()

  const deleteProduct = (product) => {
    dispatch(
      removeProduct(product)
    )
  }
  
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>
              Your Wishlist (0)
            </TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {
              cart.products.length === 0 
              ? 
                <Title style={{alignItems: "center", flex: "0.8"}}>Your cart is empty</Title> 
              :
                cart.products.map((product) =>(
                  <Product key={product._id}>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {product.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {product._id}
                        </ProductId>
                        <ColorItem>
                          <b>Color: </b>
                          <ProductColor color={product.color}/>
                        </ColorItem>
                        <ProductSize>
                          <b>Size:</b> {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        
                        <ProductAmount>Quantity: {product.quantity}</ProductAmount>
                        
                      </ProductAmountContainer>
                      <ProductPrice>
                        <p style={{fontSize:'30px'}}>
                          $ {product.price * product.quantity} 
                        </p>
                        {
                          product.quantity > 1 && <p style={{marginLeft: '1rem'}}>$ ({product.price}x{product.quantity})</p>
                        } 
                      </ProductPrice>
                    </PriceDetail>
                    <DeleteButton onClick={() => deleteProduct(product)} />
                  </Product>
              ))
            }
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
