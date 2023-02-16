import React from 'react';
import './App.css';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SiteBar from './components/SiteBar';
import MainContainer from 'components/main';
import { Grid } from '@mui/material';

function App() {

  return (
    <Grid2>
       <Grid sx={{ flexGrow: 2 }} container spacing={2}  >
         <Grid backgroundColor="#455a64" item xs={12} sm={6} md={4} lg={4} xl={4} >
            <SiteBar/>
            </Grid>
            <Grid backgroundColor="#f5f7f5"item xs={12} sm={6} md={8} lg={8} xl={8}>
            <MainContainer/>
            </Grid>
      </Grid>      
    </Grid2>
   
  );
}

export default App;
