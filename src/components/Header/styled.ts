import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7.5rem;
    width: 100%;
    background-color: var(--header-background-dark);
`;

export const ContainerHeader = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Navegation = styled.nav`
`;

export const Logo = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 2rem;
`;

export const NameLogo = styled.div`
@keyframes expandText {
  0% {
    letter-spacing: -0.5em;
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
   @keyframes light{
        0%{opacity:1}
        1%{opacity:0}
        10%{opacity:0;text-shadow:none}
        11%{opacity:1;text-shadow:none}
        12%{opacity:0;text-shadow:none}
        20%{opacity:0;text-shadow:none}
        21%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.25)}
        26%{opacity:0;text-shadow:none}
        30%{opacity:0;text-shadow:none}
        31%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}
        35%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}
        36%{opacity:0;text-shadow:none}
        45%{opacity:0;text-shadow:none}
        46%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}
        50%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}
        55%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}
        56%{opacity:0;text-shadow:none}
        57%{opacity:0;text-shadow:none}
        58%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}
        60%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}
        61%{opacity:0;text-shadow:none}
        65%{opacity:0;text-shadow:none}
        66%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}
        75%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}
        76%{opacity:0;text-shadow:none}
        77%{opacity:0;text-shadow:none}
        78%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}
        85%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}
        86%{opacity:0;text-shadow:none}
        87%{opacity:0;text-shadow:none}
        88%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}
        99%{opacity:1;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}
        100%{opacity:0;text-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}
    }
    display: flex;
    justify-content:center;
    align-items:center;
    gap: 1rem;
    animation: expandText 1.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) 3s both;
    & h2{    
        color: var(--header-color-dark);
        font-family: var(--fontfamily-header);
        font-size: var(--fontsize-logo-header);
        font-weight: var(--fontweight-header);
    }
    .firstNameLogo{
        animation: light 5s ease-out both;
        animation-delay: 5s;
    }
    .lastNameLogo{
    }
`;

export const IconLogo = styled.div`
    color: var(--header-color-dark);
    font-family: var(--fontfamily-header);
    font-size: var(--fontsize-header);
    font-weight: var(--fontweight-header);
`;

export const List = styled.ul`
    display:flex;
    justify-content:center;
    gap: 5rem;
`;

export const Items = styled(Link)`
    & p{
        text-transform:uppercase;
        color:var(--header-color-dark);
        font-size: var(--fontsize-header);
        font-family: var(--fontfamily-header);
        font-weight: var(--fontweight-header);
        text-transform: capitalize;
        letter-spacing: 0.145em;
    }
`;
