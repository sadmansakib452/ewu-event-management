import { React, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../images/logo.svg";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebaseConfig from "../../../components/Authentication/Firebase/firebaseConfig";
import { UserContext } from "../../../App";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

//------------------Main Function----------------------

export default function SignUp() {

 // -------------User State information--------------------

 const [loggedInUser,setLoggedInUser] = useContext(UserContext);

 // -------------User State information end----------------

 // --------------------Navigation start-----------------
 const navigate = useNavigate()
 const location = useLocation()
 
 const from = location.state || '/'
// --------------------Navigation end-----------------


  // ------------------Form Submit -----------------------------

  const auth = getAuth(app);

  const {
    register,
    getValues,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const {
      email,
      firstName,
      lastName,
      studentId,
      password,
      phoneNumber,
      skill,
      userGender,
      userRoll,
    } = data;

    const userData = {email, firstName, lastName, studentId, phoneNumber, skill, userGender, userRoll}
   
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        
        
         //-----------saving to our own database start----------
         fetch("http://localhost:5000/addUser", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
        .then((res) => { console.log(res.message) })
        .catch((err) => {console.log(err.message)});
        //-----------saving to our own database end----------
        
        const loggedInUser = {
          isSignedIn: true,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          ...userData
        }
        setLoggedInUser(loggedInUser)
       
        //popup alert message
        swal({
          title: "Success!",
          text: "user created successfully",
          icon: "success",
          button: "OK",
        });
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message;

        //popup alert message
        swal({
          title: "Ops!",
          text: errorMessage,
          icon: "error",
          button: "OK",
        });

        // ..
      });


  };


  // ------------------Form Submit end-----------------------------

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <RouterLink to="/">
            {" "}
            <Avatar
              alt="Ewu Event Management"
              sx={{ width: 100, height: 100 }}
              src={logo}
            />
          </RouterLink>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            //-----------From body start
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
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
                  id="outlined-basic"
                  label="Student ID"
                  variant="outlined"
                  fullWidth
                  placeholder="Ex. 2000-0-00-000"
                  {...register("studentId", {
                    required: true,
                  })}
                />
                {errors.studentId && errors.studentId.type === "required" && (
                  <span style={{ color: "red" }}>Student id is required</span>
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
                {errors.email && errors.email.type === "required" && (
                  <span style={{ color: "red" }}>Email is required</span>
                )}
                {errors.email && errors.email.type === "pattern" && (
                  <span style={{ color: "red" }}>Email is invalid</span>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register("password", {
                    required: "Password is required!",
                  })}
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password.message}</p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  {...register("passwordConfirmation", {
                    required: "Please confirm password!",
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match!";
                      },
                    },
                  })}
                />
                {errors.passwordConfirmation && (
                  <p style={{ color: "red" }}>
                    {errors.passwordConfirmation.message}
                  </p>
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Type your roll"
                  variant="outlined"
                  fullWidth
                  placeholder="Ex. admin, volunteer, staff"
                  {...register("userRoll", {
                    required: true,
                  })}
                />

                {errors.userRoll && errors.userRoll.type === "required" && (
                  <span style={{ color: "red" }}>User roll is required</span>
                )}

              
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Type your gender"
                  variant="outlined"
                  fullWidth
                  placeholder="Ex. male, female"
                  {...register("userGender", {
                    required: true,
                  })}
                />
                {errors.userGender && errors.userGender.type === "required" && (
                  <span style={{ color: "red" }}>Gender is required</span>
                )}
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
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="outlined-basic"
                  label="What you do best?"
                  variant="outlined"
                  {...register("skill")}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <RouterLink variant="body2" to="/signIn">
                  {" "}
                  Already have an account? Sign in{" "}
                </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
