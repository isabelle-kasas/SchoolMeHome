import styled from 'styled-components';
import { colors } from '../../colors';
import logo from '../../image/logofake.png';

export const HeaderStyle = styled.header`
    background-color: ${colors.mediumdark};
    height: 100px;
    width: 100%px;
    display: flex;
`;

export const LogoHeader = styled.div`
    background-image: url(${logo});
    width: 200px;
    height: 100px;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5%;
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: ${colors.light};
    font-size: 1.5rem;
    &:hover{
        color: ${colors.mediumlight}
    }
`;

