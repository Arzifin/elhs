import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        //display: 'flex-row',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    box: {
        margin: 50,
    },
}));

export default function() {
    const styling = useStyles();
    return (
        <div className={styling.root}>
            <ImageCard para={data[0]} className={styling.box}/>
            <ImageCard para={data[1]} className={styling.box}/>
        </div>
    )
}