import React from 'react'
import { ContainerHeader, Header, Items, List, Logo, NameLogo, Navegation } from './styled'

export default function () {
    return (
        <Header>
            <ContainerHeader>
                <Logo>
                    <NameLogo>
                        <h2 className='nameLogo'>Charles </h2>
                        <h2 className='lastNameLogo'>Eduardo</h2>
                    </NameLogo>
                    <h2 className='iconLogo'>!=</h2></Logo>
                <Navegation>
                    <List>
                        <Items to="/"><p>Home</p></Items>
                        <Items to="/"><p>Conhecimentos/Ferramentos</p></Items>
                        <Items to="/Projects"><p>Projetos</p></Items>
                    </List>

                </Navegation>
            </ContainerHeader>
        </Header>
    )
}
