import React,{useState,useEffect} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
//redux parts
import { useSelector } from 'react-redux';
import { useAction } from '../../state/hooks/useAction';
import { Typography } from '@mui/material';
//*************** 

const SideBar=()=>{
   
    const {onMobile}=useSelector(state=>state.ui.window)
    const {open,width:sideBarWidth}  = useSelector(state => state.ui.sidebar)
    const { toggoleSideBar } = useAction();
    const handleDrawerClose = () => {
        toggoleSideBar(false);
    };
    const theme=useTheme();
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'space-between',
    }));
    
    return (
        <>
            <Drawer  sx={{ width: sideBarWidth, flexShrink: 0, '& .MuiDrawer-paper': { width: sideBarWidth, boxSizing: 'border-box', }, }}
                variant={onMobile?'temporary':'persistent'}
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                >
                <DrawerHeader>
                    <div style={{flexGrow:1, display:'flex', justifyContent:'start',alignItems:'center'}}>
                        <img height='64' width='auto' src='/logo.png' alt="Logo"/>
                        <Typography variant='h6'>
                            GaloyMoney 
                        </Typography>
                    </div>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            {/*<Drawer  variant="permanent" sx={{ display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: sideBarWidth },
          }}
          open
        ></Drawer>*/}
            </>
    );
}
export default SideBar;