import styled from "styled-components";

export const BoardWpr = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid;
`

export const BoardComp = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    border: 2px solid red;
`
export const Box = styled.div`
    width:100px;
    height:100px;
    border:2px solid green;
    `