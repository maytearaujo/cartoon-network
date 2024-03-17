import React, {useState} from "react"

import Scooby from "./Images/scooby.png"
import Ben10 from "./Images/ben10.png"
import Looney from "./Images/looney.png"

import Gumball from "./Images/gumball.png"
import Meninas from "./Images/meninas.png"
import TomJerry from "./Images/tomejerry.png"

import * as S from "./MainStyle"

import Programacao from "../Programacao/Programacao"

function Main(){
    const [galeria, setGaleria] = useState([Gumball, Meninas, TomJerry])

    return(
        <S.MainStyle>
            <S.StyledSection>
                <img src={Scooby} alt="Scooby" />
                <img src={Ben10} alt="Ben 10" />
                <img src={Looney} alt="Looney" />
            </S.StyledSection>

            <S.StyledSection2>
                {galeria.map((item) => (
                    <img src={item} alt="Imagens" />
                ))}
            </S.StyledSection2>

            <Programacao />
        </S.MainStyle>
    )
}

export default Main