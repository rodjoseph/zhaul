import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ProTip from "../../src/ProTip";
import Link from "../../src/Link";
import Copyright from "../../src/Copyright";
import BookingStepper from "../../components/newbooking";
import { Auth } from '@supabase/ui'
import {
  Alert,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField
} from "@material-ui/core";
import { supabase } from "../../constants/supabase";
import { Truck } from "../../types/types";
import Layout from "../../components/layout";

export default function Booking() {
  const [startDateTime, setStartDateTime] = React.useState();
  const [endDateTime, setEndDateTime] = React.useState();
  const [availableTrucks, setAvailableTrucks] = React.useState<Truck[]>()
  const [selectedTruckType, setSelectedTruckType] = React.useState("")
  const [submissionError, setSubmissionError] = React.useState(false)
  const [bookingSuccessful, setBookingSuccessful] = React.useState(false)

  const getAvailableTrucks = async () => {
    const { data, error } = await supabase
      .rpc('get_available_trucks', {start_datetime: startDateTime, end_datetime: endDateTime })
    if(data) {
      setAvailableTrucks(data)
      console.log(JSON.stringify(data))
    }
    else {
      console.log(error?.message)
    }
  }
  const { user } = Auth.useUser();

  React.useEffect(() => {
    if(startDateTime && endDateTime) {
      getAvailableTrucks()
    }
  }, [startDateTime, endDateTime])

  const submitAndConfirm = async () => {
    const { data, error } = await supabase
      .rpc('create_new_booking', {start_datetime: startDateTime, end_datetime: endDateTime, truck_type: selectedTruckType, user_id: supabase.auth.user()?.id })
    if(data) {
      //Navigate to confirmation page with new booking id
      setBookingSuccessful(true)
    }
    else {
      console.log(error?.message)
      setSubmissionError(true)
    }
  }

  if (!user) return <Auth supabaseClient={supabase} providers={['google', 'github']}/>;
  return (
    <Layout>
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Make a booking
        </Typography>
        {/* <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button> */}
        <form noValidate>
          <TextField
            id="datetime-local"
            type="datetime-local"
            label="Start"
            value={startDateTime}
            onChange={(e: any) => setStartDateTime(e.target.value)}
            InputLabelProps={{
              shrink: true
            }}
            sx={{my: 2}}
          />
          <TextField
            id="datetime-local"
            type="datetime-local"
            label="End"
            value={endDateTime}
            onChange={(e: any) => {setEndDateTime(e.target.value); console.log(endDateTime)}}
            InputLabelProps={{
              shrink: true
            }}
            sx={{my: 2}}
          />
          {startDateTime && endDateTime && availableTrucks ?
            <Box sx={{m: 2}}>
              <FormLabel component="legend">Truck Type</FormLabel>
              <RadioGroup aria-label="truck-type" name="trucktype1" value={selectedTruckType}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setSelectedTruckType((event.target as HTMLInputElement).value);
                }}>
                <FormControlLabel value="1" control={<Radio />} label="Small" disabled={!availableTrucks?.some((t: Truck) => t.truck_size == 1)}/>
                <FormControlLabel value="2" control={<Radio />} label="Medium" disabled={!availableTrucks?.some((t: Truck) => t.truck_size == 2)}/>
                <FormControlLabel value="3" control={<Radio />} label="Large" disabled={!availableTrucks?.some((t: Truck) => t.truck_size == 3)}/>
                <FormControlLabel value="4" control={<Radio />} label="Extra Large" disabled={!availableTrucks?.some((t: Truck) => t.truck_size == 4)}/>
              </RadioGroup>
              </Box> : <></>
          }
          {startDateTime && endDateTime && selectedTruckType ?
          <Button variant="contained" onClick={submitAndConfirm} sx={{my: 2}}>Submit</Button> : <></>
          }
        </form>

        {
          bookingSuccessful? <Alert severity="success">Booking successful. Look at it in <Link href="/mybookings" passHref><a>my bookings</a></Link>!</Alert> : <>
                  {
          submissionError ? <Typography variant="body2" color="error">There was an error with your submission</Typography> : <></>
        }
          </>
        }
        <ProTip />
        <Copyright />
      </Box>
    </Container>
    </Layout>
  );
}
