import Hamburguer from '../Hamburguer'
import { ContainerHeader, Header, IconLogo, Items, List, Logo, NameLogo, Navegation, } from '../Header/styled'
import ButtonTheme from '../SunAndMoon'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function () {
    const [hamburguerBool, setHamburguerBool] = useState<boolean>(false)


    console.log(hamburguerBool)
    return (
        <>
            <Header style={{ height: `${hamburguerBool == true ? "20rem" : "7.5rem"}` }}>
                <ContainerHeader>
                    <Logo style={{ display: ` ${hamburguerBool == true ? "none" : "flex"}` }}>
                        <NameLogo>
                            <Link to="/"><h2 className='firstNameLogo'>Charles </h2></Link>
                            <Link to="/"><h2 className='lastNameLogo'>Eduardo</h2></Link>
                        </NameLogo>
                        <IconLogo>
                            <h2>!=</h2>
                        </IconLogo>
                    </Logo>
                    <Navegation>
                        <List style={{ display: ` ${hamburguerBool == false ? "" : "flex"}` }}>
                            <li><Items to="/"><p>Home</p></Items></li>
                            <li><Items to="/"><p>Conhecimentos/Ferramentos</p></Items></li>
                            <li><Items to="MyProjects"><p>Projetos</p></Items></li>
                            <ButtonTheme />
                        </List>
                        <Hamburguer onClick={() => setHamburguerBool(!hamburguerBool)} />
                    </Navegation>
                </ContainerHeader>
            </Header>
        </>
    )
}