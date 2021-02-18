import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

//rating
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles({
  root: {
    maxWidth: 288,
    maxHeight: 345,
    color: 'black',
    fontSize: '16px',
    fontWeight: 200
  },
  media: {
    height: 220,
    width: 288,
    borderRadius: 41,
    marginBottom: '5px'
  },
  priceStyle: {
    marginTop: '0px'
  },
  ratingStyle: {
    marginBottom: '0px'
  }

})
function NearbyLocationItem({
  apartment_name,
  image_url,
  ratings,
  address,
  price,
  apartment_image
}) {
  const classes = useStyles()

  return (
    <CardActionArea className={classes.root}>
      <CardMedia
        className={classes.media}
        image={ image_url ?? apartment_image.url_image }
        title="Contemplative Reptile"
      />
      <Typography gutterBottom align="center" component="h3">
        {apartment_name}
      </Typography>
      <Typography
        align="center"
        variant="body2"
        color="textSecondary"
        component="p">
        {address}
      </Typography>
      <CustomRating ratings={ratings} />
      <Typography className={classes.priceStyle}
        align="center"
        variant="body2"
        color="textSecondary"
        component="p">
        Giá: {price}$/đêm
      </Typography>     
    </CardActionArea>
  )
}

export default NearbyLocationItem

//rating
export function CustomRating({ ratings }) {

  const classes = useStyles()
  return (
    <div>
      <Box className={classes.ratingStyle} component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={ratings} readOnly />
      </Box>
    </div>
  )
}
