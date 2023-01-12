import { React, useContext, useState } from "react";

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

import { UserContext } from "../../App";

import NoCrashIcon from "@mui/icons-material/NoCrash";
import {
  handleImageUpload,
  saveSupplierToDatabase,
  checkSupplierEmail,
} from "./UploadImage";
import { ToastContainer, toast } from "react-toastify";
import { supplierCategory } from "./FormSelectionData";
const theme = createTheme();

//------------------Main Function----------------------

export default function AddSupplier() {
  // -------------User State information--------------------
  const [
        loggedInUser,
        setLoggedInUser,
        getAllUserData,
        setGetAllUserData,
        getAllEventData,
        setGetAllEventData,
        getAllSupplierData, 
        setGetAllSupplierData
  ] = useContext(UserContext);
  // -------------User State information end----------------

  // --------------------Navigation start-----------------
  //   const navigate = useNavigate();

  // --------------------Navigation end-----------------

  // ------------------Form Submit -----------------------------

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();

  const onSubmit = async (data) => {
    const file = data.selectedfile[0] || null;
    // console.log(data);
    let supplierData = {
      id: '',
      companyName: data.companyName,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phoneNumber: data.phoneNumber,
      supplierCategory: data.supplierCategory,
    };

    if (file === null) {
      setError("selectedfile", {
        message: "Please select a image!",
      });
    } else if (file.type === "image/jpeg" || file.type === "image/png") {
      const handleSaveImageAndData = async () => {
        const email = await checkSupplierEmail(data.email);
        if (email.status === 200) {
          const uploadImage = await handleImageUpload(file);
          if (uploadImage.status === 200) {
            const imageURL = uploadImage.data.data.display_url;
            const savedSupplier = await saveSupplierToDatabase(
              imageURL,
              supplierData
            );

            if(savedSupplier.acknowledged){
              supplierData['id'] = savedSupplier.insertedId
              setGetAllSupplierData([...getAllSupplierData,supplierData]);
              toast.success("Event is successfully added");
            }
            console.log(savedSupplier)
            toast.success("Supplier is successfully added");
            reset();
          }
        } else {
          console.log(email);
          toast.error("Supplier is already added");
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
            
      <Container component="main" maxWidth="xs">
        <ToastContainer position="bottom-left" />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            
          }} 
          
        >
          <NoCrashIcon sx={{ width: 50, height: 50 }} />

          <Typography component="h1" variant="h5">
            Supplier Registration Form
          </Typography>
          <Box
            //-----------From body start
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3}}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}   >
                <TextField
                  autoComplete="given-name"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span style={{ color: "red" }}>First name is required</span>
                )}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="family-name"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span style={{ color: "red" }}>Last name is required</span>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="email"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
                  })}
                />
                {errors.email && errors.email.type === "pattern" && (
                  <span style={{ color: "red" }}>Email is invalid</span>
                )}
                {errors.email && errors.email.type === "required" && (
                  <span style={{ color: "red" }}>Email is required</span>
                )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="What's the name of your company?"
                  variant="outlined"
                  fullWidth
                  {...register("companyName", {
                    required: true,
                  })}
                />
                {errors.companyName &&
                  errors.companyName.type === "required" && (
                    <span style={{ color: "red" }}>
                      Company name is required
                    </span>
                  )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  label="Supplier Category"
                  inputProps={register("supplierCategory", {
                    required: "Please enter this category",
                  })}
                  // error={errors.currency}
                  helperText={errors.supplierCategory?.message}
                >
                  {supplierCategory.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="text"
                  fullWidth
                  id="outlined-basic"
                  label="Enter your number"
                  variant="outlined"
                  defaultValue={"+880"}
                  {...register("phoneNumber", {
                    required: true,
                    pattern: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
                  })}
                />
                {errors.phoneNumber &&
                  errors.phoneNumber.type === "required" && (
                    <span style={{ color: "red" }}>Number is required</span>
                  )}
                {errors.phoneNumber &&
                  errors.phoneNumber.type === "pattern" && (
                    <span style={{ color: "red" }}>Number is invalid</span>
                  )}
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
