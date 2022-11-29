import Hamburguer from '../Hamburguer'
import { ButtonTheme, ContainerHeader, Header, IconLogo, Items, List, Logo, NameLogo, Navegation, } from '../Header/styled'

export default function () {
    const colorTheme = () => {
        document.documentElement.classList.toggle("light")
    }
    return (
        <>
            <Header>
                <ContainerHeader>
                    <Logo>
                        <ButtonTheme onClick={colorTheme}>
                            <span></span>
                        </ButtonTheme>
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
                        <Hamburguer />
                    </Navegation>
                </ContainerHeader>
            </Header>
        </>
    )
}