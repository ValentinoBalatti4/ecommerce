import React from "react"
import styled from "styled-components"

const Container = styled.div`   
    padding: 20px;
    flex: 4;
`

const Title = styled.h1`

`

const NewUserForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
`

const NewUserFormItem = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    margin-bottom: 10px;
    gap: 10px;
`

const Label = styled.label`
    font-size: 14px;
    color: rgba(100, 100, 100, 0.6);
    font-weight: 700;
`

const Input = styled.input`
    height: 25px;
    padding: 4px 10px;
    border: none;
    outline: none;
    border-bottom: 1px solid gray;
    transition: all 0.2s ease-in-out;
    &:focus{
        border-color: rgb(240,240,255);
        box-shadow: 0 5px 4px 2px rgb(240,240,255);
    }
`

const Select = styled.select`
    height: 40px;
    border-radius: 5px;
    outline: none;
    cursor: pointer;
`

const Option = styled.option`
    padding: 20px;
`

const CreateBtn = styled.button`
    position: relative;
    top: 25px;
    height: 40px;
    width: 200px;
    font-weight: 600;
    font-size: 15px;
    background-color: rgb(240,240,255);
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 0px 10px;
    cursor: pointer;
    &:hover{
        background-color: rgba(240,240,255, 0.7);
    }

`

const NewUser = () => {
    return(
        <Container>
            <Title>New user</Title>
            <NewUserForm>
                <NewUserFormItem>
                    <Label>Username</Label>
                    <Input type="text" placeholder=""/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Full name</Label>
                    <Input type="text" placeholder=""/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Email</Label>
                    <Input type="email" placeholder=""/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Password</Label>
                    <Input type="password" placeholder=""/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Phone</Label>
                    <Input type="text" placeholder=""/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Address</Label>
                    <Input type="text" placeholder=""/>
                </NewUserFormItem>
                <NewUserFormItem>
                    <Label>Active</Label>
                    <Select>
                        <Option value="yes">Yes</Option>
                        <Option value="no">No</Option>
                    </Select>
                </NewUserFormItem>
                
                <CreateBtn>Create</CreateBtn>
            </NewUserForm>  
        </Container>
    )
}

export default NewUser