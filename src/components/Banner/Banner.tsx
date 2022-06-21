import * as React from 'react';

import BannerStyle from './BannerStyle';

interface BannerProps {
    titulo: string,
    footer?: boolean
}

const Banner: React.FC<BannerProps> = ({titulo, footer}) => {
    return (
        <BannerStyle tamanho={footer}>
            <h1>{titulo}</h1> 
        </BannerStyle>
    );
};

export default Banner;