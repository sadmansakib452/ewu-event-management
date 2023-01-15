import {React, useContext, useState} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import {showEventPopAlert} from '../sharedComponents/Alert/Alert'
import {saveUserEvent, getUserEvent} from './EventFunctionalities'
import { UserContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";

const EventCard = (props) => {

  const [loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
    getAllSupplierData, 
    setGetAllSupplierData,
    getAllUserEvent, 
    setAllUserEvent] = useContext(UserContext);

    const [events, setEvents] = useState([])

    const {date,eventName,guestName, id, imageURL, location,supplierId} = props.event
   


   const addUserEvent = async(id, selectedEvent) => {


    const findEvent = getAllUserEvent.find((event)=> event.id === selectedEvent.id)
    if(findEvent === undefined){
      const savedEvent = await saveUserEvent(id, selectedEvent)
      if(savedEvent.status === 200){
        console.log("38 line important!",savedEvent)
        // setGetAllEventData([...getAllEventData, eventData]);
        selectedEvent['UserId'] = id
        selectedEvent['_id'] = savedEvent.data.insertedId 
        setAllUserEvent([...getAllUserEvent,selectedEvent])
        console.log(selectedEvent)
        toast.success("Event is successfully added");
      }
      console.log(savedEvent)
    }
    else{
      toast.error("Event is already added");
    }

    
   


   }
    

    const supplier = supplierId.map((id, index)=>{

     return props.suppliers.filter(supplier =>{

        if(supplier.id === id){
          return supplier
        }
      })
      

    })

    console.log('from line 14 of Event Card', supplier)
    // console.log(date,eventName,guestName, id, imageURL, location,supplierId)
    
  return (
    <div className="me-2 ms-3">
    <ToastContainer position="bottom-left" />
      
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea
          onClick = {()=>showEventPopAlert(props.event, supplier)}
        >
          <CardMedia
            component="img"
            height="200"
            sx={{ width: 300 }}
            image={imageURL}
            alt={eventName}
          />
          <CardContent >
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
          <Button size="small" color="primary"
          
          onClick={()=>addUserEvent(loggedInUser._id, props.event)}
          >
            Register
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default EventCard;
