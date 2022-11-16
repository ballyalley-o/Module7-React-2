import { Card, CardContent, Typography } from "@mui/material"

const SearchDetails = (props) =>     {
  return (
    <Card key={props.char_id} style={{ marginTop: 5 }}> {/* should use an actual id wherever possible */}
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
