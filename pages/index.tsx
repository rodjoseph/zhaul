import { Button, Container, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";

export default function Index() {
    return(
        <Layout>
        <Container maxWidth="md" sx={{alignItems: 'center'}}>
            <Typography variant="h2" align="center">
                Move with ease
            </Typography>
            <Typography color="inherit" align="center" variant="h5">
                Use our moving service to rent a truck.
            </Typography>
            <Link href="/booking" passHref>
                <Button
                    color="secondary"
                    variant="contained"
                    size="large"
                    component="a"
                >
                    Book us now
                </Button>
            </Link>
            <Typography variant="body2" color="inherit">
                Discover the experience
            </Typography>
      </Container>
      </Layout>
    )
}