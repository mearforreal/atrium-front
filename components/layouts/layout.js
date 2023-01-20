import {createStyles} from '@mantine/core';
import Header from './header';
import Footer from './footer';

const useStyles = createStyles(() => ({
    container: {
        // paddingTop: '96px',
    },
}));

export default function Layout({children}) {
    const {classes} = useStyles();
    return(
        <div className={classes.container}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}