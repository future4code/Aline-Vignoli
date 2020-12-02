import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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

export const CommentsContainer = styled(CardContent)`
    width: 100%;
    display: flex;
    gap: 20px;
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