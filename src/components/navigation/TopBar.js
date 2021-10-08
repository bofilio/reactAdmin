import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchInput from './SearchInput';
import { styled, useTheme } from '@mui/material/styles';
//redux parts
import { useSelector } from 'react-redux';
import { useAction } from '../../state/hooks/useAction';
//



const TopBar = () => {
    const {onMobile}=useSelector(state=>state.ui.window)
    const {open,width:sideBarWidth} = useSelector(state => state.ui.sidebar)
    const { toggoleSideBar } = useAction();
    const handleDrawerOpen = () => {
        toggoleSideBar(true);
    };
  
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width:`calc(100% - ${sideBarWidth}px)`,
            marginLeft: `${sideBarWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    return (
        <AppBar position="fixed" open={open}>
            <Toolbar>
                <IconButton onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default TopBar
