import styled from "styled-components";

export const BoardWpr = styled.div`
    width:100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const BoardComp = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    gap:10px;
    /* border: 2px solid red; */
`
export const Box = styled.div`
    width:100px;
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: ${({ cursor }) => cursor ? 'not-allowed' : 'pointer'};
    border:2px solid green;
    `

export const MsgComp = styled.div`
    width:330px;
    text-align:center;
    padding-bottom: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* border:2px solid green; */
    font-size: 30px;
    `
export const Text = styled.p`
    font-size: 30px;

    `;
export const Button = styled.button`
    padding:  10px;
    `;