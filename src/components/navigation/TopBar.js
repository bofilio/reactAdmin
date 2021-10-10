import React from 'react'
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider } from '@mui/material';
import { Badge } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
//redux parts
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useSelector } from 'react-redux';
import { useAction } from '../../state/hooks/useAction';
import { Avatar } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';



const TopBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open_menu = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const { onMobile } = useSelector(state => state.ui.window)
    const { open, width: sideBarWidth } = useSelector(state => state.ui.sidebar)
    const { toggoleSideBar } = useAction();
    const handleDrawerOpen = () => {
        toggoleSideBar(true);
    };
    const themee =useTheme();
    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({

        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            boxShadow: '0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important',
            width: `calc(100% - ${sideBarWidth}px)`,
            marginLeft: `${sideBarWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: '#fff' }} open={open}>
                <Toolbar sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }) }}>
                        <MenuIcon />
                    </IconButton>
                    <i style={{ flexGrow: 1 }}></i>
                    <IconButton>
                        <Badge badgeContent={4} max={3} color='error'>
                            <NotificationsIcon fontSize='small' color="secondary" />
                        </Badge>
                    </IconButton>
                    <IconButton sx={{ ml: 2 }} >
                        <Badge badgeContent={2} color='error'>
                            <EmailIcon fontSize='small' color='secondary' />
                        </Badge>
                    </IconButton >
                    <Divider orientation="vertical" variant="middle" sx={{ ml: 2, mr: 2 }} flexItem />
                    <Typography variant="body1" >David</Typography>
                    <Tooltip title="Account settings">
                        <IconButton sx={{ ml: 2,mr:2, p: 0 }} >
                            <Avatar src='/profile.png' onClick={handleClick} /> 
                        </IconButton >
                        
                    </Tooltip>
                 

                </Toolbar>

                <Menu open={open_menu} onClose={handleClose} onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible', filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))', mt: 6, ml: -2,
                            '& .MuiAvatar-root': { width: 32, height: 32, ml: -0.5, mr: 1, },
                            '&:before': {
                                content: '""', display: 'block', position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                >
                    <MenuItem>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>
                </Menu>

            </AppBar>

        </>
    )
}

export default TopBar
