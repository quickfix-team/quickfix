import DehazeIcon from '@mui/icons-material/Dehaze';
import { useEffect, useState } from 'react';

import { MenuButon } from '../../styles/Buttons';
import logo from './../../img/logo1.svg';
import { StyledNavBar } from './style';

export const Header = () => {
    const [tela, setTela] = useState(false);

    return (
        <StyledNavBar>
            <div>
                <img src={logo} alt='logo-cell-tech' />
                <h1>CellTechAss</h1>
            </div>
            <nav>
                <MenuButon>
                    <DehazeIcon />
                </MenuButon>
            </nav>
        </StyledNavBar>
    );
};
