import React from 'react'
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from './crud/List';
import AreaSample from './charts/area/Area';

//
const Index = () => {
    const { onMobile } = useSelector(state => state.ui.window)
    const { open, width: sideBarWidth } = useSelector(state => state.ui.sidebar)
    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            marginTop: theme.spacing(8),
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: onMobile ? 0 : `-${sideBarWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
        }),
    );

    return (
        <Main open={open}>
          <Table/>
        </Main>
    )
}

export default Index
