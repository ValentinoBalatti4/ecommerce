import React, {useEffect, useMemo, useState} from "react"
import styled from "styled-components"
import FeaturedInfo from "../components/FeaturedInfo"
import Chart from "../components/Chart"
import {data} from "../data"
import FstWidget from "../components/FstWidget"
import ScdWidget from "../components/ScdWidget"
import { userRequest } from "../requests"

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
    const [stats, setStats] = useState([])

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Agu",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        []
    )

    useEffect(() => {
        const getStats = async () => {
            try{
                const res = await userRequest.get('user/stats')
                res.data.map(item => {
                    setStats(prev => [
                        ...prev,
                        {name: MONTHS[item._id - 1], "Active user": item.total}    
                    ])
                })
            } catch {}
        }
        getStats()
        console.log(stats)
    }, [MONTHS])

    return(
        <Container>
            <FeaturedInfo/>
            <Chart title={"User analytics"} data={stats} grid dataKey={"Active user"}/>
            <Widgets>
                <FstWidget/>
                <ScdWidget/>
            </Widgets>
        </Container>
    )
}

export default Home