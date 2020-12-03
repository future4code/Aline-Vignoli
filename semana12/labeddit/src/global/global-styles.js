import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
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