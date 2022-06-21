import styled from "styled-components";

interface SectionProps {
    ordem?: boolean
}

const SecaoContentStyled = styled.section<SectionProps>`
    width: 100vw;
    height: 50vh;
    display: flex;
    align-items: center;
    background-color:  ${props => props.theme.backgroundColor};
    color:  ${props => props.theme.color};
    flex-direction: ${props => props.ordem? 'row-reverse' : 'row'};

    .container-text {
        width: 50vw;
        padding: 50px;

        h2 {
            margin-bottom: 10px;
        }

        p {
            text-align: justify;
        }
}
`

export default SecaoContentStyled;