import DehazeIcon from '@mui/icons-material/Dehaze';
import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';
import { MenuButon } from '../../styles/Buttons';
import logo from './../../img/logo1.png';
import { StyledNavBar } from './style';

export const Header = () => {
    const { setShowModal } = useContext(UserContext);
    return (
        <StyledNavBar>
            <img src={logo} alt='logo-quick-fix' />
            <nav>
                <MenuButon onClick={() => setShowModal(true)}>
                    <DehazeIcon />
                </MenuButon>
            </nav>
        </StyledNavBar>
    );
};
