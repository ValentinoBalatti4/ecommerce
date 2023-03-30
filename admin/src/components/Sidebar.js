import React from 'react'
import { Link as href } from "react-router-dom"
import styled from "styled-components"
import { TrendingUp, Home, Timeline,
     People, ShoppingBasketOutlined, AttachMoneyOutlined,
      EqualizerOutlined, Mail, MessageOutlined, FeedbackOutlined } from '@material-ui/icons'

const Container = styled.div`
    background-color: #fafafe;
    position: sticky;
    top: 50px;
    flex: 1;
    height: calc(100vh - 50px);
`
const Wrapper = styled.div`
    padding: 20px;
    color: #555;
`

const Menu = styled.div`
    margin-bottom: 20px;
`
const Title = styled.h3`
    font-size: 14px;
    color: gray;
`
const List = styled.ul`
    list-style: none;
    
`
const ListItem = styled.li`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 5px;
    gap: 8px;
    border-radius: 10px;
    &:hover{
        background-color: rgb(240,240,255);
    }
`

const Link = styled(href)`
    text-decoration: none;
    color: #555;
`

const Sidebar = () => {
    return(
        <Container>
            <Wrapper>
                <Menu>
                    <Title>Dashboard</Title>
                    <List>
                        <Link to="/">
                            <ListItem>
                                <Home/>
                                Home
                            </ListItem>
                        </Link>
                        <ListItem>
                            <Timeline/>
                            Analytics
                        </ListItem>
                        <ListItem>
                            <TrendingUp/>
                            Sales
                        </ListItem>
                    </List>
                </Menu>
                <Menu>
                    <Title>Quick menu</Title>
                    <List>
                        <Link to="/users">                        
                            <ListItem>
                                <People/>
                                Users
                            </ListItem>
                        </Link>
                        <Link to="/products">
                            <ListItem>
                                <ShoppingBasketOutlined/>
                                Products
                            </ListItem>
                        </Link>
                        <ListItem>
                            <AttachMoneyOutlined/>
                            Transactions
                        </ListItem>
                        <ListItem>
                            <EqualizerOutlined/>
                            Reports
                        </ListItem>
                    </List>
                </Menu>
                <Menu>
                    <Title>Staff</Title>
                    <List>
                        <ListItem>
                            <Home/>
                            Manage
                        </ListItem>
                        <ListItem>
                            <Timeline/>
                            Analytics
                        </ListItem>
                        <ListItem>
                            <TrendingUp/>
                            Reports
                        </ListItem>
                    </List>
                </Menu>
                <Menu>
                    <Title>Notificatoins</Title>
                    <List>
                        <ListItem>
                            <Mail/>
                            Mail
                        </ListItem>
                        <ListItem>
                            <FeedbackOutlined/>
                            Feedback
                        </ListItem>
                        <ListItem>
                            <MessageOutlined/>
                            Messages
                        </ListItem>
                    </List>
                </Menu>
            </Wrapper>
        </Container>

    )
}

export default Sidebar