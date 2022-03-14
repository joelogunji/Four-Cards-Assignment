import React from 'react'
import styled from "styled-components"
import SingleCard from "../SingleCard/SingleCard"
import Supervisor from "./Images/Supervisor-Image.svg"
import Team from "./Images/Team-Image.svg"
import Karma from "./Images/Karma-Image.svg"
import Calculator from "./Images/Calculator-Image.svg"

function CardMain () {

    return(
        <CardMainContain>
            <LeftCard>
                <SingleCard 
                    col="#45D3D3" Head="Supervisor" Text1="Monitors activity to identify project"
                    Text2="roadblocks" Icon={Supervisor}
                />
            </LeftCard>
            <MiddleCard>
                <SingleCard 
                    col="#EA5353" Head="Team Builder" Text1="Scans our talent network to create the"
                    Text2="optimal team for your project" Icon={Team}
                    />

                <br/>

                <SingleCard 
                    col="#FCAF4A" Head="Karma" Text1="Regularly evaluates our talent to ensure"
                    Text2="quality" Icon={Karma}
                />
            </MiddleCard>
            <RightCard>
                <SingleCard
                    col="#549EF2" Head="Calculator" Text1="Uses data from past projects to provide"
                    Text2="better delivery estimates" Icon={Calculator}
                />
            </RightCard>
        </CardMainContain>
    )
}

export default CardMain

const CardMainContain = styled.div`
    height: 60%;
    width: 80%;
    display: flex;
    justify-content:space-between;
    align-items: center;
`

const LeftCard = styled.div`
`

const MiddleCard = styled.div``

const RightCard = styled.div``

