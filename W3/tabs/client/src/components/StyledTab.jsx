import React from 'react'
import { styled } from 'styletron-react';

const StyledTab = styled( 'div', props => ({
    border: '1px solid black',
    backgroundColor: props.$bgColor || 'white',
    color: props.$color || 'black',
    width: props.$width || '50px',
    height: props.$height || '20px',
    padding: "5px",
    margin: "5px",
    display: "inline-block",
    textAlign: "center",
    cursor: "pointer"
}));


export default StyledTab