import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  stylesGrid: {
    flexGrow: 1,
  },
  button1: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    fontSize: '16px'
  },
  button2: {
    border: '1px solid orange',
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'black',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    fontSize: '16px'
  },
  button3: {
    background: '#3FAADF',
    border: 0,
    borderRadius: 23,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginBottom: 10,
    display: 'block',
    fontSize: '16px'
  },
  imgStyle: {
    borderRadius: 30,
    width: '100%',
  },
  alignItem : {
    margin: '10px auto',
    height: '50px'
  },
  pStyles: {
    textAlign: 'center'
  }
})

const Coupon = ({address,image_url, sale_off, exp_date}) => {
  const classes = useStyles()
  return (
    <div className={classes.stylesGrid}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <img className={classes.imgStyle}src={image_url} alt="" />
          <p className={classes.pStyles}>{address}</p>
        </Grid>
        <Grid item xs={6} className={classes.alignItem}>
          <Button className={classes.button1}>Giảm giá {sale_off}</Button>
          <Button className={classes.button2}>{exp_date}</Button>
          <Button className={classes.button3}>Nhận Voucher</Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default Coupon
