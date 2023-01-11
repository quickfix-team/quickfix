import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { StyledDashBoard } from './style';

export const Dashboard = () => {
    return (
        <>
            <Header />
            <StyledDashBoard>
                <Search />
            </StyledDashBoard>
        </>
    );
};
