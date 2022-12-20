import { React, useContext, useState } from "react";
import "./SignUpForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

//Google Authentication import
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebaseConfig from "../../../Authentication/Firebase/firebaseConfig";
import { UserContext } from "../../../../App";

// --------------------------------

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// -------------Main Function----------------------------
const SignUpForm = (props) => {
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

  // ------------------Form Submit -----------------------------
  const auth = getAuth(app);
 
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    
    const { email, password } = data;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //popup alert message
        swal({
          title: "Success!",
          text: "user created successfully",
          icon: "success",
          button: "OK",
        });
      
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
    <div className="main-body d-flex flex-column align-items-center mt-5">
      {/* // ----------------------Sign Up form-------------------- */}

      <div className="form-container">
        <h2 className="text-center">
          Register <br />
          As
          <br />
          {userType}
        </h2>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span style={{ color: "red" }}>Name is required</span>
            )}
          </Form.Group>

          {userType === "volunteer" && (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Student ID</Form.Label>
              <Form.Control type="text" placeholder="Ex. 2000-1-11-111" />
            </Form.Group>
          )}

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

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="confirmPassword"
              placeholder="Enter password"
              {...register("confirmPassword", { required: true })}
            />
            {errors.confirmPassword && (
              <span style={{ color: "red" }}>Password is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              defaultValue="+880" 
             
              {...register("phoneNumber", {
                required: true,
                pattern: /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/,
              })}
            />
            {errors.phoneNumber && (
              <span style={{ color: "red" }}>Phone number is required</span>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gender</Form.Label>
            <Form.Select aria-label="Default select example">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>
          {userType === "volunteer" || userType === "staff" ? (
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>What you do best</Form.Label>
              <Form.Control type="text" placeholder="Enter your message" />
            </Form.Group>
          ) : (
            ""
          )}

          <div className="d-flex justify-content-center mt-5">
            <Button className="w-100 fs-5" variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUpForm;
