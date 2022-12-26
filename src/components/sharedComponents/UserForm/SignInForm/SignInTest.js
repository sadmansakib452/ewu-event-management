import { react, useState, useContext } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import { Link as RouterLink } from 'react-router-dom';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import swal from "sweetalert";
import logo from '../../../../images/logo.svg'
//Google Authentication import
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "../../../Authentication/Firebase/firebaseConfig";
import { UserContext } from "../../../../App";



// --------------------------------

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

//------------Main Function--------------------
export default function SignInTest() {
  // -------------User State information--------------------

  const navigate = useNavigate()
  const location = useLocation()
  
  const from = location.state || '/'

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
 
    photo: "",
  });
  // -------------User State information end----------------

   // ------------------Toggle Button for selecting role of user--------------------------------
   const [alignment, setAlignment] = useState("web");

   const handleChange = (event, newAlignment) => {
     setAlignment(newAlignment);
     console.log(newAlignment)
   };
   // ------------------Toggle Button end----------------------------

  //   ----------------------Sign In with Email & Password With react hook--------------------------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const auth = getAuth(app);
  const onSubmit = (data) => {
    const { email, password } = data;

    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Sucess Alert
        

        // Signed in
        const user = userCredential.user;
    
        const loggedInUser = {
          isSignedIn: true,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL
        }
        console.log(loggedInUser);
        setUser(loggedInUser);
        setLoggedInUser(loggedInUser);
        

     
        navigate(from, { replace: true })
      })
      .catch((error) => {
        const errorMessage = error.message;
        //Fail Alert
        
        swal({
          title: "Ops!",
          text: errorMessage,
          icon: "error",
          button: "OK",
        });
      });
  };

  //   ----------------------Sign In with Email & Password with react hook end--------------------------

   // ----------Google Sign in----------
   
   const provider = new GoogleAuthProvider();
 
   const handleSubmitWithGoogle = () => {
     signInWithPopup(auth, provider)
       .then((result) => {
         // This gives you a Google Access Token. You can use it to access the Google API.
         const credential = GoogleAuthProvider.credentialFromResult(result);
         const token = credential.accessToken;
 
         // The signed-in user info.
         const { displayName, email, photoURL } = result.user;
         const user = {
           isSignedIn: true,
           name: displayName,
           email: email,
           photo: photoURL,
         };
 
         setUser(user);
 
         setLoggedInUser(user);
         navigate(from, { replace: true })
       
       
       })
       .catch((error) => {

        const errorMessage = error.message;
        //Fail Alert
   
       
       });
   };
   // ----------Google Sign in end--------------------------------------

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

            <Button
              onClick={handleSubmitWithGoogle}
              fullWidth
              variant="contained"
              sx={{ mt: 1, mb: 2 }}
            >
              Sign With Google
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

