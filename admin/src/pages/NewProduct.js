import React from 'react'
import styled from 'styled-components'
import { Publish } from '@material-ui/icons'

const Container = styled.div`
    flex: 4;
    padding: 20px;
`
const Title = styled.h1``

const ProductForm = styled.form`
    display: flex;
    padding: 20px;
    margin-top: 20px;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 2px 3px 8px 2px rgba(0, 0, 0, 0.25);
`

const ProductFormItem = styled.div`
    display: flex;
    flex-direction: column;
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



const NewProduct = () => {
  return (
    <Container>
        <Title>New Product</Title>
        <ProductForm>
            <ProductFormItem>
                <Label>Image</Label>
                <Input type="file" id="file"/>
            </ProductFormItem>
            <ProductFormItem>
                <Label>Product name</Label>
                <Input type="text" placeholder="Apple airpods"/>
            </ProductFormItem>
            <ProductFormItem>
                <Label>In Stock</Label>
                <Select name="inStock" id="idStock">
                    <Option value="yes">Yes</Option>
                    <Option value="no">No</Option>
                </Select>
            </ProductFormItem>
            <ProductFormItem>
                <Label>Active</Label>
                <Select name="active" id="active">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </Select>
            </ProductFormItem>
            <UploadBtn>Create</UploadBtn>
        </ProductForm>
    </Container>
  )
}

export default NewProduct