import { Link } from 'react-router-dom';
import { Footer } from '../../components/Footer';

import { Header } from '../../components/Header';
import { ContainerPattern } from '../../styles/Containers';
import { StyledDiv } from './style';

export const Home = () => {
    return (
        <>
            <Header />
            <StyledDiv>
                <main>
                    <h1>Seu celular quebrou?</h1>
                    <img src='https://i.ibb.co/jbSwSrN/cell.png' alt='img-home' />
                    <p>
                        Não fique preocupado, o seu problema tem solução, oferecemos o melhor
                        serviço tecnico de celular do brasil e com um orçamento que cabe no seu
                        bolso.
                    </p>
                    <Link to={'/dashboard'}>
                        <ContainerPattern>
                            <span>
                                Procure empresas proximas a sua localização e faça já o seu
                                orçamento!
                            </span>
                            <img
                                src='https://malhariaseatextil.com.br/wp-content/uploads/2022/04/seta-300x240.png'
                                alt=''
                            />
                        </ContainerPattern>
                    </Link>
                </main>
                <Footer />
            </StyledDiv>
        </>
    );
};
