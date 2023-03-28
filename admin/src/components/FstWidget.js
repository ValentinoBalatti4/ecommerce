import React from "react"
import styled from "styled-components"
import { Visibility } from "@material-ui/icons"

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

const UserTitle = styled.span`
    font-weight: 200;
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
    return(
        <Container>
            <Title>New Joined Members</Title>
            <List>
                <ListItem>
                    <Image src="https://picsum.photos/200/300" alt="profPic"/>
                    <UserInfo>
                        <UserName>Jhon Doe</UserName>
                        <UserTitle>Software Engeniering</UserTitle>
                    </UserInfo>
                    <Button><Visibility/></Button>
                </ListItem>
            </List>
        </Container>
    )   
}

export default FstWidget