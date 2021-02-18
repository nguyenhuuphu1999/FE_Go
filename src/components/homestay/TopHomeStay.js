import React from 'react'
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import HomeStay from '../homepage_component/NearbyLocationItem'
import { nearbyLocationItemList } from "../../FakeData/data";

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

const TopHomeStay = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
    <h3 className={classes.h3Style}>Khách đánh giá cao vị trí này</h3>
      <Grid container spacing={3} align="center">
        {nearbyLocationItemList.map((nearbyLocationItem) => (
          <Grid item xs={12} md={3}>
            <HomeStay {...nearbyLocationItem} />
          </Grid>
        ))}
      </Grid>
    </div>
    )
}

export default TopHomeStay
