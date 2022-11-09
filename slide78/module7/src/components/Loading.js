import CircularProgress from '@mui/material/CircularProgress'
import { Container, Grid } from '@mui/material'
import Box from '@mui/material/box'

export default function Loading() {
  return (
    <Container style={{ justifyContent: 'center' }}>
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            </Grid>
        </Grid>
    </Container>
  )}

