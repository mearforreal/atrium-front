import {createStyles} from '@mantine/core';
import React, {useMemo} from 'react';

const useStyles = createStyles(() => ({
    container: {
        maxWidth: '1400px',
        margin: '0 auto',
        padding: '0 7vw',
        width: '100%',
        height: '100%',
    },
    flexColCenter: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
    }
}));

function ContentContainer({props}) {
    const {classes} = useStyles();

    const className = useMemo(() => {
        const classNames = [classes.container, props.className];

        if (props.flexColCenter) {
            classNames.push(classes.flexColCenter)
        }

        return classNames.join(' ');
    }, [
        classes.container,
        classes.flexColCenter,
        props.className,
        props.flexColCenter
    ])

    if (props.isSection) {
        return (
            <section id={props.id} className={className}>
                {props.children}
            </section>
        )
    }

    return (
        <div id={props.id} className={className}>
            {props.children}
        </div>
    )
}

ContentContainer.defaultProps = {
    isSection: false,
    flexColCenter: false,
}

export default ContentContainer