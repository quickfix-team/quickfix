import DehazeIcon from '@mui/icons-material/Dehaze';
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import { MenuButon } from '../../styles/Buttons';
import logo from './../../img/logo1.svg';
import { StyledNavBar } from './style';

export const Header = () => {
    const { setShowModal } = useContext(UserContext);
    return (
        <StyledNavBar>
            <div>
                <img src={logo} alt='logo-cell-tech' />
                <h1>CellTechAss</h1>
            </div>
            <nav>
                <MenuButon onClick={() => setShowModal(true)}>
                    <DehazeIcon />
                </MenuButon>
            </nav>
        </StyledNavBar>
    );
};
