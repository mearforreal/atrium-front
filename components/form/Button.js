import {createStyles, Button as MButton} from '@mantine/core';
import {Colors} from '../../styles/colors';

const useStyles = createStyles(() => ({
    button: {
        background: Colors.BLUE,
        borderRadius: '8px',
    }
}));

export default function Button({label, onClick}) {
    const {classes} = useStyles();
    return (
        <MButton className={classes.button} onClick={onClick} {...props} >
            {label}
        </MButton>
    )
}