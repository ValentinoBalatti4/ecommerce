import React from "react"
import styled from "styled-components"

const Container = styled.div`
    flex: 2;
    box-shadow: 3px 1px 5px 1px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 20px;
`

const Title = styled.span`
    font-size: 22px;
    font-weight: 600;
`

const Table = styled.table`
    width: 100%;
    border-spacing: 20px;
`

const Tr = styled.tr`

`

const Th = styled.th`
    text-align: left;
`

const Td = styled.td`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
`
const UserName = styled.span`
    font-weight: 600;
`
const Date = styled.td``
const Amount = styled.td``
const Status = styled.td``

const Button = styled.button`
    font-weight: 500;
    padding: 5px;
    border-radius: 10px;
    border: 1px solid lightgray;

    ${(props) => props.type === "Approved" &&`
        background-color: #e5faf2;
        color: #3bb077;
    `}

    ${(props) => props.type === "Pending" &&`
        background-color: #ebf1fe;
        color: #2a7ade;
    `}

    ${(props) => props.type === "Declined" &&`
        background-color: #fff0f1;
        color: #d95087;
    `}
`

const ScdWidget = () => {
    return(
        <Container>
            <Title>Latest Transactions</Title>
            <Table>
                <Tr>
                    <Th>Customer</Th>
                    <Th>Date</Th>
                    <Th>Amount</Th>
                    <Th>Status</Th>
                </Tr>
                <Tr>
                    <Td>
                        <Image src="https://picsum.photos/200/300"/>
                        <UserName>Jane Doe</UserName>
                    </Td>
                    <Date>03 March, 2022</Date>
                    <Amount>$120.22</Amount>
                    <Status><Button type="Approved">Approved</Button></Status>
                </Tr>
                <Tr>
                    <Td>
                        <Image src="https://picsum.photos/200/300"/>
                        <UserName>Jane Doe</UserName>
                    </Td>
                    <Date>03 March, 2022</Date>
                    <Amount>$120.22</Amount>
                    <Status><Button type="Pending">Pending</Button></Status>
                </Tr>
                <Tr>
                    <Td>
                        <Image src="https://picsum.photos/200/300"/>
                        <UserName>Jane Doe</UserName>
                    </Td>
                    <Date>03 March, 2022</Date>
                    <Amount>$120.22</Amount>
                    <Status><Button type="Declined">Declined</Button></Status>
                </Tr>
            </Table>
        </Container>
    )
}

export default ScdWidget