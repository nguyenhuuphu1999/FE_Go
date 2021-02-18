import React from 'react'
import { Link } from 'react-router-dom'

// import { famousPlaceList } from '../../FakeData/data'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import FamousPlace from './FamousPlace'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchHomes } from '../../store/home'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    maxWidth: 1350,
    margin: 'auto',
    marginTop: 112,
  },
  h3Style: {
    marginLeft: 30,
    fontSize: 27,
    marginBottom: 46,
  },
}))

export default function FamousPlaces() {
  const classes = useStyles()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHomes())
  }, [dispatch])

  const famousPlaces = useSelector(state => state.home.diaDiemNoiBat)


  return (
    <div className={classes.root}>
      <h3 className={classes.h3Style}>Địa điểm nổi bật</h3>
      <Grid container spacing={3} align="center">
        {famousPlaces.map(famousPlace => (
          <Grid item xs={12} md={3}>
            <Link
              to={`/famous-place?famousPlaceId=${famousPlace._id}`}>
              <FamousPlace famousPlace={famousPlace} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
