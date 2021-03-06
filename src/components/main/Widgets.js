import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AreaSample from './charts/area/Area';
import PieSample from './charts/pie/Pie'
import DataGridProDemo from './crud/List';
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item><AreaSample/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item><PieSample/></Item>
        </Grid>    
      </Grid>
      <DataGridProDemo/>
    </Box>
   
  );
}