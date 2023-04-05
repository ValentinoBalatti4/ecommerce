import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'
import { PermIdentity, CalendarTodayOutlined, LocationSearchingOutlined, MailOutline, PhoneAndroidOutlined, Publish } from "@material-ui/icons"
import { userRequest } from "../requests"

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

const UserContainer = styled.div`
    display: flex;
    margin-top: 20px;
`

const Left = styled.div`
    flex: 1;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 2px 3px 8px 2px rgba(0, 0, 0, 0.25);
`
    
const LeftTop = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const Image = styled.img`
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-fit: cover;
`
    
const LeftTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

const UserName = styled.span`
    font-weight: 700;
`


const UserTitle = styled.span`
    font-weight: 300;
    color: gray;
`


const LeftBottom = styled.div`

`

const LeftBottomSubtitle = styled.span`
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    color: gray;
    margin-top: 30px;
`

const UserInfoContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 20px;
`


const UserInfo = styled.span`
    font-weight: 400;
    font-size: 15px;
`

const Right = styled.div`
    flex: 2;
    padding: 20px;
    margin-left: 30px;
    border-radius: 8px;
    box-shadow: 2px 3px 8px 2px rgba(0, 0, 0, 0.25);
`

const RightTitle = styled.h2``

const UpdateForm = styled.form`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const UpdateLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const UpdateItem = styled.div`
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
    padding: 3px 10px;
    border: none;
    border-bottom: 1px solid gray;
    outline: none;
    transition: all 0.2s ease-in-out;

    &:focus{
        border-color: rgb(240,240,255);
        box-shadow: 0 5px 4px rgb(240,240,255);
    }

`

const UpdateRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const UpdateUpload = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const ImagePreviw = styled.img`
    width: 100px;
    heigh: 100px;
    border-radius: 5px;
    object-fit: cover;

`

const UploadBtn = styled.button`
    padding: 7px 10px;
    background-color: rgb(240,240,255);
    border: 1px solid lightgray;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
`

const User = () => {
    const location = useLocation()
    const userId = location.pathname.split('/')[2]
    const [user, setUser] = useState([])

    useEffect(() => {
        const getUser = async () => {
            try{
                const res = await userRequest.get(`user/find/${userId}`)
                setUser(res.data)
            } catch(e){console.log(e)}
        }
        getUser()
    }, [userId])

    return(
        <Container>
            <Header>
                <Title>Edit user</Title>
                <Link to="/newuser">
                    <EditBtn>Create</EditBtn>
                </Link>
            </Header>
            <UserContainer>
                <Left>
                    <LeftTop>
                        <Image src={user.img || "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"}/>
                        <LeftTitle>
                            <UserName>{user.username}</UserName>
                            <UserTitle>Software Engineer</UserTitle>
                        </LeftTitle>
                    </LeftTop>
                    <LeftBottom>
                        <LeftBottomSubtitle>Account details</LeftBottomSubtitle>
                        <UserInfoContainer>
                            <PermIdentity/>
                            <UserInfo>JaneDoe32s</UserInfo>
                        </UserInfoContainer>
                        <UserInfoContainer>
                            <CalendarTodayOutlined/>
                            <UserInfo>10/09/1998</UserInfo>
                        </UserInfoContainer>
                        <LeftBottomSubtitle>Contact details</LeftBottomSubtitle>
                        <UserInfoContainer>
                            <PhoneAndroidOutlined/>
                            <UserInfo>+1 123 4567 8901</UserInfo>
                        </UserInfoContainer>
                        <UserInfoContainer>
                            <MailOutline/>
                            <UserInfo>{user.email}</UserInfo>
                        </UserInfoContainer>

                    </LeftBottom>
                </Left>
                <Right>
                    <RightTitle>Edit</RightTitle>
                    <UpdateForm>
                        <UpdateLeft>
                            <UpdateItem>
                                <Label>Username</Label>
                                <Input type="text" placeholder="janedoe323"/>
                            </UpdateItem>
                            <UpdateItem>
                                <Label>Full Name</Label>
                                <Input type="text" placeholder="janedoe323"/>
                            </UpdateItem>
                            <UpdateItem>
                                <Label>Email</Label>
                                <Input type="text" placeholder="janedoe323"/>
                            </UpdateItem>
                            <UpdateItem>
                                <Label>Phone</Label>
                                <Input type="text" placeholder="janedoe323"/>
                            </UpdateItem>
                            <UpdateItem>
                                <Label>Address</Label>
                                <Input type="text" placeholder="janedoe323"/>
                            </UpdateItem>
                        </UpdateLeft>
                        <UpdateRight>
                            <UpdateUpload>
                                <ImagePreviw src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
                                <Label htmlFor="file">
                                    <Publish/>
                                </Label>
                                <Input type="file" style={{display: "none"}}/>
                            </UpdateUpload>
                            <UploadBtn>Update</UploadBtn>
                        </UpdateRight>
                    </UpdateForm>
                </Right>
            </UserContainer>
        </Container>
    )


}

export default User