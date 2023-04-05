import React, { useState } from 'react'
import styled from 'styled-components'
import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import app from "../firebase"
import { addProduct } from '../redux/apiCalls';
import { useDispatch } from 'react-redux';

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
    const [inputs, setInputs] = useState()
    const [file, setFile] = useState()
    const [cat, setCat] = useState([])

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputs(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }

    const handleCat = (e) => {
        setCat(e.target.value.split(","))
    }

    const handleClick = (e) => {
        e.preventDefault()
        
        const fileName = new Date().getTime() + file.name
        const storage = getStorage(app)

        const storageRef = ref(storage, fileName)
        const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
        // 1. 'state_changed' observer, called any time the state changes
        // 2. Error observer, called on failure
        // 3. Completion observer, called on successful completion
        uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                const product = { ...inputs, img: downloadURL, categories: cat };
                addProduct(product, dispatch);
            });
        }
    );
    };
    

  return (
    <Container>
        <Title>New Product</Title>
        <ProductForm>
            <ProductFormItem>
                <Label>Image</Label>
                <Input name="image" type="file" id="file" onChange={e => setFile(e.target.value)}/>
            </ProductFormItem>
            <ProductFormItem>
                <Label>Product title</Label>
                <Input name="title" type="text" placeholder="Apple airpods" onChange={handleChange}/>
            </ProductFormItem>
            <ProductFormItem>
                <Label>Product description</Label>
                <Input name="description" type="text" placeholder="Apple airpods" onChange={handleChange}/>
            </ProductFormItem>
            <ProductFormItem>
                <Label>Product price</Label>
                <Input name="price" type="text" placeholder="$100" onChange={handleChange}/>
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
            <UploadBtn onClick={e => handleClick(e)}>Create</UploadBtn>
        </ProductForm>
    </Container>
  )
}

export default NewProduct