import styled from 'styled-components';

export const CardContainer = styled.div`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    background-color: #CDCDCD;
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 20px;
    border-radius: 10px;
`

export const UpVoteIcon = styled.img`
    width: 20px;
    transform: rotateX(180deg);
`

export const DownVoteIcon = styled.img`
    width: 20px;
`