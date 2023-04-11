import React from 'react'
import styled, {keyframes} from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`

const LoaderIcon = styled.div`
    border: 4px solid rgba(0, 0, 0, .1);
    border-left-color: transparent;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
`


const Loader = () => {
  return (
    <LoaderIcon></LoaderIcon>
  )
}

export default Loader