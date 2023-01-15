import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {showEventPopAlert} from '../sharedComponents/Alert/Alert'
import {DeleteUserEvent} from '../Events/EventFunctionalities'
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "../../App";

export default function DashboardEvent({event, suppliers}) {

  const [
    loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
    getAllSupplierData,
    setGetAllSupplierData,
    getAllUserEvent,
    setAllUserEvent,
  ] = React.useContext(UserContext);
  console.log('from dashboard event', event);

    const {date,eventName,guestName, id, imageURL, location,supplierId,UserId,_id} = event
    console.log('from dashboard event', event);

    const supplier = supplierId.map((id, index)=>{

        return suppliers.filter(supplier =>{
   
           if(supplier.id === id){
             return supplier
           }
         })
         
   
       })


       const deleteEvent = async (id) => {
          console.log('delete event', id)
        const deletedUserEvent = await DeleteUserEvent(id)

        if(deletedUserEvent.status === 200){

          const filteredUser = getAllUserEvent.filter((event) => {
            console.log("from dashbaord event table ", event, id);
            return event._id !== id;
          });
          console.log('deleted user event', filteredUser)

          setAllUserEvent(filteredUser);

          toast.success("Event is successfully deleted");
        }
       } 

  return (
    <Card className="me-2 ms-3" sx={{ maxWidth: 300 }}>
    <ToastContainer position="bottom-left" />

      <CardActionArea
      onClick = {()=>showEventPopAlert(event, supplier)}
      >
        <CardMedia
          component="img"
          height="200"
          image={imageURL}
          sx={{ width: 300 }}
          alt="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
              {eventName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Date: {date} <br/>
                Location: {location}
            </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>deleteEvent(_id)}>
          Remove
        </Button>
      </CardActions>
      
    </Card>
  );
}