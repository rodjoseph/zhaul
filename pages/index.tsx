import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Copyright from "../src/Copyright";
import BookingStepper from "../components/newbooking";
import { Auth } from "@supabase/ui";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";

export default function Booking() {
  const [timePickersVibible, setTimePickersVisible] = React.useState(false);
  const [startDate, setStartDate] = React.useState(false);
  const [endDate, setEndDate] = React.useState(false);
  const [startTime, setStartTime] = React.useState(false);
  const [endTime, setEndTime] = React.useState(false);

  const { user } = Auth.useUser();
  if (!user) return <Auth supabaseClient={supabase} />;
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5-beta with TypeScript example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <form noValidate>
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="datetime-local"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            id="datetime-local"
            label="Next appointment"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
          />
          <FormControl component="fieldset">
            <FormLabel component="legend">Truck Type</FormLabel>
            <RadioGroup aria-label="truck-type" name="trucktype1">
              <FormControlLabel value="1" control={<Radio />} label="Type 1" />
              <FormControlLabel value="2" control={<Radio />} label="Type 2" />
              <FormControlLabel value="3" control={<Radio />} label="Type 3" />
              <FormControlLabel value="4" control={<Radio />} label="Type 4" />
            </RadioGroup>
          </FormControl>
        </form>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
