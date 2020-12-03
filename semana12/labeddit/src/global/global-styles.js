import styled from 'styled-components';

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
`

export const FlexForm = styled.form`
    padding: 20px;
    z-index: 2;
    background: #fff;
    position: fixed;
    margin: 5% auto;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: ${props => props.medium ? "360px" : "100%"};
    gap: 20px;
`