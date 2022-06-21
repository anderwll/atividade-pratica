import styled from "styled-components";

const FooterStyled = styled.footer`
    width: 100vw;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color:  ${props => props.theme.backgroundColor};
    color:  ${props => props.theme.color};

    li {
    list-style: none;
    display: inline-flex;
    margin: 10px;
    }

    small {
        margin-left: 10px;
    }

    a {
        text-decoration: none;
        color:  ${props => props.theme.primary};
        font-size: 20px;
    }

    .icons-social-midia {
        margin-left: 10px;
        font-size: 35px;
        color:  ${props => props.theme.primary};
    }
`
export default FooterStyled;