import React, { useEffect } from "react"
import styled from "styled-components"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons"
import {Link} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import  {getProducts, deleteProduct}  from "../redux/apiCalls"
  
const Container = styled.div`
    flex: 4;
`

const Product = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover; 
`

const EditBtn = styled.button`
    color: gray;
    padding: 3px 7px;
    background-color: rgb(240,240,255);
    border: 1px solid lightgray;
    border-radius: 3px;
    cursor: pointer;
    margin-right: 20px;
`

const DeleteBtn = styled(DeleteOutline)`
    color: red;
    cursor: pointer;
`

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.product.products)

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
        deleteProduct(dispatch, id)
    }


    const columns = [
        { field: '_id', headerName: 'ID', width: 220 },
        {
          field: 'product',
          headerName: 'Product',
          width: 220,
          renderCell: (params) => {
            return(
                <Product>
                    <Image src={params.row.img} alt=""/>
                    {params.row.title}
                </Product>
            )
          }
        },
        {
          field: 'inStock',
          headerName: 'Stock',
          width: 200,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/product/" + params.row._id}>
                            <EditBtn>Edit</EditBtn>
                        </Link>
                        <DeleteBtn onClick={() => handleDelete(params.row._id)}/>
                    </>
                )
            }
        },
    
    ]
      


    return(
        <Container>
            <DataGrid rows={products} getRowId={(row) => row._id} columns={columns} pageSize={8} disableSelectionOnClick checkboxSelection/>
        </Container>
    )
}

export default ProductList