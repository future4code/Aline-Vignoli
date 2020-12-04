import styled from 'styled-components';
import Card from '@material-ui/core/Card';

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

export const StyledPostCard = styled(Card)`
    width: 50vw;
    min-width: 340px;
`

export const StyledCommentCard = styled(Card)`
    width: 80%;
    min-width: 260px;
    margin: 20px 20px 20px auto;
`