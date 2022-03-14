import React from "react"
import CardText from "./Components/CardText/CardText"
import CardMain from "./Components/CardMain/CardMain"
import styled from "styled-components"

function App () {

    return(
            <MainContain>
            <CardHold>
                <CardText/>
                <CardMain/>
            </CardHold>
            </MainContain>
    )
}

export default App



const MainContain = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const CardHold = styled.div`
    width: 90%;
    height: 87%;
    display: flex;
    flex-direction: column;
    box-shadow: 6px 10px 10px #EAEAEA;
    align-items: center;
    background-color: #FAFAFA;
`