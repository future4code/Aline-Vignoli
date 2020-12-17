import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CustomCardContent = (props) => {
    return (
        <CardContent>
            <Typography variant="h5" color="textSecondary" component="h5">
                {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.text}
            </Typography>
        </CardContent>
    )
}

export default CustomCardContent;