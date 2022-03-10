import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    bottom: 0;
    margin : auto;
    background-color: #fff7f7;
    border-radius: 50px;
    cursor: pointer;
    opacity: 0.5;
`

export const Slider = () => {
  return (
      <Container>
          <Arrow direction="left">
              <ArrowLeft/>
          </Arrow>
          <Arrow direction="right">
              <ArrowRight/>
          </Arrow>
      </Container>
  )
}
