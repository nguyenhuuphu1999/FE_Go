import React from 'react'
import Apartment from './Apartment'
// import { apartmentList } from '../../FakeData/data'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 1350,
    margin: 'auto',
    marginTop: 122,
  },
}))

export default function ApartmentList({apartments}) {
  const classes = useStyles()

  return (
    <div className="container">
      <div className={classes.root}>
        <Grid container spacing={3} align="center">
          {apartments.map(apartment => (
            <Grid item xs={12} md={3}>
              <Link to={`/home-stay?apartmentId=${apartment._id}`}>
                <Apartment {...apartment} />
              </Link>
              {/* react router query params */}
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  )
}
