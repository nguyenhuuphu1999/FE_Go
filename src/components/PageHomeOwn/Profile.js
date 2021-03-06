import React, { useState,useEffect } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Input from '../Input/InputBGWhile' 
import axios from 'axios';

const Profile = (props) => {

    const [hidden,setHidden] = useState(
      {
        name:false,
        phoneNumber:false,
        createAt:false,
        about:false
      }
    )

    const [value,setValue] = useState({
        full_name:"",
        phone_number:'',
        created_at:'',
        description:'',
        avatar:''
    })

    // const handleEdit = (value) =>{
    //    console.log(value)
    //    console.log(hidden.value)
    //     if(hidden.value == true){
    //         setHidden(item=>({...item,value:false}))
    //     }else{
    //         setHidden(item=>({...item,value:true}))
    //     }
      
    // }
    const handleEditName = () =>{
       
         if(hidden.name){
             setHidden(item=>({...item,name:false}))
         }else{
             setHidden(item=>({...item,name:true}))
         }
     }

     const handleEditphone = () =>{
       
        if(hidden.phoneNumber){
            setHidden(item=>({...item,phoneNumber:false}))
        }else{
            setHidden(item=>({...item,phoneNumber:true}))
        }
    }
    const handleEditCreateAt = () =>{
       
        if(hidden.createAt){
            setHidden(item=>({...item,createAt:false}))
        }else{
            setHidden(item=>({...item,createAt:true}))
        }
    }

    const handleEditAbout = () =>{
       
        if(hidden.about){
            setHidden(item=>({...item,about:false}))
        }else{
            setHidden(item=>({...item,about:true}))
        }
    }
    

    const OnChangeName =(e)=>{
        const {value,name} = e.target
        setValue((item)=>({
            ...item,[name]:value
        }))

        console.log(name)
    }

    const OnChangephoneNumber = (e)=>{
        const {value,name} = e.target
        setValue((item)=>({
            ...item,[name]:value
        }))
    }
   const [flag , setFlag] = useState(false)
   const [id , setid] = useState(false)
    useEffect(async()=>{
      var id =window.location.search.split('=')[1]
        await setid(id);
        axios.get(process.env.REACT_APP_API_URL+"/profile/"+id)
        .then((response)=>{
            console.log(response.data)
            setValue({
                full_name:response.data.data.full_name,
                phone_number:response.data.data.phone_number,
                created_at:response.data.data.created_at,
                description:response.data.data.description,
                avatar:response.data.data.avatar
            })
        })
        .catch((err)=>{
            console.log(err)
        })
        setFlag(true)
    },[])

    if(!props.edit && flag == true){
        console.log(process.env.REACT_APP_API_URL+"/profile/"+id)
        console.log(value)

       axios.put(process.env.REACT_APP_API_URL+"/profile/"+id , value)
       .then((res)=>{
           console.log(res)
       })
       .catch((err)=>{
           console.log(err)
       })
    }

  if(props.edit){
    return (

        <>
         
             <div  className=" grid  2xl:grid-cols-2  xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 profile" style={{marginTop:'117px'}}  >
                     
                     <div style={{marginTop:"20px"}} >
                         <img style={{borderRadius:"150px" , height:"200px"}} src={value.avatar}></img>
                     </div>
                     <div style={{marginTop:"20px"}}>
                           <div >
                             {/* color="primary" onClick={()=>handleEdit('name')}> */}
                                 {
                                     (hidden.name == false)?
                                    <div >
                                         <b style={{fontSize:"24px",fontWeight:600}}>{value.full_name}</b >
                                         <Button name="ndsdsdsame" variant="outlined" style={{border:"none" , outline:"none" , float:'right'}} color="primary" onClick={handleEditName}>
                                       
                                             <EditIcon/>
                                         </Button>
                                    </div>:
                                    <div style={{display:'flex'}}>
                                         <Input value={value.full_name} onChange={OnChangeName} name="full_name"/>
                                         <Button variant="outlined" style={{border:"none" , outline:"none", float:'right'}} color="primary" onClick={handleEditName}>
                                             <SaveAltIcon/>
                                         </Button>
                                    </div>
     
                                 }
                           </div>
     
     
                             <div style={{marginTop:"2%"}}>
                                 
                                 {
                                     (hidden.phoneNumber == false)?
                                    <div>
                                    <b style={{fontWeight:'500'}}>Điện Thoại </b>: {value.phone_number}
                                         <Button variant="outlined" style={{border:"none" , outline:"none", float:'right'}} color="primary" onClick={handleEditphone}>
                                             <EditIcon/>
                                         </Button>
                                    </div>:
                                    <div style={{display:'flex'}} >
                                         <b style={{fontWeight:500,width:'113px'}}>Điện Thoại</b>: 
                                         <Input value={value.phone_number} onChange={OnChangephoneNumber} name="phone_number"/>
                                         <Button variant="outlined" style={{border:"none" , outline:"none" , float:'right'}} color="primary" onClick={handleEditphone} >
                                             <SaveAltIcon/>
                                         </Button>
                                    </div>
     
                                 }
                                
                              </div>
     
                              <div style={{marginTop:"2%"}}>
                                 
                                 {
                                     (hidden.createAt == false)?
                                    <div >
                                         <div><b style={{fontWeight:500}}>Đã tham gia </b>: {value.created_at}
                                        
                                             <Button variant="outlined" style={{border:"none" , outline:"none", float:'right'}} color="primary" onClick={handleEditCreateAt}>
                                                 <EditIcon/>
                                             </Button>
                                         </div>
                                    </div>:
                                    <div style={{display:'flex'}}>
                                         <b style={{fontWeight:500,width:'150px'}}>Đã tham gia </b>: <Input value={value.created_at} onChange={OnChangeName} name="created_at"/>
                                         <Button variant="outlined" style={{border:"none" , outline:"none" , float:'right'}} color="primary" onClick={handleEditCreateAt} >
                                             <SaveAltIcon/>
                                         </Button>
                                    </div>
     
                                 }
                                
                              </div>
     
                            
                             <div style={{margin:'15px 0px'}}>
                             <b style={{fontSize:"21px", fontWeight:600}}>About </b>
                             {
                                 (hidden.about != true)? 
                                 <Button variant="outlined" style={{border:"none" , outline:"none", float:'right'}} color="primary" onClick={handleEditAbout}>
                                     <EditIcon/>
                                 </Button>:
                                 <Button variant="outlined" style={{border:"none" , outline:"none" , float:'right'}} color="primary" onClick={handleEditAbout} >
                                     <SaveAltIcon/>
                                 </Button>
                             }
                             </div>
                             {
                                 (hidden.about != true)?
                                 <div>
                                     <div>{value.description}</div>
                                 </div>
                                :
                                 <textarea id="w3review" rows="4" cols="50" name="description" onChange={OnChangeName}>
                                 {value.description}
                                 </textarea>
                             }
     
                     </div>
                </div>
        </>
 
     );
  }else{
     return(
        <>
        <div  className=" grid  2xl:grid-cols-2  xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 profile" style={{marginTop:'117px'}}  >
                
                <div style={{marginTop:"20px"}} >
                    <img style={{borderRadius:"150px" , height:"200px"}} src={value.avatar}></img>
                </div>
                <div style={{marginTop:"20px"}}>
                      <div >
                            <b style={{fontSize:"24px",fontWeight:600}}>{value.full_name}</b >     
                      </div>


                        <div style={{marginTop:"2%"}}>
                            <b style={{fontWeight:'500'}}>Điện Thoại </b>: {value.phone_number}
                        </div>

                         <div style={{marginTop:"2%"}}>
                             <div><b style={{fontWeight:500}}>Đã tham gia </b>: {value.created_at}</div>
                        </div>

                       
                        <div style={{margin:'15px 0px',display:'flex',flexDirection:'column'}}>
                            <b style={{fontSize:"21px", fontWeight:600}}>About </b>
                        
                               
                                {value.description}
                             
                        

                        </div>
                     </div>   
           </div>
         
        
        </>
     )
  }

    
};

export default Profile;

