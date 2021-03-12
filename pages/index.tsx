import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Layout from "~/components/layout/layout";
import Link from "next/link";
import { Button, Typography, TextField, Paper, Grid } from '@material-ui/core';

const myStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    marginTop: '20vh'
  }
}));

const Page: React.FC = () => {
  const classes = myStyle();

  return (
    <Layout pageTitle="helloo">
      <Paper className={classes.paper}>
        <Grid container spacing={2} justify="center" alignItems="center" direction="column" style={{ minHeight: '60vh'}}>
          <Typography variant="h4" gutterBottom>
            Hi
          </Typography>
          <Link href="/favicon.ico">
            <Button variant="outlined" color="secondary">
              Favicon
            </Button>
          </Link>
          <Link href="/apk/app1.apk">
            <Button variant="outlined" color="secondary">
              APK
            </Button>
          </Link>
        </Grid>
      </Paper>
    </Layout>
  );
};


// app1.apk
// favicon.ico
export default Page;