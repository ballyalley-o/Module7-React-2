import { Card, CardContent, Typography } from "@mui/material"

const SearchDetails = (props) =>     {
  return (
    <Card key={Math.random()} style={{ marginTop: 5 }}>
      <CardContent>
        <Typography style={{ fontSize: 14 }} gutterBottom>
          " <i>{props.nickname}</i> "
        </Typography>
        <Typography style={{ fontSize: 20 }}>{props.name}</Typography>
        <Typography variant="body2">{props.status}</Typography>
      </CardContent>
    </Card>
  );}

export default SearchDetails
