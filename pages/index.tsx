import { Button, Container, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";
import Layout from "../components/layout";

export default function Index() {
    return(
        <Layout>
        <Container maxWidth="md" sx={{alignItems: 'center'}}>
            <Typography variant="h3">
                Move with ease
            </Typography>
            <Typography color="inherit" variant="subtitle1">
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
      </Container>
      </Layout>
    )
}