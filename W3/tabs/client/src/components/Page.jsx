import React, { useState } from 'react'
import StyledTab from './StyledTab'
import StyledBox from './StyledBox'


const Page = () => {
    const [text, setText] = useState("")
  return (
    <div>
        <h1>Hello World</h1>
        <StyledTab onClick={() => {setText("This is tab 1")}}> Tab 1 </StyledTab>
        <StyledTab onClick={() => {setText("This is tab 2")}}> Tab 2 </StyledTab>
        <StyledTab onClick={() => {setText("This is tab 3")}}> Tab 3 </StyledTab>
        <StyledBox onClick={() => {setText("This is the text box")}}> {text} </StyledBox>
    </div>
  )
}

export default Page