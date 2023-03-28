import React from "react"
import styled from "styled-components"
import FeaturedInfo from "../components/FeaturedInfo"
import Chart from "../components/Chart"
import {data} from "../data"
import FstWidget from "../components/FstWidget"
import ScdWidget from "../components/ScdWidget"

const Container = styled.div`
    padding: 10px 15px;
    flex: 4;
`

const Widgets = styled.div`
    display: flex;
    margin: 0 20px;
    gap: 20px;
`

const Home = () => {
    return(
        <Container>
            <FeaturedInfo/>
            <Chart title={"User analytics"} data={data} grid dataKey={"Active user"}/>
            <Widgets>
                <FstWidget/>
                <ScdWidget/>
            </Widgets>
        </Container>
    )
}

export default Home