import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {removeProduct} from '../redux/wishlistRedux'
import { DeleteOutline } from "@mui/icons-material"
import { Link } from 'react-router-dom'
import { mobile } from '../responsive'


const Container = styled.div`}
  display: flex;
  flex-direction: column;
  max-height: 50vh;
  background-color: whitesmoke;
  padding: 10px;
  gap: 10px;  
  position: absolute;
  top: 100%;
  right: 0;
  box-shadow: 1px 3px 3px grey;
  z-index: 1;
  overflow-y: auto;
  border: 1px solid gray;
  border-radius: 0 0 0 10px;
  ${mobile({width: '100vw'})}
`

const Text = styled.span`
${mobile({padding: '0 20px'})}
`

const ProductContainer = styled.div`
  background-color: #fafafa ;
  display: flex;
  gap: 50px;
  justify-content: space-between;
  border-radius: 10px;
  ${mobile({margin: '0 25px'})}
`

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
`

const ProductTitle = styled.h3``

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 100%;
`

const ProductPrice = styled.span``

const DeleteButton = styled(DeleteOutline)`
  position: relative;
  top: 25px;
  right: 30px;
  cursor: pointer;
  &:hover{
    color:red;
  }
`

const WishlistDropdown = () => {
  const wishlist = useSelector((state) => state.wishlist)
  const dispatch = useDispatch()

  const deleteProduct = (product) => {
    dispatch(removeProduct(product))
  }

  return (
    <Container>
        {
          wishlist.products.length === 0 
          ? 
            <Text style={{alignItems: "center", flex: "0.8"}}>Your wishlist is empty</Text> 
          :

          wishlist.products.map((product) => (
            <ProductContainer key={product._id}>
              <Left>
                <ProductImage src={product.img} alt="Product image"/>
                <Link style={{color: "black", textDecoration: 'none'}} to={`/product/${product._id}`}>
                  <ProductTitle>{product.title}</ProductTitle>
                </Link>
              </Left>
              <Right>
                <DeleteButton onClick={() => deleteProduct(product)}/>
                <ProductPrice>{product.price}</ProductPrice>
              </Right>
            </ProductContainer>
          ))
        }       
    </Container>
  )
}

export default WishlistDropdown