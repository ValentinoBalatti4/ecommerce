import React from "react"
import styled from "styled-components"
import { LineChart, Line, CartesianGrid, XAxis, Tooltip, ResponsiveContainer} from 'recharts'


const Container = styled.div`
    margin: 20px;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 3px 1px 5px 1px rgba(0, 0, 0, 0.25);
`

const Title = styled.h3`
    margin-bottom: 20px;
`

const Chart = ({title, data, dataKey, grid}) => {
 
    return(
        <Container>
            <Title>{title}</Title>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#5550bd" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                    <Tooltip/>
                    { grid && <CartesianGrid stroke="#e0dfdf"/>}
                </LineChart>
                
            </ResponsiveContainer>
        </Container>
    )
}

export default Chart