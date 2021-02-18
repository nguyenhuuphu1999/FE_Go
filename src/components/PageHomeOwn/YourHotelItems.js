import React,{useEffect,useState} from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { Link, Redirect } from 'react-router-dom';
import Modal from './AddItem/AddLocation/Modal/Index'
import axios from 'axios';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: "350px",
      marginLeft:"10px",
      display:"flex",
      padding:"10px",
      borderRadius:"10px",
      justifyContent:"center",
      flexDirection:"column",
      marginTop:'30px'
    },
    button_root:{
        display:"flex",
        justifyContent:"center"
        
    }
    ,
   button:{
    width:'120px',
    margin:"10px",
   }
  }));

const YourHotel = (props) => {
    const classes = useStyles();

    const [apartment,setApartment] = useState([])
  
    useEffect(()=>{
        const id = window.location.search.split("=")[1]

       axios.get(process.env.REACT_APP_API_URL+"/apartment/"+id+'?limit=2')
       .then(res =>{
        
           setApartment(res.data.data)
           
       })
       .catch(err=>{
           console.log(err)
       })
    },[])
const [loadPage,setLoadPage] = useState(false)

    const handleRemove = (id,name) =>{

        var key = window.confirm('Bạn có chắc chắn muốn xóa căn hộ ' + name + ' không?');

      
        if(key == true){
            console.log("ee")
            axios.delete(process.env.REACT_APP_API_URL+"/apartment/"+id)
            .then(res=>{
                axios.get(process.env.REACT_APP_API_URL+"/apartment/"+window.location.search.split("=")[1]+'?limit=2')
                .then(response =>{
                 
                    setApartment(response.data.data)
                    console.log(response.data)
                })
                .catch(err=>{
                    console.log(err)
                })
            
            })
            .catch(err=>{
                console.log(err)
            })
        }
        
    }


   
        return (
            <>
               <div class="grid 2xl:grid-cols-3  xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1">
                    {
                        apartment.map((item)=>
                            <Card className={classes.root}>
                        
                                <img style={{borderRadius:"25px", maxHeight:'175px'}} src={item.image_url}></img>
                                <div> {item.apartment_name}</div>
                                <Box component="fieldset" mb={3} borderColor="transparent">
                                    <Rating name="read-only" value={item.ratings} readOnly />
                                </Box>
                            <div className={classes.button_root}>
    
                                    <Button  onClick={()=>{handleRemove(item.id , item.apartment_name)}} className={classes.button} style={{ outline:"none"}} variant="contained" color="secondary">
                                        Xóa
                                    </Button>
                                    <Button className={classes.button} style={{ outline:"none"}} variant="contained" color="primary">
                                        Chỉnh Sửa
                                    </Button>
                        
                        </div>
                    </Card>
                        )
                    }
                   
                     <Card className={classes.root} style={{height:"402px"}}>
    
                           <Modal indexPage={props.indexPage} />
    
                     </Card>
                     
                    
    
    
               </div>
               
              </>
        );
    };
  
    

export default YourHotel;