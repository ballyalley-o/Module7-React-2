import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AppRouter } from './routes/routes'
import { Grid, Button } from '@mui/material'


const App = () => {
  const nav = useNavigate()
  return (
    <div>
      <Grid container sx={{ margin: 5 }}>
        <Grid item xs={2} md={4}>
          <Button variant="contained" onClick={() => nav("/home")}>
            HOME
          </Button>
        </Grid>
        <Grid item xs={2} md={4}>
          <Button variant="contained" onClick={() => nav("/search")}>
            SEARCH
          </Button>
        </Grid>
        <Grid item xs={2} md={4}>
          <Button variant="contained" onClick={() => nav("/dashboard")}>
            DASHBOARD
          </Button>
        </Grid>
      </Grid>
      <AppRouter />
    </div>
  )}

export default App
