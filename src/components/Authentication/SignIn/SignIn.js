import { useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Link from "@mui/material/Link";
import { Link as RouterLink } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { showPopAlert } from "../../../components/sharedComponents/Alert/Alert";
import logo from '../../../images/logo.svg'
import { UserContext } from "../../../App";
import {handleSignInUser, handleGetUserInfo} from "../../Authentication/Firebase/GoogleAtuh/GoogleAuth"
import { ToastContainer } from "react-toastify";

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

//------------Main Function--------------------
export default function SignIn() {

// --------------------Navigation start-----------------
  const navigate = useNavigate()
  const location = useLocation()
  
  const from = location.state || '/'
// --------------------Navigation end-----------------

  // -------------User State information--------------------

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // -------------User State information end----------------

  //   ----------------------Sign In with Email & Password With react hook--------------------------
  const {
    register,
    handleSubmit,
    
    formState: { errors },
  } = useForm();
 
  const onSubmit = (data) => {
    const {email, password} = data;

  
      const signIn = async(email, password) =>{
    
        const user = await handleSignInUser(email, password)
       
        
        if(user === 'auth/wrong-password' || user === 'auth/user-not-found'){
          showPopAlert('Ops',user,'error','OK')
        }
        else{
          const getUserFromDB = await handleGetUserInfo(email)
          
          setLoggedInUser(getUserFromDB)
          showPopAlert('Success','Successfully logged in','success','OK')
          navigate(from, { replace: true })
        }
      }

      signIn(email, password);

    
  };

  //   ----------------------Sign In with Email & Password with react hook end--------------------------

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
      <ToastContainer position="top-left" />
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
         
          <RouterLink to="/"> <Avatar alt="Ewu Event Management"    sx={{ width: 100, height: 100 }} src={logo} /></RouterLink>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 1 }}
          >
           
            <TextField
              margin="normal"
              // required
              fullWidth
              // id="email"
              label="Email Address"
              // name="email"
              autoComplete="email"
              autoFocus
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />

            {errors.email && errors.email.type === "required" && (
              <span style={{ color: "red" }}>Email is required</span>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <span style={{ color: "red" }}>Email is invalid</span>
            )}
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register("password", { required: true })}
            />

            {errors.password && (
              <span style={{ color: "red" }}>Password is required</span>
            )}

            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>

            
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                
                <RouterLink variant="body2" to="/signUp"> Don't have an account? Sign Up </RouterLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

