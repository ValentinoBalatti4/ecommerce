import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Visibility } from "@material-ui/icons"
import { userRequest } from "../requests"

const Container = styled.div`
    flex: 1;
    box-shadow: 3px 1px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 20px;
`

const Title = styled.span`
    font-size: 22px;
    font-weight: 600;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`

const ListItem = styled.li`
    margin: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
`

const UserName = styled.span`
    font-weight: 600;
`

const Button = styled.button`
    background-color: #eeeef7;
    color: ;
    cursor: pointer; 
    display: flex;
    align-items: center;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
`


const FstWidget = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try{
                const res = await userRequest.get("user/?new=true") 
                setUsers(res.data)
            } catch(e){
                console.log("Error!!!: " + e.message)
            }
        }
        getUsers()
    }, [])


    return(
        <Container>
            <Title>New Joined Members</Title>
            <List>
                {users.map((user) => (
                    <ListItem key={user._id}>
                        <Image src={user.img || "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"} alt="profPic"/>
                        <UserInfo>
                            <UserName>{user.username}</UserName>
                        </UserInfo>
                        <Button><Visibility/></Button>
                    </ListItem>
                ))}
            </List>
        </Container>
    )   
}

export default FstWidget