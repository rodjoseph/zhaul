import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Auth } from '@supabase/ui'
import { DataGrid } from '@material-ui/data-grid';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  List, 
  ListItem
} from "@material-ui/core";
import { supabase } from "../../constants/supabase";
import { Booking } from "../../types/types";
import BookingsDataGrid from "../../components/bookingsgrid";
import Copyright from "../../src/Copyright";
import Layout from "../../components/layout";

export default function MyBookingsPage() {
  const [bookings, setBookings] = React.useState<Booking[]>();
  const [loading, setLoading] = React.useState(true)
  
  const fetchBookings = async () => {
    const {data, error } = await supabase.from<Booking>('bookings').select('*').eq('user', supabase.auth.user()?.id).order('end', {ascending: false})
    if(data) {
        setBookings(data)
    }
    else {
        console.log(error?.message)
    }
  }
  const { user } = Auth.useUser();

  React.useEffect(() => {
    fetchBookings().then(() => setLoading(false))
  }, [])

  if (!user) return <Auth supabaseClient={supabase} providers={['google', 'github']}/>;
  return (
    <Layout>
      <Container maxWidth="md">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Your Bookings
          </Typography>
          {/* Add list of bookings that can be managed by the admin */}
          {/* {
              JSON.stringify(bookings)
          } */}
          {bookings ?
            <BookingsDataGrid rows={bookings}/> : <></>
          }
          <Copyright />
        </Box>
      </Container>
    </Layout>
  );
}