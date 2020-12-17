import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import { primaryColor } from '../constants/colors';

export const MainContainer = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const FlexBox = styled.div`
    margin-top: ${props => props.postPage ? "100px" : "40px"};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

export const FlexForm = styled.form`
    display: flex;
    flex-direction: ${props => props.row ? "row" : "column"};
    width: 85vw;
    max-width: ${props => props.medium ? "360px" : "100%"};
    gap: 20px;
`

export const TextFieldCommentForm = styled(TextField)`
    flex-grow: 1;
`

export const Img = styled.img`
    width: 40vw;
`

export const ErrorMessage = styled.h3`
    color: ${primaryColor};
`