import { reverse } from 'dns';
import * as React from 'react';
import styled from 'styled-components';
import BoxImage from '../BoxImage/BoxImage';
import SecaoContentStyled from './SecaoContentStyled';

interface SecaoContentProps  {
    titulo: string,
    texto: string,
    reverse?: boolean,
    imagem: string
};

const SecaoContent: React.FC<SecaoContentProps> = ({titulo, texto, reverse, imagem}) => {
    return (
        <SecaoContentStyled ordem={reverse}>
            <div className='container-text'>
                <h2>{titulo}</h2>
                <p>{texto}</p>
            </div>
            <BoxImage imagem={imagem} />   
        </SecaoContentStyled>
    );
};

export default SecaoContent;