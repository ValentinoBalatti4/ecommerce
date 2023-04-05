import { Publish } from '@material-ui/icons'
import React, { useState, useMemo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Chart from '../components/Chart'
import { useSelector } from 'react-redux'
import { userRequest } from '../requests'

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
    width: auto;
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
    font-size: 18px;
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
    const location = useLocation()
    const productId = location.pathname.split('/')[2]
    const [productStats, setProductStats] = useState([])

    const product = useSelector(state => state.product.products.find(product => product._id === productId))

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    )

    
    useEffect(() => {
        const getProductStats = async () => {
            try{
                const res = await userRequest.get(`orders/income?pid=${productId}`)
                console.log(res)
                const list = res.data.sort((a, b) => {
                    return (a._id - b._id)
                })  

                list.map(item => {
                    setProductStats(prev => [
                        ...prev,
                        {name: MONTHS[item._id - 1], "Sales": item.total}    
                    ])
                    
                })
            } catch(e) {console.log(e)}
        }
        getProductStats()

    }, [MONTHS, productId])


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
                <Chart data={productStats} dataKey="sales" title="Sales performance"/>
            </TopLeft>
            <TopRight>
                <InfoTop>
                    <Image src={product.img}/>
                    <ProductName>{product.title}</ProductName>
                </InfoTop>
                <InfoBottom>
                    <ProductInfo>
                        <ProductKey>id: </ProductKey>
                        <ProductValue>{product._id}</ProductValue>
                    </ProductInfo>
                    <ProductInfo>
                        <ProductKey>sales: </ProductKey>
                        <ProductValue>12</ProductValue>
                    </ProductInfo>
                    <ProductInfo>
                        <ProductKey>inStock: </ProductKey>
                        <ProductValue>{product.inStock}</ProductValue>
                    </ProductInfo>
                    
                </InfoBottom>
            </TopRight>
        </Top>
        <Bottom>
            <ProductForm>
                <ProductFormLeft>
                    <Label>Product name</Label>
                    <Input type="text" placeholder={product.title}/>
                    <Label>Product description</Label>
                    <Input type="text" placeholder={product.description}/>
                    <Label>In Stock</Label>
                    <Input type="text" placeholder={"$" + product.price}/>
                    <Label>In Stock</Label>
                    <Select name="inStock" id="inStock">
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                    <Label>Active</Label>
                    <Select name="active" id="active">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </Select>
                </ProductFormLeft>
                <ProductFormRight>
                    <div style={{display: 'flex', alignItems: 'flex-end'}}>
                        <UpdateImage src={product.img}/>
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