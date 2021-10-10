import React from 'react'
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import Table from './crud/List';
import PieChart from './charts/pie/Pie'
import { Switch,Route} from 'react-router-dom'
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
            <Switch>
                <Route path='/dashboard' exact >
                    <PieChart/>
                </Route>
                <Route path='/data' exact >
                    <Table/>
                </Route>
            </Switch>
        </Main>
    )
}

export default Index
