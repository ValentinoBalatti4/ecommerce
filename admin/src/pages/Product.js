import { Publish } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Chart from '../components/Chart'
import { productData } from '../data'

const Container = styled.div`
    flex: 4;
    padding: 20px;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Title = styled.h1``

const EditBtn = styled.button`
    width: 80px;
    background-color: rgb(240,240,255);
    padding: 7px 10px;
    border: 1px solid lightgray;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
`

const Top = styled.div`
    display: flex;
`

const TopLeft = styled.div`
    flex: 1;
`

const TopRight = styled.div`
    flex: 1;
    margin: 20px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 2px 3px 8px 2px rgba(0, 0, 0, 0.25);
`


const InfoTop = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const InfoBottom = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`


const ProductInfo = styled.div`
    width: 150px;
    display: flex;
    justify-content: space-between;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
`
const ProductName = styled.span`
    font-weight: 600;
`
const ProductKey = styled.span`
    font-size: 16px;
`

const ProductValue = styled.span`
    font-size: 14px;
`


const Bottom = styled.div`
    padding: 20px;
    margin: 20px;
    box-shadow: 2px 3px 8px 2px rgba(0, 0, 0, 0.25);
`

const ProductForm = styled.form`
    display: flex;
    justify-content: space-between;
`

const ProductFormLeft = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductFormRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const UpdateImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 10px;;
    object-fit: cover;
`

const Label = styled.label`
    color: gray;
    margin-bottom: 5px;
    font-size: 14px;
`

const Input = styled.input`
    width: 250px;
    height: 30px;
    padding: 5px;
    margin-bottom: 15px;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:focus{
        border-color: rgb(240,240,255);
        box-shadow: 0 5px 4px rgb(240,240,255);
    }

`

const Select = styled.select`
    margin-bottom: 20px;
    height: 30px;
`

const Option = styled.option``

const UploadBtn = styled.button`
    padding: 7px 10px;
    background-color: rgb(240,240,255);
    border: 1px solid lightgray;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
`

const Product = () => {
  return (
    <Container>
        <Header>
            <Title>Edit product</Title>
            <Link to='/newproduct'>
                <EditBtn>Create</EditBtn>
            </Link>
        </Header>
        <Top>
            <TopLeft>
                <Chart data={productData} dataKey="sales" title="Sales performance"/>
            </TopLeft>
            <TopRight>
                <InfoTop>
                    <Image src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                    <ProductName>Apple airpods</ProductName>
                </InfoTop>
                <InfoBottom>
                    <ProductInfo>
                        <ProductKey>id: </ProductKey>
                        <ProductValue>123</ProductValue>
                    </ProductInfo>
                    <ProductInfo>
                        <ProductKey>sales: </ProductKey>
                        <ProductValue>12</ProductValue>
                    </ProductInfo>
                    <ProductInfo>
                        <ProductKey>active: </ProductKey>
                        <ProductValue>yes</ProductValue>
                    </ProductInfo>
                    <ProductInfo>
                        <ProductKey>inStock: </ProductKey>
                        <ProductValue>no</ProductValue>
                    </ProductInfo>
                    
                </InfoBottom>
            </TopRight>
        </Top>
        <Bottom>
            <ProductForm>
                <ProductFormLeft>
                    <Label>Product name</Label>
                    <Input type="text" placeholder="Apple airpods"/>
                    <Label>In Stock</Label>
                    <Select name="inStock" id="idStock">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                    <Label>Active</Label>
                    <Select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </Select>
                </ProductFormLeft>
                <ProductFormRight>
                    <div style={{display: 'flex', alignItems: 'flex-end'}}>
                        <UpdateImage src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'/>
                        <Label htmlFor='file'>
                            <Publish/>
                        </Label>
                        <Input type="file" id="id" style={{display: 'none'}}  />
                    </div>
                    <UploadBtn>Update</UploadBtn>
                </ProductFormRight>
            </ProductForm>
        </Bottom>
    </Container>
  )
}

export default Product