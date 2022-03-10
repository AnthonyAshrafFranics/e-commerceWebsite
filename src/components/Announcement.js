import styled from 'styled-components'
import React from 'react'
import { teal } from '@mui/material/colors';

const Container = styled.div`
    height: 30px;
    color: white;
    backgroundColor: red !important ;

`

export const Announcement = () => {
  return (
        <div style={{fontWeight: 'bold', fontSize: '1.2rem',  backgroundColor: 'teal', height: '30px', color: 'white',  textAlign: 'center'}}>
            Super Deal! Free Shipping on orders over $50
        </div>
    )
}
