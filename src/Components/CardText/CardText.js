import React from 'react'
import styled from "styled-components"

const cardText = () => {

    return(
        <CardText>
            <Head1>Reliable, Efficient delivery</Head1>
            <Head2>Powered by Technology</Head2>
            <Paragraph>Our Artificial Intelligence powered tools use millions of project data<br/>
            points to ensure that your project is successful</Paragraph>
        </CardText>
    )
}

export default cardText;

const CardText = styled.div`
    height: 30%;
    width; 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Head1 = styled.div`
    font-size: x-large;
`

const Head2 = styled.div`
    font-size: x-large;
    font-weight: bold;
`

const Paragraph = styled.p`
    font-size: small;
    text-align: center;
`