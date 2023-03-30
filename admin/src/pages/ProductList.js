import React, { useState } from "react"
import styled from "styled-components"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons"
import { productRows } from "../data"
import {Link} from "react-router-dom"

  
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
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter(
            (item) => item.id !== id
        ))
    }

    
    const columns = [
        { field: 'id', headerName: 'ID', width: 110 },
        {
          field: 'name',
          headerName: 'Product',
          width: 190,
          renderCell: (params) => {
            return(
                <Product>
                    <Image src={params.row.img} alt=""/>
                    {params.row.name}
                </Product>
            )
          }
        },
        {
          field: 'stock',
          headerName: 'Stock',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 140,
        },
        {
            field: 'price',
            headerName: 'Price',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <EditBtn>Edit</EditBtn>
                        </Link>
                        <DeleteBtn onClick={() => handleDelete(params.row.id)}/>
                    </>
                )
            }
        },
    
    ]
      


    return(
        <Container>
            <DataGrid rows={data} columns={columns} pageSize={8} disableSelectionOnClick checkboxSelection/>
        </Container>
    )
}

export default ProductList