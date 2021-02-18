import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { couponList } from "../../FakeData/data";
import Coupon from "./Coupon"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 1350,
    margin: 'auto',
    marginTop: 83,
  },
  h3Style: {
      marginLeft: 30,
      fontSize: 27,
      marginBottom: 63
  }, 
  gridStyle: {
    margin: '0 50px',
  }
}));

export default function Coupons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <h3 className={classes.h3Style}>Uu dai hom nay</h3>
      <Grid className={classes.gridStyle} container spacing={3}>
        {couponList.map((coupon) => (
          <Grid item xs={12} md={6}>
            <Coupon {...coupon} />
          </Grid>
        ))}
      </Grid>
    </div>
  );

}
