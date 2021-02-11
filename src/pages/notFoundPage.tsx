import { Button, Container } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import { PageWrapper } from "./shared/mainWrapper";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Home } from "@material-ui/icons";
import SimpleTabs from "./shared/tabPanel";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        header: {
            fontSize: '20em'
        },
        home: {
            textDecoration: 'none'
        }
    }),
);

interface INotFound {
    message?: string
}

export const Page404 = ({ message = 'Page not found' }: INotFound) => {
    const classes = useStyles();

    return (
        <PageWrapper>
            <Container className={classes.root}>
                <SimpleTabs />
                <div className={classes.header}>404</div>
                <h1>{message}</h1>
                <NavLink to='/' className={classes.home}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        startIcon={<Home />}
                    >
                        HOME
                    </Button>
                </NavLink>
            </Container>
        </PageWrapper>
    )
}