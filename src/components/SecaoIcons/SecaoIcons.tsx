import * as React from 'react';
import { BsBoxSeam, BsCheckCircle, BsLaptop } from 'react-icons/bs';
import styled from 'styled-components';
import ContainerIcon from '../ContainerIcon/ContainerIcon';

interface SecaoIconsProps {
    
};

const SecaoIconsStyled = styled.div`
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.theme.backgroundColor};
    color:  ${props => props.theme.color};
`

const SecaoIcons: React.FC = (props) => {
    return (
        <SecaoIconsStyled>
            <ContainerIcon icon={<BsLaptop />} titulo='Somente para laptop' texto='Vamos aprender a utilizar um framework' />
            <ContainerIcon icon={<BsBoxSeam />} titulo='Criado com componetes' texto='Utilizamos o Styled componetes' />
            <ContainerIcon icon={<BsCheckCircle />} titulo='Facil aproveitamento' texto='Estamos no caminho' /> 
        </SecaoIconsStyled>
    );
};

export default SecaoIcons;