import styled from "styled-components";

const CardTitle = styled.h3`
    border: 1px solid black;
    margin: 0;
`

const CardBody = styled.section`
    box-shadow: inset 5px 5px 5px lightgray;
`

const NavBar = styled.nav`
    background-color: #6D8DA1;
    
`

const NavText = styled.button`
    color: #EDE1D0;
    border: 0;
    background-color:  #6D8DA1;
    &:visited{
        color: #EDE1D0;
    }
`

export {CardTitle, CardBody, NavBar, NavText};