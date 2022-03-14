import React from 'react'
import styled from "styled-components"

function SingleCard (props) {
    return (
        <SingleCardContain>
        <SingleCTop style={{backgroundColor:props.col}}></SingleCTop>
        <SingleCBottom>
            <SingleCHead>{props.Head}</SingleCHead>
            <SingleText>{props.Text1}<br/>{props.Text2}</SingleText>
            <SingleImgContain><SingleImage src={props.Icon}></SingleImage></SingleImgContain>
        </SingleCBottom>
        </SingleCardContain>
    )
}

export default SingleCard


const SingleCardContain = styled.div`
    height: 27vh;
    width: 44vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    box-shadow: 2px 5px 5px #EAEAEA;
    border-radius: 5px;
`

const SingleCTop = styled.div`
    height: 3%;
    width: 100%;
`

const SingleCBottom = styled.div`
height: 97%;
width: 90%;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
`

const SingleCHead = styled.div`
    height: 20%;
    width: 100%;
    font-weight: bold;
`

const SingleText = styled.div`
    height: 30%;
    width: 100%;
    font-size: small;
    color: #A3A5B1;
`

const SingleImgContain = styled.div`
    height: 38%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`

const SingleImage = styled.img`
    height: 40px;
    width: 40px;
    
`