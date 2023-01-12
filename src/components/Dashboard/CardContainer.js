import { React, useState, useContext } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Card from "./Card";
import { UserContext } from "../../App";

export const CardContainer = (props) => {
  const [length, setLength] = useState(props);

  const [
    loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
    getAllSupplierData,
    setGetAllSupplierData,
  ] = useContext(UserContext);

  const loop1 = ['users','events','suppliers'];
  const loop = [
  {type: 'user', length:getAllUserData.length},
  {type: 'event', length:getAllEventData.length},
  {type: 'supplier', length:getAllSupplierData.length}
]


  return (
    <>
      {
        loop.map((value, index)=>{
            return <Grid item xs={12} md={4} lg={3}>
                
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Card props={value} />
            </Paper>
          </Grid>
        })
      }
    </>
  );
};
