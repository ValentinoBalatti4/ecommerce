import React from 'react'
import styled from 'styled-components'
import { NotificationsActiveOutlined, Settings } from "@material-ui/icons"
import { Badge } from '@mui/material'

const Container = styled.div`
    top: 0;
    width: 100%;
    height: 50px;
    background-color: red;
    background-color: white;
    box-shadow: 0px 2px 2px 1px lightgray;
    position: sticky;
    z-index: 10; 
`

const Wrapper = styled.div`   
    height: 100%;
    padding: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

`

const TopLeft = styled.div`

`

const TopRight = styled.div`
    display: flex;
    gap: 10px;

`

const Logo = styled.span`
    color: darkblue;
    font-size: 30px;
    font-weight: 600;
`

const Topbar = () => {
    return(
    <Container>
        <Wrapper>
            <TopLeft>
                <Logo>MyShop ADMIN</Logo>
            </TopLeft>
            <TopRight>
                <Badge badgeContent="2">
                     <NotificationsActiveOutlined/>
                </Badge>
                <Settings/>
            </TopRight>
        </Wrapper>
    </Container>
    )
}

export default Topbar