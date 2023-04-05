import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { DataGrid } from "@material-ui/data-grid"
import { DeleteOutline } from "@material-ui/icons"
import { userRows } from "../data"
import {Link} from "react-router-dom"
import { userRequest } from "../requests"
  

const Container = styled.div`
    flex:4;
`

const User = styled.div`
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

const UserList = () => {
    const [data, setData] = useState(userRows)
    const [users, setUsers] = useState([])
    

    useEffect(() => {
        const getUsers = async () =>{
            try{
                const res = await userRequest.get('user/')
                setUsers(res.data)
            } catch(e){console.log(e)}
        }
        getUsers()
    }, [])


    const handleDelete = (id) => {
        setData(data.filter(
            (item) => item.id !== id
        ))
    }

    const columns = [
        { field: '_id', headerName: 'ID', width: 110 },
        {
          field: 'username',
          headerName: 'Username',
          width: 190,
          renderCell: (params) => {
            return(
                <User>
                    <Image src={params.row.profPic || "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"} alt=""/>
                    {params.row.username}
                </User>
            )
          }
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          width: 140,
        },
        {
            field: 'transaction',
            headerName: 'Transaction',
            width: 160,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 160,
            renderCell: (params) => {
                return(
                    <>
                        <Link to={"/user/" + params.row._id}>
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
            <DataGrid rows={users} getRowId={row => row._id} columns={columns} pageSize={8} disableSelectionOnClick checkboxSelection/>
        </Container>
    )
}

export default UserList