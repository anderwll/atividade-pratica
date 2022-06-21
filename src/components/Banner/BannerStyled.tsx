import * as React from 'react';

import styled from 'styled-components';
import img1 from '../../assets/image/ocean.jpg'

interface BannerProps {
    tamanho?: boolean;
}

const HeaderStyled = styled.header<BannerProps>`
    background-image: url(${img1});
    background-repeat: no-repeat;
    background-size: 100% 150%;
    width: 100vw;
    height: ${props => props.tamanho ? '30vh' : '50vh'};
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        color: #fff;
    }
    
`

export default HeaderStyled;