import * as React from 'react';

import ContainerIconStyled from './ContainerIconStyled';

interface SectionIconProps {
    icon: React.ReactNode,
    titulo: string,
    texto: string
}

const SectionIcon: React.FC<SectionIconProps> = ({icon, titulo, texto}) => {
    return (
        <ContainerIconStyled>
            <span>{icon}</span>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </ContainerIconStyled>
    );
};

export default SectionIcon;