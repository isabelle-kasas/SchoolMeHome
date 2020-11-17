import React from 'react';
import { HeaderStyle, LogoHeader, Navbar, NavLink } from './headerstyle';

export default function Header (){
    return (
        <HeaderStyle>
            <LogoHeader/>
            <Navbar>
                <NavLink href="/plannings">Plannings</NavLink>
            </Navbar>
        </HeaderStyle>
    )
}