import * as React from 'react';

import SectionIconStyled from './SectionIconStyled';

interface SectionIconProps {
    icon: React.ReactNode,
    titulo: string,
    texto: string
}

const SectionIcon: React.FC<SectionIconProps> = ({icon, titulo, texto}) => {
    return (
        <SectionIconStyled>
            <span>{icon}</span>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </SectionIconStyled>
    );
};

export default SectionIcon;