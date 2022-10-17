import React from 'react'
import { styled } from 'styletron-react';

const StyledBox = styled( 'div', props => ({
    border: '1px solid black',
    backgroundColor: props.$bgColor || 'white',
    color: props.$color || 'black',
    width: props.$width || '195px',
    height: props.$height || '60px',
    padding: "5px",
    margin: "5px",
    display: "block",
    textAlign: "center"
}));


export default StyledBox