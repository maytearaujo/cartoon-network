import React from "react";
import * as S from "./HeaderStyle"

import Logo from "./Images/logo.png"
import Controle from "./Images/controle.png"
import Relogio from "./Images/relogio.png"

function Header(){
    return(
        <S.StyleHeader>
            <img src={Logo} alt="Logo" />

            <S.StyleSection>
                <S.StyleDiv>
                    <img src={Controle} alt="Controle" />
                    <h2>Jogos</h2>
                </S.StyleDiv>

                <S.StyleDiv>
                    <img src={Relogio} alt="Relogio" />
                    <h2>Programação</h2>
                </S.StyleDiv>
            </S.StyleSection>
        </S.StyleHeader>
    )
}

export default Header