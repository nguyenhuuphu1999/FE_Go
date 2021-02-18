import React from "react";

import { personalApartmentList } from "../../FakeData/data";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import  SpecificApartment from '../homepage_component/NearbyLocationItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1350,
    margin: 'auto',
    marginTop: 83
  },
  h3Style: {
      marginLeft: 30,
      fontSize: 27,
      marginBottom: 63
  }
}));

export default function PersonalApartment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h3 className={classes.h3Style}>Chỗ ở gần bạn</h3>
      <Grid container spacing={3} align="center">
        {personalApartmentList.map((hotel) => (
          <Grid item xs={12} md={3}>
            <SpecificApartment {...hotel} />
          </Grid>
        ))}
      </Grid>
    </div>
  );

}
