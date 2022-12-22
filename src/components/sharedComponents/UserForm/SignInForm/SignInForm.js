import { React, useContext, useState } from "react";
import "./SignInForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

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
const auth = getAuth(app);
//-----------Main Function--------------------------------
const SignInForm = (props) => {
  // -------------User State information--------------------
  const type = props.path[1];
  const userType = props.path[2];

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
  });
  // -------------User State information end----------------

  // ------------------Toggle Button--------------------------------
  const [alignment, setAlignment] = useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(newAlignment)
  };
  // ------------------Toggle Button end----------------------------

  // ----------Google Sign in----------
  const auth = getAuth(app);
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
          password: "",
          photo: photoURL,
        };

        setUser(user);

        setLoggedInUser(user);
      })
      .catch((error) => {});
  };
  // ----------Google Sign in end--------------------------------------

  //   ----------------------Sign In with Email & Password With react hook--------------------------
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //Sucess Alert
        swal({
          title: "Success!",
          text: "Successfully signed in",
          icon: "success",
          button: "OK",
        });

        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        //Fail Alert
        swal({
          title: "Ops!",
          text: error.message,
          icon: "error",
          button: "OK",
        });
      });
  };

  //   ----------------------Sign In with Email & Password with react hook end--------------------------

  // --------------------Sign Out------------------------------------

 

  // --------------------Sign Out end------------------------------------

  return (
    <div className="main-body d-flex flex-column align-items-center mt-5 ">
      <div className="form-container shadow p-4 mb-5 bg-body rounded">
        <h2 className="text-center">
          Sign In <br />
          As
          <br />
          {userType}
        </h2>
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton value="web">Web</ToggleButton>
            <ToggleButton value="android">Android</ToggleButton>
            <ToggleButton value="ios">iOS</ToggleButton>
          </ToggleButtonGroup>
        <Form onSubmit={handleSubmit(onSubmit)} className="">
          
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              {...register("email", {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
              })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>Email is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span style={{ color: "red" }}>Password is required</span>
            )}
          </Form.Group>
          <div className="d-flex justify-content-center mt-5">
            <Button className="w-100 fs-5" variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
        {/* ------------------Gooogle Sign In Button---------------------------- */}
        <div className="d-flex flex-column mt-3">
          <span className="align-self-center">or</span>
          <div className=" mt-5">
            <Button
              className="w-100 fs-5"
              variant="outline-secondary"
              onClick={handleSubmitWithGoogle}
            >
              <FaGoogle className="fs-3 me-2" /> Sign in with Google
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export const handleSignOut = () => {
  signOut(auth)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default SignInForm;

