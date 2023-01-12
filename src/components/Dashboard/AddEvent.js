import { React, useContext, useState, useEffect } from "react";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useForm } from "react-hook-form";
import { DatePickerMUI } from "./DatePickerMUI";
// import "react-datepicker/dist/react-datepicker.css";

// import { Controller } from "react-hook-form";
// import TextField from "@mui/material/TextField";

import {
  handleImageUpload,
  saveEventToDatabase,
  checkEventDate,
} from "./UploadImage";
import { ToastContainer, toast } from "react-toastify";
import { getSupplierData } from "./FormSelectionData";
import { UserContext } from "../../App";

const theme = createTheme();
const defaultValues = {
  
  MUIPicker: new Date(),
};

//------------------Main Function----------------------

export default function AddSupplier() {
  // -------------Supplier State information--------------------
  const [supplier, setSupplier] = useState([]);
  // -------------Supplier State information end----------------

  const [
    loggedInUser,
    setLoggedInUser,
    getAllUserData,
    setGetAllUserData,
    getAllEventData,
    setGetAllEventData,
  ] = useContext(UserContext);
  

  useEffect(() => {
    getSupplierData().then((supplierData) => setSupplier(supplierData));
  }, []);

  console.log(supplier);
  //----------Geting Supplier Data End------------------
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    control,
  } = useForm(defaultValues);

  const onSubmit = async (data) => {
    const month = (data.MUIPicker.$M) +1
    const day = data.MUIPicker.$D
    const year = data.MUIPicker.$y
    const date = day +"-"+month+"-"+year;
  
    const file = data.selectedfile[0] || null;
   
    let eventData = {
      // id: '',
      eventName: data.eventName,
      supplierId: data.supplier,
      guestName: data.guest,
      location: data.location,
      date: date
    };

  

    if (file === null) {
      setError("selectedfile", {
        message: "Please select a image!",
      });
    } else if (file.type === "image/jpeg" || file.type === "image/png") {
      const handleSaveImageAndData = async () => {

        const date = await checkEventDate(eventData.date);
        console.log(date);
        if (date.status === 200) {
          const uploadImage = await handleImageUpload(file);
          if (uploadImage.status === 200) {
            const imageURL = uploadImage.data.data.display_url;
            const savedEvent = await saveEventToDatabase(
              imageURL,
              eventData
            );
            
            if(savedEvent.acknowledged){
              eventData['id'] = savedEvent.insertedId
              eventData['imageURL'] = imageURL

              setGetAllEventData([...getAllEventData,eventData]);
              toast.success("Event is successfully added");
            }
            console.log('from add event',eventData)
            
          
            setGetAllEventData([...getAllEventData,eventData]);
            reset();
          }
        } else {
          
          toast.error("Event is already added");
        }
      };

      handleSaveImageAndData();
    } else {
      setError("selectedfile", {
        message: "Only Jpeg/Jpg and png format is supported.",
      });
    }
  };

  // ------------------Form Submit end-----------------------------

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <ToastContainer position="bottom-left" />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
          }}
        >
          <Typography component="h1" variant="h5">
            Event Registration Form
          </Typography>
          <Box
            //-----------From body start
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  autoComplete="given-name"
                  fullWidth
                  id="eventName"
                  label="Title"
                  autoFocus
                  {...register("eventName", { required: true })}
                />
                {errors.eventName && (
                  <span style={{ color: "red" }}>Title is required</span>
                )}
              </Grid>
             

              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  label="Add Supplier"
                  inputProps={register("supplier", {
                    required: "Please enter this category",
                  })}
                  // error={errors.currency}
                  helperText={errors.supplier?.message}
                >
                  {supplier.map((option, index) => (
                    <MenuItem key={index} value={option.id}>
                      {option.companyName +
                        " (" +
                        option.supplierCategory +
                        ")"}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Add Guest"
                  variant="outlined"
                  fullWidth
                  {...register("guest", {
                    required: true,
                  })}
                />
                {errors.guest && errors.guest.type === "required" && (
                  <span style={{ color: "red" }}>Guest is required</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  fullWidth
                  {...register("location", {
                    required: true,
                  })}
                />
                {errors.guest && errors.location.type === "required" && (
                  <span style={{ color: "red" }}>Location is required</span>
                )}
              </Grid>
              <Grid item xs={12} sm={12}>
                <DatePickerMUI control={control} />
              </Grid>
            </Grid>

            <Button
              fullWidth
              sx={{ mt: 3 }}
              variant="outlined"
              component="label"
            >
              Upload your logo
              <input
                hidden
                type="file"
                {...register("selectedfile", {
                  required: true,
                })}
              />
            </Button>
            {errors.selectedfile && (
              <div style={{ color: "red" }}>
                {" "}
                {errors.selectedfile?.message}
              </div>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
