import React from "react"
import styled from "styled-components"
import { ArrowDownwardOutlined, ArrowUpwardOutlined } from "@material-ui/icons"

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const FeaturedItem = styled.div`
    flex: 1;
    margin: 0 20px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 3px 1px 5px 1px rgba(0, 0, 0, 0.25);
    cursor: pointer;
`

const Title = styled.span`
    font-size: 22px;
`

const MoneyContainer = styled.div`
    margin: 10px 0;
    display: flex;
    align-items: center;
`

const FeaturedMoney = styled.span`
    font-size: 26px;
    font-weight: 600;
`

const FeaturedMoneyRate = styled.span`
    display: flex;
    align-items: center;
    margin-left: 20px;
`

const Subtitle = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: gray;
    
`

const ArrowUp = styled(ArrowUpwardOutlined)`
    color: green;
`
const ArrowDown = styled(ArrowDownwardOutlined)`
    color: red;
`

const FeaturedInfo = () => {
    return(
        <Container>
            <FeaturedItem>
                <Title>Revenue</Title>
                <MoneyContainer>
                    <FeaturedMoney>$2,048.99</FeaturedMoney>
                    <FeaturedMoneyRate>-10.4 <ArrowDown/></FeaturedMoneyRate>
                </MoneyContainer>
                <Subtitle>Compared to last month</Subtitle>
            </FeaturedItem>
            <FeaturedItem>
                <Title>Sales</Title>
                <MoneyContainer>
                    <FeaturedMoney>$4,536.99</FeaturedMoney>
                    <FeaturedMoneyRate>-1.4 <ArrowDown/></FeaturedMoneyRate>
                </MoneyContainer>
                <Subtitle>Compared to last month</Subtitle>
            </FeaturedItem>
            <FeaturedItem>
                <Title>Cost</Title>
                <MoneyContainer>
                    <FeaturedMoney>$2,048.99</FeaturedMoney>
                    <FeaturedMoneyRate>15.6 <ArrowUp/></FeaturedMoneyRate>
                </MoneyContainer>
                <Subtitle>Compared to last month</Subtitle>
            </FeaturedItem>
        </Container>
    )
}

export default FeaturedInfo