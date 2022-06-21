import styled from "styled-components";

interface BoxImagePros {
    imagem: string
}

const BoxImage = styled.div<BoxImagePros>`
    width: 50vw;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${props => props.imagem});
`

export default BoxImage