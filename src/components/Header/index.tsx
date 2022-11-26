import React from 'react'
import { ContainerHeader, Header, IconLogo, Items, List, Logo, NameLogo, Navegation } from './styled'

export default function () {
    return (
        <Header>
            <ContainerHeader>
                <Logo>
                    <NameLogo>
                        <h2 className='firstNameLogo'>Charles </h2>
                        <h2 className='lastNameLogo'>Eduardo</h2>
                    </NameLogo>
                    <IconLogo>
                        <h2>!=</h2>
                    </IconLogo>
                </Logo>
                <Navegation>
                    <List>
                        <li><Items to="/"><p>Home</p></Items></li>
                        <li><Items to="/"><p>Conhecimentos/Ferramentos</p></Items></li>
                        <li><Items to="/Projects"><p>Projetos</p></Items></li>
                    </List>
                </Navegation>
            </ContainerHeader>
        </Header>
    )
}
